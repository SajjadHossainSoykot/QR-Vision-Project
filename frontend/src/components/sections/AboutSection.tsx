import { Code2, GraduationCap, Layers3 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const techStack = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "OpenCV",
  "Python",
  "Render",
  "Vercel",
];

export default function AboutSection() {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--card) p-5 text-(--card-foreground) shadow-sm transition-colors sm:p-6">
      <div className="mb-6 flex items-start gap-3">
        <div className="shrink-0 rounded-xl bg-(--primary) p-2 text-(--primary-foreground)">
          <GraduationCap size={22} />
        </div>

        <div>
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-(--muted-foreground)">
            About Project
          </p>

          <h2 className="text-2xl font-bold text-(--card-foreground)">
            Educational Computer Vision Project
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-(--muted-foreground)">
            QR Vision is an academic and portfolio project that combines digital
            image processing, QR code technology, backend API development, and
            modern frontend design.
          </p>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="rounded-xl border border-(--border) bg-(--muted) p-4">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary) text-(--primary-foreground)">
            <Layers3 size={20} />
          </div>

          <h3 className="font-bold text-(--card-foreground)">Purpose</h3>

          <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
            To demonstrate QR generation, QR decoding, OpenCV preprocessing, API
            integration, and responsive frontend interaction in one full-stack
            project.
          </p>
        </div>

        <div className="rounded-xl border border-(--border) bg-(--muted) p-4">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary) text-(--primary-foreground)">
            <Code2 size={20} />
          </div>

          <h3 className="font-bold text-(--card-foreground)">Development</h3>

          <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
            The backend is built with FastAPI and OpenCV, while the frontend is
            built with Next.js, TypeScript, Tailwind CSS, and API integration.
          </p>
        </div>

        <div className="rounded-xl border border-(--border) bg-(--muted) p-4">
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-(--primary) text-(--primary-foreground)">
            <FaGithub size={20} />
          </div>

          <h3 className="font-bold text-(--card-foreground)">Developer</h3>

          <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
            Developed by Sajjad Hossain Soykot as a practical learning and
            showcase project for computer vision and full-stack development.
          </p>
        </div>
      </div>

      <div className="mt-5 rounded-xl border border-(--border) bg-(--muted) p-4">
        <h3 className="mb-3 font-bold text-(--card-foreground)">Tech Stack</h3>

        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-(--border) bg-(--card) px-3 py-1 text-sm font-medium text-(--card-foreground)"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href="https://github.com/SajjadHossainSoykot"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--primary) px-4 py-2 text-sm font-semibold text-(--primary-foreground) transition hover:opacity-85"
        >
          <FaGithub size={16} />
          Visit Developer GitHub
        </a>
      </div>
    </div>
  );
}