import { QrCode } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 -mx-5 mb-10 border-b border-slate-200/70 bg-slate-50/90 px-5 py-4 backdrop-blur-md dark:border-slate-800/80 dark:bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white shadow-sm dark:bg-white dark:text-slate-900">
            <QrCode size={22} />
          </div>

          <div>
            <p className="text-sm font-bold text-slate-900 dark:text-slate-100">
              QR Vision
            </p>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Computer Vision QR Toolkit
            </p>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}