import { QrCode, ScanLine, Sparkles } from "lucide-react";

export default function HeroSection(){
    return (
        <header className="mb-10 text-center">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-900 text-white shadow-md">
            <QrCode size={34} />
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            QR Vision
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            A FastAPI, OpenCV, and Next.js based QR code generation and detection
            system. Generate QR codes, decode uploaded images, and test different
            computer vision detection methods.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
              <QrCode size={16} />
              QR Generator
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
              <ScanLine size={16} />
              QR Decoder
            </span>

            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm ring-1 ring-slate-200">
              <Sparkles size={16} />
              OpenCV Processing
            </span>
          </div>
        </header>
    )
}