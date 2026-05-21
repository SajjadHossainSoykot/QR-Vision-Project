import cv2
import numpy as np
from pathlib import Path


def order_points(points):
    """
    Order 4 corner points:
    top-left, top-right, bottom-right, bottom-left.
    """

    rect = np.zeros((4, 2), dtype="float32")

    s = points.sum(axis=1)
    diff = np.diff(points, axis=1)

    rect[0] = points[np.argmin(s)]
    rect[2] = points[np.argmax(s)]
    rect[1] = points[np.argmin(diff)]
    rect[3] = points[np.argmax(diff)]

    return rect


def perspective_transform(image, points):
    """
    Apply perspective transformation to make a tilted QR region straight.
    """

    rect = order_points(points)

    top_left, top_right, bottom_right, bottom_left = rect

    width_top = np.linalg.norm(top_right - top_left)
    width_bottom = np.linalg.norm(bottom_right - bottom_left)
    max_width = int(max(width_top, width_bottom))

    height_right = np.linalg.norm(bottom_right - top_right)
    height_left = np.linalg.norm(bottom_left - top_left)
    max_height = int(max(height_right, height_left))

    destination = np.array(
        [
            [0, 0],
            [max_width - 1, 0],
            [max_width - 1, max_height - 1],
            [0, max_height - 1],
        ],
        dtype="float32",
    )

    matrix = cv2.getPerspectiveTransform(rect, destination)

    warped = cv2.warpPerspective(
        image,
        matrix,
        (max_width, max_height)
    )

    return warped


def detect_qr_region_math(image_path: str) -> dict:
    """
    Detect QR-like square region using image-processing logic:
    grayscale -> blur -> threshold -> contour -> square filtering.
    """

    image_path = Path(image_path)

    if not image_path.exists():
        return {
            "success": False,
            "candidate_points": None,
            "message": "Image file not found."
        }

    image = cv2.imread(str(image_path))

    if image is None:
        return {
            "success": False,
            "candidate_points": None,
            "message": "Could not read image."
        }

    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    blur = cv2.GaussianBlur(gray, (5, 5), 0)

    _, threshold = cv2.threshold(
        blur,
        0,
        255,
        cv2.THRESH_BINARY + cv2.THRESH_OTSU
    )

    contours, _ = cv2.findContours(
        threshold,
        cv2.RETR_EXTERNAL,
        cv2.CHAIN_APPROX_SIMPLE
    )

    qr_candidate = None
    max_area = 0

    for contour in contours:
        area = cv2.contourArea(contour)

        if area < 1000:
            continue

        perimeter = cv2.arcLength(contour, True)

        approx = cv2.approxPolyDP(
            contour,
            0.02 * perimeter,
            True
        )

        if len(approx) == 4:
            x, y, w, h = cv2.boundingRect(approx)
            aspect_ratio = w / float(h)

            if 0.7 <= aspect_ratio <= 1.3:
                if area > max_area:
                    max_area = area
                    qr_candidate = approx.reshape(4, 2)

    if qr_candidate is None:
        return {
            "success": False,
            "candidate_points": None,
            "message": "No QR-like square region found."
        }

    warped = perspective_transform(image, qr_candidate)

    return {
        "success": True,
        "candidate_points": qr_candidate.astype(int).tolist(),
        "warped": warped,
        "message": "QR-like square region detected."
    }


def decode_qr_after_math_detection(image_path: str) -> dict:
    """
    Detect QR-like square region using math/CV logic,
    apply perspective transform, then decode using OpenCV.
    """

    result = detect_qr_region_math(image_path)

    if not result["success"]:
        return {
            "success": False,
            "data": None,
            "candidate_points": None,
            "method": "math_detection",
            "message": result["message"]
        }

    warped = result["warped"]

    detector = cv2.QRCodeDetector()
    data, bbox, _ = detector.detectAndDecode(warped)

    bbox_list = None
    if bbox is not None:
        bbox_list = bbox.astype(int).tolist()

    if data:
        return {
            "success": True,
            "data": data,
            "candidate_points": result["candidate_points"],
            "bbox": bbox_list,
            "method": "math_detection",
            "message": "QR decoded after math-based region detection."
        }

    return {
        "success": False,
        "data": None,
        "candidate_points": result["candidate_points"],
        "bbox": bbox_list,
        "method": "math_detection",
        "message": "QR-like region found, but decoding failed."
    }