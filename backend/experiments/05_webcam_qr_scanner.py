import cv2


def start_webcam_qr_scanner(camera_index: int = 0):
    """
    Real-time QR code scanner using webcam and OpenCV.
    
    Press 'q' to quit.
    """

    cap = cv2.VideoCapture(camera_index)

    if not cap.isOpened():
        print("Could not open webcam.")
        return

    detector = cv2.QRCodeDetector()

    print("Webcam QR scanner started.")
    print("Press 'q' to quit.")

    while True:
        ret, frame = cap.read()

        if not ret:
            print("Could not read frame from webcam.")
            break

        data, bbox, _ = detector.detectAndDecode(frame)

        if bbox is not None:
            bbox = bbox.astype(int)

            # Draw bounding box around QR code
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

            # Show decoded data if available
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

                print("Decoded QR Data:", data)

        cv2.imshow("QR Vision - Live Webcam Scanner", frame)

        if cv2.waitKey(1) & 0xFF == ord("q"):
            break

    cap.release()
    cv2.destroyAllWindows()


if __name__ == "__main__":
    start_webcam_qr_scanner(camera_index=0)