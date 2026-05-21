import { FaGithub } from "react-icons/fa"

export default function Footer() {
    return (
        <footer className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
            <p>QR Vision Project — FastAPI, OpenCV, Next.js, Tailwind CSS</p>

            <a
                href="https://github.com/SajjadHossainSoykot"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-medium text-slate-700 transition hover:text-slate-950"
            >
                <FaGithub size={16} />
                Developed By: Sajjad Hossain Soykot
            </a>
        </footer>
    )
}
