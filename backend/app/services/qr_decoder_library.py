import cv2
from pathlib import Path


def decode_qr_image(image_path: str) -> dict:
    """
    Decode QR code from image using OpenCV QRCodeDetector.

    Args:
        image_path: Path of uploaded QR image.

    Returns:
        Dictionary containing success status, decoded data, and message.
    """

    image_path = Path(image_path)

    if not image_path.exists():
        return {
            "success": False,
            "data": None,
            "bbox": None,
            "method": "library",
            "message": "Image file not found."
        }

    image = cv2.imread(str(image_path))

    if image is None:
        return {
            "success": False,
            "data": None,
            "bbox": None,
            "method": "library",
            "message": "Could not read image."
        }

    detector = cv2.QRCodeDetector()

    data, bbox, _ = detector.detectAndDecode(image)

    bbox_list = None
    if bbox is not None:
        bbox_list = bbox.astype(int).tolist()

    if data:
        return {
            "success": True,
            "data": data,
            "bbox": bbox_list,
            "method": "library",
            "message": "QR code decoded successfully."
        }

    return {
        "success": False,
        "data": None,
        "bbox": bbox_list,
        "method": "library",
        "message": "No QR code detected."
    }