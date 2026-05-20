import cv2
from pathlib import Path


def decode_qr(image_path: str):
    """
    Decode QR code from an image using OpenCV QRCodeDetector.
    """

    image_path = Path(image_path)

    if not image_path.exists():
        print("Image file not found:", image_path)
        return None

    image = cv2.imread(str(image_path))

    if image is None:
        print("Could not read image.")
        return None

    detector = cv2.QRCodeDetector()

    data, bbox, straight_qrcode = detector.detectAndDecode(image)

    if data:
        print("QR code detected successfully.")
        print("Decoded data:")
        print(data)
        return data

    print("No QR code detected.")
    return None


if __name__ == "__main__":
    decode_qr("sample_data/generated_qr/generated_qr.png")
    # decode_qr("sample_data/generated_qr/invalid_qr.png")