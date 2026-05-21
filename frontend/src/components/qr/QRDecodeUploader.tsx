"use client";

import { DragEvent, useState } from "react";
import { FileImage, Loader2, ScanLine, Server, Upload } from "lucide-react";
import { decodeQRCode, type DecodeEndpoint } from "@/lib/api";
import ResultCard from "./ResultCard";

export default function QRDecodeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState("");
  const [loadingMode, setLoadingMode] = useState<DecodeEndpoint | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const isValidImageFile = (selectedFile: File) => {
    return selectedFile.type.startsWith("image/");
  };

  const handleSelectedFile = (selectedFile: File | null) => {
    setResult(null);
    setError("");

    if (!selectedFile) {
      return;
    }

    if (!isValidImageFile(selectedFile)) {
      setError("Please upload a valid image file such as PNG, JPG, or JPEG.");
      return;
    }

    setFile(selectedFile);

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    setPreview(URL.createObjectURL(selectedFile));
  };

  const handleDragOver = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);
  };

  const handleDrop = (event: DragEvent<HTMLLabelElement>) => {
    event.preventDefault();
    event.stopPropagation();
    setIsDragging(false);

    const droppedFile = event.dataTransfer.files?.[0];

    if (!droppedFile) {
      return;
    }

    handleSelectedFile(droppedFile);
  };

  const handleDecode = async (endpoint: DecodeEndpoint) => {
    if (!file) {
      setError("Please upload a QR image first.");
      return;
    }

    try {
      setLoadingMode(endpoint);
      setError("");
      setResult(null);

      const data = await decodeQRCode(file, endpoint);
      setResult(data);
    } catch {
      setError(
        "QR decoding failed. The backend may still be waking up, or the image may not contain a readable QR code. Please try again in a few seconds."
      );
    } finally {
      setLoadingMode(null);
    }
  };

  const buttonText: Record<DecodeEndpoint, string> = {
    "decode-qr": "Basic Decode",
    "decode-qr-preprocess": "Preprocess Decode",
    "decode-qr-math": "Math Detection",
  };

  return (
    <div className="min-w-0 rounded-2xl border border-(--border) bg-(--card) p-5 text-(--card-foreground) shadow-sm transition-colors sm:p-6">
      <div className="mb-6 flex items-center gap-3">
        <div className="shrink-0 rounded-xl bg-(--primary) p-2 text-(--primary-foreground)">
          <ScanLine size={22} />
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-bold text-(--card-foreground)">
            Decode QR Code
          </h2>
          <p className="text-sm text-(--muted-foreground)">
            Upload, drag and drop a QR image, then inspect the decoded response.
          </p>
        </div>
      </div>

      <div className="grid min-w-0 gap-6 lg:grid-cols-[1fr_360px]">
        <div className="min-w-0 space-y-5">
          <label
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex min-h-56 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed p-6 text-center transition ${
              isDragging
                ? "scale-[1.01] border-(--primary) bg-(--card)"
                : "border-(--border) bg-(--muted) hover:opacity-85"
            }`}
          >
            <Upload className="mb-3 text-(--muted-foreground)" size={34} />

            <p className="font-semibold text-(--card-foreground)">
              {isDragging ? "Drop QR image here" : "Click or drag QR image here"}
            </p>

            <p className="mt-1 text-sm text-(--muted-foreground)">
              PNG, JPG, JPEG supported
            </p>

            {file && (
              <p className="mt-3 max-w-full truncate rounded-full border border-(--border) bg-(--card) px-3 py-1 text-xs font-medium text-(--muted-foreground)">
                Selected: {file.name}
              </p>
            )}

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleSelectedFile(e.target.files?.[0] || null)}
            />
          </label>

          <div className="grid gap-3 sm:grid-cols-3">
            {(
              [
                "decode-qr",
                "decode-qr-preprocess",
                "decode-qr-math",
              ] as DecodeEndpoint[]
            ).map((endpoint) => (
              <button
                key={endpoint}
                onClick={() => handleDecode(endpoint)}
                disabled={loadingMode !== null}
                className="flex min-w-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--primary) px-4 py-3 text-sm font-semibold text-(--primary-foreground) transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loadingMode === endpoint ? (
                  <Loader2 className="shrink-0 animate-spin" size={16} />
                ) : (
                  <ScanLine className="shrink-0" size={16} />
                )}

                <span className="break-words text-center">
                  {loadingMode === endpoint ? "Decoding..." : buttonText[endpoint]}
                </span>
              </button>
            ))}
          </div>

          {loadingMode && (
            <div className="flex items-start gap-2 rounded-xl border border-(--border) bg-(--muted) p-3 text-sm leading-6 text-(--muted-foreground)">
              <Server className="mt-0.5 shrink-0 animate-pulse" size={16} />
              <p>
                Starting QR Vision API... The first request may take a few
                seconds because the free backend can wake up from sleep.
              </p>
            </div>
          )}
        </div>

        <div className="min-w-0 rounded-xl border border-(--border) bg-(--muted) p-4 transition-colors">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-(--card-foreground)">
            <FileImage size={16} />
            Uploaded QR Preview
          </div>

          {preview ? (
            <div className="flex min-h-72 items-center justify-center overflow-hidden rounded-xl border border-(--border) bg-(--card) p-4">
              <img
                src={preview}
                alt="Uploaded QR"
                className="max-h-72 max-w-full rounded-lg bg-white object-contain p-2 shadow-sm"
              />
            </div>
          ) : (
            <div className="flex min-h-72 items-center justify-center rounded-xl border border-dashed border-(--border) bg-(--card) p-6 text-center">
              <p className="max-w-xs text-sm leading-6 text-(--muted-foreground)">
                Uploaded QR image preview will appear here.
              </p>
            </div>
          )}
        </div>
      </div>

      <ResultCard result={result} error={error} />
    </div>
  );
}