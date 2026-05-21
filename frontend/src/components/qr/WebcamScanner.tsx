"use client";

import { useEffect, useRef, useState } from "react";
import { BrowserQRCodeReader, IScannerControls } from "@zxing/browser";
import { Camera, Copy, Loader2, Play, Square, VideoOff } from "lucide-react";

type ScanStatus = "idle" | "starting" | "scanning" | "success" | "error";

export default function WebcamScanner() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const controlsRef = useRef<IScannerControls | null>(null);
  const readerRef = useRef<BrowserQRCodeReader | null>(null);

  const [status, setStatus] = useState<ScanStatus>("idle");
  const [decodedText, setDecodedText] = useState("");
  const [error, setError] = useState("");
  const [selectedDeviceId, setSelectedDeviceId] = useState<string | undefined>(
    undefined
  );
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([]);

  useEffect(() => {
    readerRef.current = new BrowserQRCodeReader();

    return () => {
      stopScanner();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadCameraDevices = async () => {
    try {
      const videoInputDevices =
        await BrowserQRCodeReader.listVideoInputDevices();

      setDevices(videoInputDevices);

      if (videoInputDevices.length > 0 && !selectedDeviceId) {
        const backCamera =
          videoInputDevices.find((device) =>
            device.label.toLowerCase().includes("back")
          ) ||
          videoInputDevices.find((device) =>
            device.label.toLowerCase().includes("rear")
          ) ||
          videoInputDevices[0];

        setSelectedDeviceId(backCamera.deviceId);
      }

      return videoInputDevices;
    } catch {
      setError("Could not access camera devices. Please allow camera permission.");
      setStatus("error");
      return [];
    }
  };

  const startScanner = async () => {
    try {
      setStatus("starting");
      setError("");
      setDecodedText("");

      const availableDevices = await loadCameraDevices();

      if (availableDevices.length === 0) {
        setError("No camera device found on this browser/device.");
        setStatus("error");
        return;
      }

      const deviceId = selectedDeviceId || availableDevices[0].deviceId;

      if (!readerRef.current || !videoRef.current) {
        setError("Scanner is not ready. Please refresh and try again.");
        setStatus("error");
        return;
      }

      controlsRef.current = await readerRef.current.decodeFromVideoDevice(
        deviceId,
        videoRef.current,
        (result, scanError) => {
          if (result) {
            const text = result.getText();

            if (text) {
              setDecodedText(text);
              setStatus("success");
              controlsRef.current?.stop();
              controlsRef.current = null;
            }
          }

          if (scanError) {
            // Continuous scan throws "not found" errors while searching.
            // We do not show those as UI errors.
          }
        }
      );

      setStatus("scanning");
    } catch {
      setError(
        "Could not start webcam scanner. Please allow camera permission and try again."
      );
      setStatus("error");
    }
  };

  const stopScanner = () => {
    controlsRef.current?.stop();
    controlsRef.current = null;

    if (videoRef.current?.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream;
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
    }

    if (status !== "success") {
      setStatus("idle");
    }
  };

  const resetScanner = () => {
    stopScanner();
    setDecodedText("");
    setError("");
    setStatus("idle");
  };

  const handleCopy = async () => {
    if (!decodedText) return;
    await navigator.clipboard.writeText(decodedText);
  };

  const isScanning = status === "starting" || status === "scanning";

  return (
    <div className="min-w-0 rounded-2xl border border-(--border) bg-(--card) p-5 text-(--card-foreground) shadow-sm transition-colors sm:p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="shrink-0 rounded-xl bg-(--primary) p-2 text-(--primary-foreground)">
          <Camera size={22} />
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-bold text-(--card-foreground)">
            Webcam QR Scanner
          </h2>
          <p className="text-sm text-(--muted-foreground)">
            Scan QR codes directly from your device camera in real time.
          </p>
        </div>
      </div>

      <div className="grid min-w-0 gap-6 lg:grid-cols-[1fr_360px]">
        <div className="min-w-0 space-y-4">
          <div className="relative overflow-hidden rounded-2xl border border-(--border) bg-black">
            <video
              ref={videoRef}
              className="aspect-video w-full bg-black object-cover"
              muted
              playsInline
            />

            {!isScanning && !decodedText && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-6 text-center">
                <div>
                  <VideoOff className="mx-auto mb-3 text-white" size={40} />
                  <p className="font-semibold text-white">Camera is off</p>
                  <p className="mt-1 text-sm text-slate-300">
                    Click Start Scanner to enable webcam scanning.
                  </p>
                </div>
              </div>
            )}

            {status === "starting" && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/60">
                <div className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900">
                  <Loader2 className="animate-spin" size={16} />
                  Starting camera...
                </div>
              </div>
            )}

            {status === "scanning" && (
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <div className="h-52 w-52 rounded-3xl border-4 border-white/80 shadow-[0_0_0_9999px_rgba(0,0,0,0.35)]" />
              </div>
            )}
          </div>

          {devices.length > 1 && (
            <select
              value={selectedDeviceId}
              onChange={(event) => setSelectedDeviceId(event.target.value)}
              disabled={isScanning}
              className="w-full rounded-xl border border-(--border) bg-(--input) px-4 py-3 text-sm text-(--foreground) outline-none disabled:opacity-60"
            >
              {devices.map((device, index) => (
                <option key={device.deviceId} value={device.deviceId}>
                  {device.label || `Camera ${index + 1}`}
                </option>
              ))}
            </select>
          )}

          <div className="grid gap-3 sm:grid-cols-2">
            {!isScanning ? (
              <button
                onClick={startScanner}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--primary) px-5 py-3 text-sm font-semibold text-(--primary-foreground) transition hover:opacity-85"
              >
                <Play size={16} />
                Start Scanner
              </button>
            ) : (
              <button
                onClick={stopScanner}
                className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--primary) px-5 py-3 text-sm font-semibold text-(--primary-foreground) transition hover:opacity-85"
              >
                <Square size={16} />
                Stop Scanner
              </button>
            )}

            <button
              onClick={resetScanner}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-(--border) bg-(--card) px-5 py-3 text-sm font-semibold text-(--card-foreground) transition hover:bg-(--muted)"
            >
              Reset
            </button>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-(--border) bg-(--muted) p-4 transition-colors">
          <h3 className="mb-3 text-sm font-semibold text-(--card-foreground)">
            Live Scan Result
          </h3>

          {decodedText ? (
            <div className="space-y-4">
              <div className="rounded-xl border border-(--success-border) bg-(--success-bg) p-4">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-(--success-text)">
                  QR Data Found
                </p>

                <p className="break-words text-lg font-semibold leading-7 text-(--foreground)">
                  {decodedText}
                </p>
              </div>

              <button
                onClick={handleCopy}
                className="inline-flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--primary) px-4 py-3 text-sm font-semibold text-(--primary-foreground) transition hover:opacity-85"
              >
                <Copy size={16} />
                Copy Result
              </button>
            </div>
          ) : error ? (
            <div className="rounded-xl border border-(--error-border) bg-(--error-bg) p-4">
              <p className="font-semibold text-(--error-text)">Scanner Error</p>
              <p className="mt-2 text-sm leading-6 text-(--error-text)">
                {error}
              </p>
            </div>
          ) : (
            <div className="flex min-h-56 items-center justify-center rounded-xl border border-dashed border-(--border) bg-(--card) p-6 text-center">
              <p className="max-w-xs text-sm leading-6 text-(--muted-foreground)">
                Start the scanner and place a QR code inside the camera frame.
                The decoded text will appear here.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-(--border) bg-(--muted) p-4">
        <p className="text-sm leading-6 text-(--muted-foreground)">
          Camera scanning works on <strong>localhost</strong> during development
          and on <strong>HTTPS</strong> after deployment. Some browsers may ask
          for camera permission before listing available cameras.
        </p>
      </div>
    </div>
  );
}