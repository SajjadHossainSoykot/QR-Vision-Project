import QRDecodeUploader from "@/components/QRDecodeUploader";
import QRGeneratorForm from "@/components/QRGeneratorForm";
import WebcamScanner from "@/components/WebcamScanner";
import { QrCode, ScanLine, Sparkles } from "lucide-react";
import {FaGithub} from "react-icons/fa"

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="mx-auto max-w-6xl px-5 py-10">
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

        <div className="grid gap-6 lg:grid-cols-2">
          <QRGeneratorForm />
          <QRDecodeUploader />
        </div>

        <div className="mt-6">
          <WebcamScanner />
        </div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
          <p>QR Vision Project — FastAPI, OpenCV, Next.js, Tailwind CSS</p>

          <a
            href="https://github.com/SajjadHossainSoykot/QR-Vision-Project"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-medium text-slate-700 transition hover:text-slate-950"
          >
            <FaGithub size={16} />
            GitHub Repository
          </a>
        </footer>
      </section>
    </main>
  );
}