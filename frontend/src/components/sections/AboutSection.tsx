import {
  Code2,
  ExternalLink,
  GraduationCap,
  Layers3,
  Lightbulb,
  Rocket,
} from "lucide-react";

import {
  FaDiscord,
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { SiCodeforces } from "react-icons/si";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/SajjadHossainSoykot",
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/sajjadhossainsoykot",
    icon: FaLinkedinIn,
  },
  {
    name: "X",
    href: "https://x.com/sajjadsoykot",
    icon: FaTwitter,
  },
  {
    name: "Facebook",
    href: "https://fb.com/sajjadhossainsoykot",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/sajjad_hossain_soykot",
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/c/sajjadhossainsoykot",
    icon: FaYoutube,
  },
  {
    name: "Codeforces",
    href: "https://codeforces.com/profile/sajjadsoykot",
    icon: SiCodeforces,
  },
  {
    name: "Discord",
    href: "https://discord.gg/bfuyjQk",
    icon: FaDiscord,
  },
];

const techStack = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "FastAPI",
  "OpenCV",
  "Python",
  "NumPy",
  "Pillow",
  "qrcode",
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
            QR Vision SS
          </h2>

          <p className="mt-2 max-w-full text-sm leading-6 text-(--muted-foreground)">
            QR Vision SS is an academic and portfolio project that combines QR
            code technology, digital image processing, FastAPI backend
            development, and modern Next.js frontend design.
          </p>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <DeveloperCard />

        <div className="grid gap-4">
          <InfoCard
            icon={<GraduationCap size={22} />}
            title="Academic Background"
            description="This project is inspired by Digital Signal and Image Processing laboratory concepts. It transforms QR code generation, detection, decoding, and OpenCV-based image processing ideas into an interactive web-based platform."
          />

          <InfoCard
            icon={<Rocket size={22} />}
            title="Project Purpose"
            description="The main purpose of this project is to help learners understand how QR codes can be generated, uploaded, detected, decoded, and connected with a full-stack API-based web application."
          />

          <InfoCard
            icon={<Lightbulb size={22} />}
            title="Learning Goal"
            description="Besides QR and image processing, this project is also a learning journey for FastAPI routing, backend response handling, Next.js App Router, reusable frontend components, API integration, and responsive UI design."
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <InfoCard
          icon={<Layers3 size={22} />}
          title="Core Features"
          description="QR generation, QR image upload, drag-and-drop upload, uploaded QR preview, multiple decode methods, decoded answer display, API response preview, warning/error states, and theme toggling."
        />

        <InfoCard
          icon={<Code2 size={22} />}
          title="Backend Implementation"
          description="The backend is built with Python, FastAPI, OpenCV, Pillow, NumPy, and qrcode. It exposes API endpoints for QR generation and multiple QR decoding methods."
        />

        <InfoCard
          icon={<Code2 size={22} />}
          title="Frontend Implementation"
          description="The frontend is built with Next.js, TypeScript, Tailwind CSS, CSS variables, Lucide icons, React Icons, responsive layout, sticky navbar, and reusable UI components."
        />
      </div>

      <div className="mt-6 rounded-2xl border border-(--border) bg-(--muted) p-5">
        <h3 className="mb-3 text-xl font-bold text-(--card-foreground)">
          Tech Stack
        </h3>

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
      </div>

      <div className="mt-6 rounded-2xl border border-(--border) bg-(--muted) p-5">
        <h3 className="text-xl font-bold text-(--card-foreground)">
          Disclaimer
        </h3>

        <JustifiedText className="mt-2 text-sm text-(--muted-foreground)">
          QR Vision SS is created for academic learning, digital image
          processing practice, QR code technology demonstration, and full-stack
          project development practice. It is not intended for high-security QR
          verification, banking authentication, payment validation, or
          production-level identity verification systems.
        </JustifiedText>
      </div>
    </div>
  );
}

function DeveloperCard() {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--muted) p-5 shadow-sm">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <img
          src="https://avatars.githubusercontent.com/u/105968856"
          alt="Sajjad Hossain Soykot"
          width={116}
          height={116}
          className="h-28 w-28 shrink-0 rounded-2xl border border-(--border) bg-(--card) object-cover p-1 shadow-sm"
        />

        <div className="min-w-0">
          <p className="text-sm font-semibold text-(--muted-foreground)">
            Developer
          </p>

          <h3 className="mt-1 text-2xl font-bold leading-tight text-(--card-foreground)">
            Sajjad Hossain Soykot
          </h3>

          <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
            B.Sc. Engineering in ICT · Islamic University, Bangladesh
          </p>

          <a
            href="https://github.com/SajjadHossainSoykot"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-(--primary) px-4 py-2 text-sm font-semibold text-(--primary-foreground) transition hover:opacity-85"
          >
            <ExternalLink size={15} />
            View GitHub Profile
          </a>
        </div>
      </div>

      <div className="mt-5 space-y-4">
        <JustifiedText className="text-sm text-(--muted-foreground)">
          I am a B.Sc. Engineering student in Information and Communication
          Technology at Islamic University, Bangladesh. I am interested in
          programming, full-stack development, UI/UX design, web development,
          research, and building academic technology projects.
        </JustifiedText>

        <JustifiedText className="text-sm text-(--muted-foreground)">
          QR Vision SS was created to transform digital image processing and QR
          code concepts into an interactive full-stack web platform. Through
          this project, I explored how to connect a FastAPI backend with a
          modern Next.js frontend and how to present computer vision features in
          a clean user interface.
        </JustifiedText>
      </div>

      <div className="mt-5 rounded-2xl border border-(--border) bg-(--card) p-4">
        <h4 className="text-lg font-bold text-(--card-foreground)">
          Connect with me
        </h4>

        <p className="mt-1 text-sm text-(--muted-foreground)">
          Find my work, profiles, and programming activity here.
        </p>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {socialLinks.map((link) => {
            const Icon = link.icon;

            return (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="group flex cursor-pointer items-center gap-3 rounded-xl border border-(--border) bg-(--muted) p-3 transition hover:-translate-y-0.5 hover:opacity-90"
                aria-label={`Visit ${link.name}`}
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--primary) text-lg text-(--primary-foreground)">
                  <Icon />
                </span>

                <span className="flex min-w-0 flex-1 items-center justify-between gap-2">
                  <span className="truncate text-sm font-semibold text-(--card-foreground)">
                    {link.name}
                  </span>

                  <ExternalLink
                    size={15}
                    className="shrink-0 text-(--muted-foreground)"
                  />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  description,
}: {
  icon?: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-(--border) bg-(--muted) p-5 shadow-sm">
      {icon ? (
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-(--primary) text-(--primary-foreground)">
          {icon}
        </div>
      ) : null}

      <h3 className="mb-2 text-lg font-bold text-(--card-foreground)">
        {title}
      </h3>

      <JustifiedText className="text-sm text-(--muted-foreground)">
        {description}
      </JustifiedText>
    </div>
  );
}

function JustifiedText({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={`leading-7 ${className}`}
      style={{
        textAlign: "justify",
        textJustify: "inter-word",
      }}
    >
      {children}
    </p>
  );
}