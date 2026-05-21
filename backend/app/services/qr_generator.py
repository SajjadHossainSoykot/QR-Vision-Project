import qrcode
from pathlib import Path


def generate_qr_image(data: str, output_path: str) -> str:
    """
    Generate a QR code image from text/URL/input data.

    Args:
        data: Text, URL, or any string to encode.
        output_path: Path where generated QR image will be saved.

    Returns:
        Saved QR image path as string.
    """

    if not data or not data.strip():
        raise ValueError("QR data cannot be empty.")

    output_path = Path(output_path)
    output_path.parent.mkdir(parents=True, exist_ok=True)

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

    image.save(output_path)

    return str(output_path)