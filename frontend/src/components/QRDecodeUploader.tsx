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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-slate-900 p-2 text-white">
          <ScanLine size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">Decode QR Code</h2>
          <p className="text-sm text-slate-500">
            Upload a QR image and test different detection methods.
          </p>
        </div>
      </div>

      <label className="flex min-h-44 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 p-6 text-center transition hover:border-slate-900 hover:bg-slate-100">
        <Upload className="mb-3 text-slate-500" size={32} />
        <p className="font-semibold text-slate-800">Click to upload QR image</p>
        <p className="mt-1 text-sm text-slate-500">PNG, JPG, JPEG supported</p>

        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
        />
      </label>

      {preview && (
        <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
            <FileImage size={16} />
            Uploaded Image Preview
          </div>

          <img
            src={preview}
            alt="Uploaded QR"
            className="mx-auto max-h-72 rounded-lg object-contain"
          />
        </div>
      )}

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {(["decode-qr", "decode-qr-preprocess", "decode-qr-math"] as DecodeEndpoint[]).map(
          (endpoint) => (
            <button
              key={endpoint}
              onClick={() => handleDecode(endpoint)}
              disabled={loadingMode !== null}
              className="flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loadingMode === endpoint ? (
                <Loader2 className="animate-spin" size={16} />
              ) : (
                <ScanLine size={16} />
              )}

              {loadingMode === endpoint ? "Decoding..." : buttonText[endpoint]}
            </button>
          )
        )}
      </div>

      <ResultCard result={result} error={error} />
    </div>
  );
}