import cv2


def start_webcam_qr_scanner(camera_index: int = 0):
    """
    Real-time QR code scanner using webcam and OpenCV.

    Controls:
    - Press q to quit
    - Press ESC to quit
    - Closing the window also exits
    """

    cap = cv2.VideoCapture(camera_index)

    if not cap.isOpened():
        print("Could not open webcam.")
        return

    detector = cv2.QRCodeDetector()
    window_name = "QR Vision - Live Webcam Scanner"

    cv2.namedWindow(window_name, cv2.WINDOW_NORMAL)

    print("Webcam QR scanner started.")
    print("Click on the camera window, then press 'q' or ESC to quit.")

    last_data = None

    try:
        while True:
            ret, frame = cap.read()

            if not ret:
                print("Could not read frame from webcam.")
                break

            data, bbox, _ = detector.detectAndDecode(frame)

            if bbox is not None:
                bbox = bbox.astype(int)

                for i in range(len(bbox[0])):
                    point1 = tuple(bbox[0][i])
                    point2 = tuple(bbox[0][(i + 1) % len(bbox[0])])

                    cv2.line(
                        frame,
                        point1,
                        point2,
                        (0, 255, 0),
                        2
                    )

                if data:
                    x = bbox[0][0][0]
                    y = bbox[0][0][1]

                    cv2.putText(
                        frame,
                        data,
                        (x, y - 10),
                        cv2.FONT_HERSHEY_SIMPLEX,
                        0.7,
                        (0, 255, 0),
                        2
                    )

                    # Print only when new data is detected
                    if data != last_data:
                        print("Decoded QR Data:", data)
                        last_data = data

            cv2.imshow(window_name, frame)

            key = cv2.waitKey(1) & 0xFF

            if key == ord("q") or key == 27:
                print("Scanner stopped by user.")
                break

            # Exit if user closes OpenCV window manually
            if cv2.getWindowProperty(window_name, cv2.WND_PROP_VISIBLE) < 1:
                print("Scanner window closed.")
                break

    except KeyboardInterrupt:
        print("\nScanner stopped by keyboard interrupt.")

    finally:
        cap.release()
        cv2.destroyAllWindows()
        cv2.waitKey(1)
        print("Webcam released and windows closed.")


if __name__ == "__main__":
    start_webcam_qr_scanner(camera_index=0)