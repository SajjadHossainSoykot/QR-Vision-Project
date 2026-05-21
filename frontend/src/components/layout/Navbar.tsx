import { QrCode } from "lucide-react";
import ThemeToggle from "@/components/theme/ThemeToggle";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-(--border) bg-(--background) px-4 py-4 shadow-sm transition-colors sm:px-5">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div className="flex min-w-0 items-center gap-2">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--primary) text-(--primary-foreground) shadow-sm">
            <QrCode size={22} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-bold text-(--foreground)">
              QR Vision SS
            </p>
            <p className="truncate text-xs text-(--muted-foreground)">
              Computer Vision QR Toolkit
            </p>
          </div>
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}