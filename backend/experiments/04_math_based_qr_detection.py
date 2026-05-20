import cv2
import numpy as np
import matplotlib.pyplot as plt
from pathlib import Path


def order_points(points):
    """
    Order 4 points as:
    top-left, top-right, bottom-right, bottom-left
    """

    rect = np.zeros((4, 2), dtype="float32")

    s = points.sum(axis=1)
    diff = np.diff(points, axis=1)

    rect[0] = points[np.argmin(s)]       # top-left
    rect[2] = points[np.argmax(s)]       # bottom-right
    rect[1] = points[np.argmin(diff)]    # top-right
    rect[3] = points[np.argmax(diff)]    # bottom-left

    return rect


def perspective_transform(image, points):
    """
    Apply perspective transform to make tilted QR region straight.
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


def detect_qr_region_math(image_path: str):
    """
    Detect square-like QR region using image processing operations.
    """

    image_path = Path(image_path)

    if not image_path.exists():
        raise FileNotFoundError(f"Image not found: {image_path}")

    image = cv2.imread(str(image_path))

    if image is None:
        raise ValueError("Could not read image.")

    marked_image = image.copy()

    # Step 1: grayscale
    gray = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)

    # Step 2: blur
    blur = cv2.GaussianBlur(gray, (5, 5), 0)

    # Step 3: binary threshold
    _, threshold = cv2.threshold(
        blur,
        0,
        255,
        cv2.THRESH_BINARY + cv2.THRESH_OTSU
    )

    # Step 4: find contours
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
        print("No QR-like square region found.")
        return {
            "success": False,
            "warped": None,
            "marked": marked_image,
            "gray": gray,
            "threshold": threshold,
            "message": "No QR-like region found",
        }

    cv2.polylines(
        marked_image,
        [qr_candidate.astype(int)],
        True,
        (0, 255, 0),
        3
    )

    for point in qr_candidate:
        cv2.circle(
            marked_image,
            tuple(point.astype(int)),
            6,
            (0, 0, 255),
            -1
        )

    warped = perspective_transform(image, qr_candidate)

    return {
        "success": True,
        "warped": warped,
        "marked": marked_image,
        "gray": gray,
        "threshold": threshold,
        "message": "QR-like region detected",
    }


def decode_after_math_detection(image_path: str):
    result = detect_qr_region_math(image_path)

    if not result["success"]:
        print(result["message"])
        return None

    warped = result["warped"]

    detector = cv2.QRCodeDetector()

    data, bbox, _ = detector.detectAndDecode(warped)

    if data:
        print("Decoded data from math-detected region:")
        print(data)
    else:
        print("QR-like region found, but decoding failed.")

    marked_rgb = cv2.cvtColor(result["marked"], cv2.COLOR_BGR2RGB)

    plt.figure(figsize=(15, 8))

    plt.subplot(1, 3, 1)
    plt.imshow(marked_rgb)
    plt.title("Detected QR-like Region")
    plt.axis("off")

    plt.subplot(1, 3, 2)
    plt.imshow(result["threshold"], cmap="gray")
    plt.title("Threshold Image")
    plt.axis("off")

    plt.subplot(1, 3, 3)
    plt.imshow(cv2.cvtColor(warped, cv2.COLOR_BGR2RGB))
    plt.title("Perspective Corrected")
    plt.axis("off")

    plt.tight_layout()
    plt.show()

    return data


if __name__ == "__main__":
    # image_path = "sample_data/generated_qr/generated_qr.png"
    image_path = "sample_data/input_images/business-card-qr.png"
    # image_path = "sample_data/input_images/crumpled_qr.png"
    decode_after_math_detection(image_path)