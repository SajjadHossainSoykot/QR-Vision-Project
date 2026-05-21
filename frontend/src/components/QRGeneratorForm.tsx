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
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-5 flex items-center gap-3">
        <div className="rounded-xl bg-slate-900 p-2 text-white">
          <QrCode size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">Generate QR Code</h2>
          <p className="text-sm text-slate-500">
            Create QR codes from text, links, or WiFi data.
          </p>
        </div>
      </div>

      <textarea
        value={data}
        onChange={(e) => setData(e.target.value)}
        placeholder="Example: https://qr-vision-ss.vercel.app"
        className="min-h-32 w-full resize-none rounded-xl border border-slate-300 p-4 text-sm outline-none transition focus:border-slate-900"
      />

      {error && <p className="mt-3 text-sm font-medium text-red-600">{error}</p>}

      <button
        onClick={handleGenerate}
        disabled={loading}
        className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? <Loader2 className="animate-spin" size={18} /> : <QrCode size={18} />}
        {loading ? "Generating..." : "Generate QR"}
      </button>

      {qrUrl && (
        <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-5 text-center">
          <img
            src={qrUrl}
            alt="Generated QR Code"
            className="mx-auto h-56 w-56 rounded-lg bg-white p-3 shadow-sm"
          />

          <a
            href={qrUrl}
            download="qr-code.png"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
          >
            <Download size={16} />
            Download QR
          </a>
        </div>
      )}
    </div>
  );
}