"use client";

import { useState } from "react";
import { FileImage, Loader2, ScanLine, Upload } from "lucide-react";
import { decodeQRCode, type DecodeEndpoint } from "@/lib/api";
import ResultCard from "./ResultCard";

export default function QRDecodeUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState("");
  const [result, setResult] = useState<unknown>(null);
  const [error, setError] = useState("");
  const [loadingMode, setLoadingMode] = useState<DecodeEndpoint | null>(null);

  const handleFileChange = (selectedFile: File | null) => {
    setFile(selectedFile);
    setResult(null);
    setError("");

    if (preview) {
      URL.revokeObjectURL(preview);
    }

    if (selectedFile) {
      setPreview(URL.createObjectURL(selectedFile));
    } else {
      setPreview("");
    }
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
      setError("QR decoding failed. Try another image or check backend.");
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
            Upload a QR image and preview the decoded API response.
          </p>
        </div>
      </div>

      <div className="grid min-w-0 gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="min-w-0 space-y-5">
          <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-(--border) bg-(--muted) p-6 text-center transition hover:opacity-85">
            <Upload className="mb-3 text-(--muted-foreground)" size={32} />

            <p className="font-semibold text-(--card-foreground)">
              Click to upload QR image
            </p>

            <p className="mt-1 text-sm text-(--muted-foreground)">
              PNG, JPG, JPEG supported
            </p>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
            />
          </label>

          {preview && (
            <div className="min-w-0 rounded-xl border border-(--border) bg-(--muted) p-4 transition-colors">
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-(--card-foreground)">
                <FileImage size={16} />
                Uploaded Image Preview
              </div>

              <div className="flex justify-center overflow-hidden rounded-xl">
                <img
                  src={preview}
                  alt="Uploaded QR"
                  className="max-h-80 max-w-full rounded-lg bg-white object-contain p-2"
                />
              </div>
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-3">
            {(["decode-qr", "decode-qr-preprocess", "decode-qr-math"] as DecodeEndpoint[]).map(
              (endpoint) => (
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
              )
            )}
          </div>
        </div>

        <div className="min-w-0">
          <div className="h-full min-h-72 rounded-xl border border-(--border) bg-(--muted) p-4">
            <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-(--card-foreground)">
              API Response Preview
            </div>

            {result ? (
              <pre className="max-h-[420px] max-w-full overflow-auto whitespace-pre-wrap break-words rounded-lg border border-(--border) bg-(--card) p-4 text-xs leading-6 text-(--foreground)">
                {JSON.stringify(result, null, 2)}
              </pre>
            ) : (
              <div className="flex min-h-56 items-center justify-center rounded-lg border border-dashed border-(--border) bg-(--card) p-6 text-center">
                <p className="max-w-sm text-sm leading-6 text-(--muted-foreground)">
                  Upload a QR image and click a decode method. The raw API
                  response will appear here.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      <ResultCard result={result} error={error} />
    </div>
  );
}