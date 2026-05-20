import qrcode
from pathlib import Path


def generate_qr(data: str, output_path: str):
    """
    Generate a QR code image from input text or URL.
    """

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

    print(f"QR code generated successfully.")
    print(f"Saved at: {output_path}")


if __name__ == "__main__":
    user_input = input("Enter text or URL for QR code: ")

    generate_qr(
        data=user_input,
        output_path="sample_data/generated_qr/generated_qr.png"
    )