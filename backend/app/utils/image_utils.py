import cv2


def read_image(image_path: str):
    image = cv2.imread(image_path)

    if image is None:
        raise ValueError("Could not read image.")

    return image


def convert_to_grayscale(image):
    return cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)