import { FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-(--border) pt-6 text-sm text-(--muted-foreground) transition-colors sm:flex-row">
      <p>QR Vision Project — FastAPI, OpenCV, Next.js, Tailwind CSS</p>

      <a
        href="https://github.com/SajjadHossainSoykot"
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 font-medium text-(--foreground) transition hover:opacity-75"
      >
        <FaGithub size={16} />
        Developed By: Sajjad Hossain Soykot
      </a>
    </footer>
  );
}