import { QrCode, ScanLine, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <header className="mb-10 text-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-(--primary) text-(--primary-foreground) shadow-md">
        <QrCode size={34} />
      </div>

      <h1 className="text-4xl font-extrabold tracking-tight text-(--foreground) sm:text-5xl">
        QR Vision
      </h1>

      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-(--muted-foreground)">
        A FastAPI, OpenCV, and Next.js based QR code generation and detection
        system. Generate QR codes, decode uploaded images, and test different
        computer vision detection methods.
      </p>

      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2 text-sm font-medium text-(--card-foreground) shadow-sm">
          <QrCode size={16} />
          QR Generator
        </span>

        <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2 text-sm font-medium text-(--card-foreground) shadow-sm">
          <ScanLine size={16} />
          QR Decoder
        </span>

        <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--card) px-4 py-2 text-sm font-medium text-(--card-foreground) shadow-sm">
          <Sparkles size={16} />
          OpenCV Processing
        </span>
      </div>
    </header>
  );
}