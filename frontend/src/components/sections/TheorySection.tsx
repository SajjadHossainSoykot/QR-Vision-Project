import {
  Binary,
  Eye,
  Grid3X3,
  ScanLine,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const theoryItems = [
  {
    icon: Grid3X3,
    title: "QR Code Structure",
    description:
      "A QR code stores data inside a two-dimensional grid of black and white modules.",
  },
  {
    icon: Eye,
    title: "Finder Patterns",
    description:
      "The three large square patterns help scanners detect position, scale, and orientation.",
  },
  {
    icon: Binary,
    title: "Binary Data Encoding",
    description:
      "Text or URLs are converted into binary data and placed inside the QR matrix.",
  },
  {
    icon: ShieldCheck,
    title: "Error Correction",
    description:
      "QR codes include error correction so damaged or partially unclear codes may still be decoded.",
  },
  {
    icon: ScanLine,
    title: "Image Detection",
    description:
      "Computer vision techniques locate QR regions from uploaded images using OpenCV-based logic.",
  },
  {
    icon: Workflow,
    title: "Preprocessing",
    description:
      "Grayscale conversion, thresholding, and noise reduction can improve decoding accuracy.",
  },
];

export default function TheorySection() {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--card) p-5 text-(--card-foreground) shadow-sm transition-colors sm:p-6">
      <div className="mb-6">
        <p className="mb-2 text-sm font-semibold uppercase tracking-wide text-(--muted-foreground)">
          Learning Section
        </p>

        <h2 className="text-2xl font-bold text-(--card-foreground)">
          QR Code Theory
        </h2>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-(--muted-foreground)">
          QR Vision is not only a scanner or generator. It also demonstrates the
          theory behind QR code structure, image processing, and decoding.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {theoryItems.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-xl border border-(--border) bg-(--muted) p-4 transition hover:opacity-90"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary) text-(--primary-foreground)">
                <Icon size={20} />
              </div>

              <h3 className="font-bold text-(--card-foreground)">
                {item.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}