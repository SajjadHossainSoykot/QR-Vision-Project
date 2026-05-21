import qrcode
from pathlib import Path
from io import BytesIO


def create_qr_image(data: str):
    """
    Create a QR code image object from input text/URL.
    This does not save the image.
    """

    if not data or not data.strip():
        raise ValueError("QR data cannot be empty.")

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

    return image


def generate_qr_image(data: str, output_path: str) -> str:
    """
    Generate QR code image and save it to a file.
    Useful for local experiments/debugging.
    """

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    image = create_qr_image(data)
    image.save(output_path)

    return str(output_path)


def generate_qr_buffer(data: str) -> BytesIO:
    """
    Generate QR code image and return it as an in-memory PNG buffer.
    Useful for deployed/stateless API.
    """

    image = create_qr_image(data)

    image_buffer = BytesIO()
    image.save(image_buffer, format="PNG")
    image_buffer.seek(0)

    return image_buffer