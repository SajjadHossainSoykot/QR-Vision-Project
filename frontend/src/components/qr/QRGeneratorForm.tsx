"use client";

import { useState } from "react";
import { Download, Loader2, QrCode } from "lucide-react";
import { generateQRCode } from "@/lib/api";

export default function QRGeneratorForm() {
  const [data, setData] = useState("");
  const [qrUrl, setQrUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!data.trim()) {
      setError("Please enter text, URL, or WiFi data.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      if (qrUrl) {
        URL.revokeObjectURL(qrUrl);
      }

      const blob = await generateQRCode(data);
      const imageUrl = URL.createObjectURL(blob);
      setQrUrl(imageUrl);
    } catch {
      setError("QR generation failed. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-w-0 rounded-2xl border border-(--border) bg-(--card) p-5 text-(--card-foreground) shadow-sm transition-colors sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="shrink-0 rounded-xl bg-(--primary) p-2 text-(--primary-foreground)">
          <QrCode size={22} />
        </div>

        <div className="min-w-0">
          <h2 className="text-xl font-bold text-(--card-foreground)">
            Generate QR Code
          </h2>
          <p className="text-sm text-(--muted-foreground)">
            Create QR codes from text, links, or WiFi data.
          </p>
        </div>
      </div>

      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Example: https://qr-vision-ss.vercel.app"
        className="min-h-32 w-full min-w-0 resize-none rounded-xl border border-(--border) bg-(--input) p-4 text-sm text-(--foreground) outline-none transition placeholder:text-(--muted-foreground) focus:ring-2 focus:ring-(--primary)"
      />

      {error && (
        <p className="mt-3 text-sm font-medium text-(--error-text)">
          {error}
        </p>
      )}

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-(--primary) px-5 py-3 font-semibold text-(--primary-foreground) transition hover:opacity-85 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? (
          <Loader2 className="animate-spin" size={18} />
        ) : (
          <QrCode size={18} />
        )}
        {loading ? "Generating..." : "Generate QR"}
      </button>

      {qrUrl && (
        <div className="mt-6 min-w-0 rounded-xl border border-(--border) bg-(--muted) p-5 text-center transition-colors">
          <img
            src={qrUrl}
            alt="Generated QR Code"
            className="mx-auto h-56 w-56 max-w-full rounded-lg bg-white p-3 shadow-sm"
          />

          <a
            href={qrUrl}
            download="qr-code.png"
            className="mt-4 inline-flex items-center gap-2 rounded-xl border border-(--border) bg-(--card) px-4 py-2 text-sm font-semibold text-(--card-foreground) shadow-sm transition hover:bg-(--muted)"
          >
            <Download size={16} />
            Download QR
          </a>
        </div>
      )}
    </div>
  );
}