from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import FileResponse
from fastapi.middleware.cors import CORSMiddleware
from pathlib import Path
import shutil
import uuid

from app.services.qr_generator import generate_qr_image
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


BASE_DIR = Path(__file__).resolve().parent
UPLOAD_DIR = BASE_DIR / "uploads"
OUTPUT_DIR = BASE_DIR / "outputs"

UPLOAD_DIR.mkdir(parents=True, exist_ok=True)
OUTPUT_DIR.mkdir(parents=True, exist_ok=True)


@app.get("/")
def root():
    return {
        "success": True,
        "message": "QR Vision API is running.",
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
    """

    filename = f"qr_{uuid.uuid4().hex}.png"
    output_path = OUTPUT_DIR / filename

    try:
        saved_path = generate_qr_image(
            data=data,
            output_path=str(output_path)
        )

        return FileResponse(
            path=saved_path,
            media_type="image/png",
            filename=filename
        )

    except Exception as error:
        return {
            "success": False,
            "message": str(error)
        }


@app.post("/decode-qr")
async def decode_qr(file: UploadFile = File(...)):
    """
    Decode QR code using OpenCV library directly.
    """

    filename = f"{uuid.uuid4().hex}_{file.filename}"
    file_path = UPLOAD_DIR / filename

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = decode_qr_image(str(file_path))

    return result


@app.post("/decode-qr-preprocess")
async def decode_qr_preprocess(file: UploadFile = File(...)):
    """
    Decode QR code using original image first.
    If it fails, apply preprocessing and try again.
    """

    filename = f"{uuid.uuid4().hex}_{file.filename}"
    file_path = UPLOAD_DIR / filename

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = decode_qr_with_preprocessing(str(file_path))

    return result


@app.post("/decode-qr-math")
async def decode_qr_math(file: UploadFile = File(...)):
    """
    Detect QR-like region using image-processing/math logic,
    apply perspective transform, then decode.
    """

    filename = f"{uuid.uuid4().hex}_{file.filename}"
    file_path = UPLOAD_DIR / filename

    with file_path.open("wb") as buffer:
        shutil.copyfileobj(file.file, buffer)

    result = decode_qr_after_math_detection(str(file_path))

    return result