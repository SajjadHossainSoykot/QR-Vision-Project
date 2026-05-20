import cv2
import matplotlib.pyplot as plt
from pathlib import Path


def preprocess_qr_image(image_path: str):
    """
    Preprocess QR image before decoding:
    1. Read image
    2. Convert to grayscale
    3. Improve contrast
    4. Reduce noise
    5. Apply binary threshold
    """

    image_path = Path(image_path)

    if not image_path.exists():
        raise FileNotFoundError(f"Image not found: {image_path}")

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


def decode_qr_with_preprocessing(image_path: str):
    """
    Try direct QR decoding first.
    If failed, try preprocessed image.
    """

    original, gray, contrast, blur, threshold = preprocess_qr_image(image_path)

    detector = cv2.QRCodeDetector()

    data, bbox, _ = detector.detectAndDecode(original)

    if data:
        print("QR decoded from original image.")
        print("Decoded data:")
        print(data)
        return data

    data, bbox, _ = detector.detectAndDecode(threshold)

    if data:
        print("QR decoded after preprocessing.")
        print("Decoded data:")
        print(data)
        return data

    print("No QR code detected.")
    return None


def show_preprocessing_steps(image_path: str):
    """
    Show original, grayscale, contrast, blur, and threshold images.
    """

    original, gray, contrast, blur, threshold = preprocess_qr_image(image_path)

    original_rgb = cv2.cvtColor(original, cv2.COLOR_BGR2RGB)

    plt.figure(figsize=(15, 8))

    plt.subplot(2, 3, 1)
    plt.imshow(original_rgb)
    plt.title("Original Image")
    plt.axis("off")

    plt.subplot(2, 3, 2)
    plt.imshow(gray, cmap="gray")
    plt.title("Grayscale")
    plt.axis("off")

    plt.subplot(2, 3, 3)
    plt.imshow(contrast, cmap="gray")
    plt.title("Histogram Equalized")
    plt.axis("off")

    plt.subplot(2, 3, 4)
    plt.imshow(blur, cmap="gray")
    plt.title("Gaussian Blur")
    plt.axis("off")

    plt.subplot(2, 3, 5)
    plt.imshow(threshold, cmap="gray")
    plt.title("Otsu Threshold")
    plt.axis("off")

    plt.tight_layout()
    plt.show()


if __name__ == "__main__":
    image_path = "sample_data/generated_qr/generated_qr.png"
    # image_path = "sample_data/input_images/crumpled_qr.png"
    # image_path = "sample_data/input_images/invalid_qr.png"

    decode_qr_with_preprocessing(image_path)
    show_preprocessing_steps(image_path)