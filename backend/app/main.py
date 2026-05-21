from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import StreamingResponse
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
from io import BytesIO
import tempfile
import shutil
import qrcode

from app.services.qr_decoder_library import decode_qr_image
from app.services.qr_decoder_preprocess import decode_qr_with_preprocessing
from app.services.qr_detector_math import decode_qr_after_math_detection


app = FastAPI(
    title="QR Vision API",
    description="QR code generation and processing API using Python, OpenCV, and FastAPI.",
    version="1.0.0"
)


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def root():
    return {
        "success": True,
        "message": "QR Vision API is running.",
        "storage": "Temporary/in-memory storage for deployment safety.",
        "endpoints": {
            "generate_qr": "/generate-qr",
            "decode_qr": "/decode-qr",
            "decode_qr_preprocess": "/decode-qr-preprocess",
            "decode_qr_math": "/decode-qr-math",
            "docs": "/docs"
        }
    }


@app.post("/generate-qr")
def generate_qr(data: str = Form(...)):
    """
    Generate QR code image from input text or URL.
    This endpoint does not save image permanently.
    It returns PNG directly from memory.
    """

    if not data or not data.strip():
        return {
            "success": False,
            "message": "QR data cannot be empty."
        }

    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=4,
    )

    qr.add_data(data)
    qr.make(fit=True)

    image = qr.make_image(
        fill_color="black",
        back_color="white"
    )

    image_buffer = BytesIO()
    image.save(image_buffer, format="PNG")
    image_buffer.seek(0)

    return StreamingResponse(
        image_buffer,
        media_type="image/png",
        headers={
            "Content-Disposition": "inline; filename=qr_vision.png"
        }
    )


def save_upload_temporarily(file: UploadFile) -> str:
    """
    Save uploaded image temporarily.
    The file will be deleted manually after processing.
    """

    suffix = Path(file.filename).suffix or ".png"

    temp_file = tempfile.NamedTemporaryFile(
        delete=False,
        suffix=suffix
    )

    try:
        with temp_file as buffer:
            shutil.copyfileobj(file.file, buffer)

        return temp_file.name

    except Exception:
        Path(temp_file.name).unlink(missing_ok=True)
        raise


@app.post("/decode-qr")
async def decode_qr(file: UploadFile = File(...)):
    """
    Decode QR code using OpenCV library directly.
    Uploaded file is temporary and deleted after processing.
    """

    temp_path = save_upload_temporarily(file)

    try:
        result = decode_qr_image(temp_path)
        return result

    finally:
        Path(temp_path).unlink(missing_ok=True)


@app.post("/decode-qr-preprocess")
async def decode_qr_preprocess(file: UploadFile = File(...)):
    """
    Decode QR code using original image first.
    If it fails, apply preprocessing and try again.
    Uploaded file is temporary and deleted after processing.
    """

    temp_path = save_upload_temporarily(file)

    try:
        result = decode_qr_with_preprocessing(temp_path)
        return result

    finally:
        Path(temp_path).unlink(missing_ok=True)


@app.post("/decode-qr-math")
async def decode_qr_math(file: UploadFile = File(...)):
    """
    Detect QR-like region using image-processing/math logic,
    apply perspective transform, then decode.
    Uploaded file is temporary and deleted after processing.
    """

    temp_path = save_upload_temporarily(file)

    try:
        result = decode_qr_after_math_detection(temp_path)
        return result

    finally:
        Path(temp_path).unlink(missing_ok=True)