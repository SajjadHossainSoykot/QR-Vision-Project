import {
  Camera,
  Code2,
  ExternalLink,
  FileImage,
  GraduationCap,
  Layers3,
  Lightbulb,
  MonitorSmartphone,
  QrCode,
  Rocket,
  Server,
  ShieldCheck,
  UploadCloud,
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
  "Webcam Scanner",
  "Render",
  "Vercel",
];

const featureCards = [
  {
    icon: <QrCode size={22} />,
    title: "QR Generation",
    description:
      "Users can generate QR codes from text or URLs, preview the generated QR image, and download it directly from the frontend.",
  },
  {
    icon: <UploadCloud size={22} />,
    title: "Image Upload Decode",
    description:
      "Users can upload or drag-and-drop QR images and decode them using backend API endpoints connected with FastAPI and OpenCV.",
  },
  {
    icon: <Camera size={22} />,
    title: "Live Webcam Scanner",
    description:
      "The current version includes a working webcam scanner that can scan QR codes directly from the browser camera in real time.",
  },
  {
    icon: <FileImage size={22} />,
    title: "Multiple Decode Methods",
    description:
      "The project supports basic decode, preprocessing-based decode, and mathematical/computer vision based QR detection methods.",
  },
  {
    icon: <Server size={22} />,
    title: "Deployed Backend API",
    description:
      "The backend API is deployed on Render and provides live endpoints for QR generation, image upload, QR decoding, and API documentation.",
  },
  {
    icon: <MonitorSmartphone size={22} />,
    title: "Responsive Frontend",
    description:
      "The frontend is deployed on Vercel and designed with a clean responsive layout for desktop and mobile browser usage.",
  },
];

const deploymentLinks = [
  {
    label: "Live Frontend",
    href: "https://qr-vision-ss.vercel.app",
  },
  {
    label: "Live Backend API",
    href: "https://qr-vision-ss-api.onrender.com",
  },
  {
    label: "Swagger Docs",
    href: "https://qr-vision-ss-api.onrender.com/docs",
  },
  {
    label: "GitHub Repository",
    href: "https://github.com/SajjadHossainSoykot/QR-Vision-Project",
  },
];

export default function AboutSection() {
  return (
    <section className="rounded-2xl border border-(--border) bg-(--card) p-5 text-(--card-foreground) shadow-sm transition-colors sm:p-6">
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

          <JustifiedText className="mt-2 max-w-full text-sm text-(--muted-foreground)">
            QR Vision SS is an academic and portfolio-based full-stack computer
            vision project that combines QR code technology, digital image
            processing, FastAPI backend development, OpenCV experiments, live
            webcam QR scanning, and modern Next.js frontend design.
          </JustifiedText>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <DeveloperCard />

        <div className="grid gap-4">
          <InfoCard
            icon={<GraduationCap size={22} />}
            title="Academic Background"
            description="This project is inspired by ICT-4104 Digital Signal and Image Processing Laboratory concepts. It converts QR code generation, image upload, image preprocessing, QR detection, and OpenCV-based processing ideas into a deployed web application."
          />

          <InfoCard
            icon={<Rocket size={22} />}
            title="Project Purpose"
            description="The main purpose of this project is to help students, developers, and learners understand how QR codes can be generated, uploaded, detected, decoded, scanned through a webcam, and connected with a full-stack API-based platform."
          />

          <InfoCard
            icon={<Lightbulb size={22} />}
            title="Learning Goal"
            description="Besides QR and image processing, this project is also a practical learning journey for FastAPI routing, backend response handling, Next.js App Router, reusable frontend components, REST API integration, deployment, and responsive UI design."
          />
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {featureCards.map((feature) => (
          <InfoCard
            key={feature.title}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-3">
        <InfoCard
          icon={<Layers3 size={22} />}
          title="Core Features"
          description="QR generation, QR image upload, drag-and-drop upload, uploaded QR preview, live webcam scanner, multiple decode methods, decoded answer display, API response preview, warning/error states, and theme toggling."
        />

        <InfoCard
          icon={<Code2 size={22} />}
          title="Backend Implementation"
          description="The backend is built with Python, FastAPI, Uvicorn, OpenCV, Pillow, NumPy, qrcode, and python-multipart. It exposes API endpoints for QR generation and multiple QR decoding methods."
        />

        <InfoCard
          icon={<Code2 size={22} />}
          title="Frontend Implementation"
          description="The frontend is built with Next.js, React, TypeScript, Tailwind CSS, CSS variables, Lucide icons, React Icons, reusable components, responsive layout, sticky navbar, and webcam scanning support."
        />
      </div>

      <div className="mt-6 rounded-2xl border border-(--border) bg-(--muted) p-5">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--primary) text-(--primary-foreground)">
            <ShieldCheck size={22} />
          </div>

          <div>
            <h3 className="text-xl font-bold text-(--card-foreground)">
              Deployment Status
            </h3>
            <p className="text-sm text-(--muted-foreground)">
              Frontend and backend are both deployed and connected.
            </p>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {deploymentLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between gap-3 rounded-xl border border-(--border) bg-(--card) px-4 py-3 text-sm font-semibold text-(--card-foreground) transition hover:-translate-y-0.5 hover:opacity-90"
            >
              <span>{link.label}</span>
              <ExternalLink
                size={16}
                className="shrink-0 text-(--muted-foreground) transition group-hover:text-(--card-foreground)"
              />
            </a>
          ))}
        </div>
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
          processing practice, QR code technology demonstration, computer vision
          experimentation, and full-stack project development practice. It is
          not intended for high-security QR verification, banking
          authentication, payment validation, banking login verification, or
          production-level identity verification systems.
        </JustifiedText>
      </div>
    </section>
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
          modern Next.js frontend and how to present QR generation, QR decoding,
          image upload, API response handling, and webcam scanning in a clean
          user interface.
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