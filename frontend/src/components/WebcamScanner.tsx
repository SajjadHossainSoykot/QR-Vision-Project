"use client";

import { Camera } from "lucide-react";

export default function WebcamScanner() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-xl bg-slate-900 p-2 text-white">
          <Camera size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-slate-900">Webcam Scanner</h2>
          <p className="text-sm text-slate-500">
            Real-time webcam QR scanner will be added after image upload scanner is stable.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-sm text-slate-500">
        Coming soon: live QR scanning using webcam.
      </div>
    </div>
  );
}