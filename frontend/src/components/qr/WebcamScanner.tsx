"use client";

import { Camera } from "lucide-react";

export default function WebcamScanner() {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--card) p-6 text-(--card-foreground) shadow-sm transition-colors">
      <div className="mb-3 flex items-center gap-3">
        <div className="rounded-xl bg-(--primary) p-2 text-(--primary-foreground)">
          <Camera size={22} />
        </div>

        <div>
          <h2 className="text-xl font-bold text-(--card-foreground)">
            Webcam Scanner
          </h2>
          <p className="text-sm text-(--muted-foreground)">
            Real-time webcam QR scanner will be added after image upload scanner
            is stable.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-dashed border-(--border) bg-(--muted) p-8 text-center text-sm text-(--muted-foreground) transition-colors">
        Coming soon: live QR scanning using webcam.
      </div>
    </div>
  );
}