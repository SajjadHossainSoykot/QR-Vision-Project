import cv2
from pathlib import Path


def preprocess_qr_image(image_path: str):
    """
    Preprocess QR image:
    1. Read image
    2. Convert to grayscale
    3. Improve contrast using histogram equalization
    4. Reduce noise using Gaussian blur
    5. Convert to binary using Otsu thresholding
    """

    image_path = Path(image_path)

    if not image_path.exists():
        raise FileNotFoundError(f"Image file not found: {image_path}")

    image = cv2.imread(str(image_path))

    if image is None:
        raise ValueError("Could not read image.")

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    contrast = cv2.equalizeHist(gray)

    blur = cv2.GaussianBlur(contrast, (3, 3), 0)

    _, threshold = cv2.threshold(
        blur,
        0,
        255,
        cv2.THRESH_BINARY + cv2.THRESH_OTSU
    )

    return image, gray, contrast, blur, threshold


def decode_qr_with_preprocessing(image_path: str) -> dict:
    """
    Decode QR code by trying:
    1. Original image
    2. Preprocessed threshold image

    Args:
        image_path: Path of uploaded QR image.

    Returns:
        Dictionary containing success status, decoded data, method, and message.
    """

    try:
        original, gray, contrast, blur, threshold = preprocess_qr_image(image_path)
    except Exception as error:
        return {
            "success": False,
            "data": None,
            "bbox": None,
            "method": "preprocess",
            "message": str(error)
        }

    detector = cv2.QRCodeDetector()

    # First try original image
    data, bbox, _ = detector.detectAndDecode(original)

    bbox_list = None
    if bbox is not None:
        bbox_list = bbox.astype(int).tolist()

    if data:
        return {
            "success": True,
            "data": data,
            "bbox": bbox_list,
            "method": "original",
            "message": "QR decoded from original image."
        }

    # Then try threshold image
    data, bbox, _ = detector.detectAndDecode(threshold)

    bbox_list = None
    if bbox is not None:
        bbox_list = bbox.astype(int).tolist()

    if data:
        return {
            "success": True,
            "data": data,
            "bbox": bbox_list,
            "method": "preprocessed",
            "message": "QR decoded after preprocessing."
        }

    return {
        "success": False,
        "data": None,
        "bbox": bbox_list,
        "method": "preprocessed",
        "message": "No QR code detected after preprocessing."
    }