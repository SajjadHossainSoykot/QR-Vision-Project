import { QrCode } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 -mx-5 mb-10 border-b border-(--border) bg-(--background) px-5 py-4 transition-colors">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary) text-(--primary-foreground) shadow-sm">
            <QrCode size={22} />
          </div>

          <div>
            <p className="text-sm font-bold text-(--foreground)">QR Vision</p>
            <p className="text-xs text-(--muted-foreground)">
              Computer Vision QR Toolkit
            </p>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}