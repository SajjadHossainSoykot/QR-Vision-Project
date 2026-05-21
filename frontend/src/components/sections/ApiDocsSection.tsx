import { ExternalLink, FileJson, Server, UploadCloud } from "lucide-react";

const endpoints = [
  {
    method: "GET",
    endpoint: "/",
    purpose: "Check API running status",
  },
  {
    method: "POST",
    endpoint: "/generate-qr",
    purpose: "Generate QR code from text or URL",
  },
  {
    method: "POST",
    endpoint: "/decode-qr",
    purpose: "Decode uploaded QR image using basic method",
  },
  {
    method: "POST",
    endpoint: "/decode-qr-preprocess",
    purpose: "Decode uploaded QR image after preprocessing",
  },
  {
    method: "POST",
    endpoint: "/decode-qr-math",
    purpose: "Decode uploaded QR image using math/computer vision detection",
  },
];

const API_BASE_URL = "https://qr-vision-ss-api.onrender.com";
const ENV_VALUE = `NEXT_PUBLIC_API_BASE_URL=${API_BASE_URL}`;

export default function ApiDocsSection() {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-(--border) bg-(--card) p-5 text-(--card-foreground) shadow-sm transition-colors sm:p-6">
      <div className="mb-6 flex min-w-0 items-start gap-3">
        <div className="shrink-0 rounded-xl bg-(--primary) p-2 text-(--primary-foreground)">
          <Server size={22} />
        </div>

        <div className="min-w-0">
          <p className="mb-1 text-sm font-semibold uppercase tracking-wide text-(--muted-foreground)">
            Backend API
          </p>

          <h2 className="break-words text-2xl font-bold text-(--card-foreground)">
            Live API Documentation
          </h2>

          <p className="mt-2 max-w-3xl text-sm leading-6 text-(--muted-foreground)">
            The FastAPI backend is deployed on Render and exposes QR generation
            and decoding endpoints for the frontend.
          </p>
        </div>
      </div>

      <div className="grid min-w-0 gap-4 lg:grid-cols-2">
        <div className="min-w-0 rounded-xl border border-(--border) bg-(--muted) p-4">
          <div className="mb-3 flex items-center gap-2 font-semibold text-(--card-foreground)">
            <UploadCloud size={18} />
            Live Backend
          </div>

          <p className="max-w-full overflow-x-auto whitespace-nowrap rounded-lg border border-(--border) bg-(--card) p-3 text-sm text-(--foreground)">
            {API_BASE_URL}/
          </p>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row">
            <a
              href={`${API_BASE_URL}/`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl bg-(--primary) px-4 py-2 text-sm font-semibold text-(--primary-foreground) transition hover:opacity-85"
            >
              Open API
              <ExternalLink size={15} />
            </a>

            <a
              href={`${API_BASE_URL}/docs`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-(--border) bg-(--card) px-4 py-2 text-sm font-semibold text-(--card-foreground) transition hover:bg-(--muted)"
            >
              Swagger Docs
              <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-(--border) bg-(--muted) p-4">
          <div className="mb-3 flex items-center gap-2 font-semibold text-(--card-foreground)">
            <FileJson size={18} />
            Production Environment
          </div>

          <code className="block max-w-full overflow-x-auto whitespace-nowrap rounded-lg border border-(--border) bg-(--card) p-3 text-xs leading-6 text-(--foreground)">
            {ENV_VALUE}
          </code>

          <p className="mt-3 text-sm leading-6 text-(--muted-foreground)">
            Use this environment variable in Vercel so the frontend can connect
            to the deployed FastAPI backend.
          </p>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="mb-3 text-lg font-bold text-(--card-foreground)">
          Available Endpoints
        </h3>

        <div className="grid gap-3 md:hidden">
          {endpoints.map((item) => (
            <div
              key={item.endpoint}
              className="min-w-0 rounded-xl border border-(--border) bg-(--muted) p-4"
            >
              <div className="mb-2 flex items-center justify-between gap-3">
                <span className="rounded-full bg-(--primary) px-3 py-1 text-xs font-bold text-(--primary-foreground)">
                  {item.method}
                </span>
              </div>

              <p className="break-all font-mono text-sm font-semibold text-(--foreground)">
                {item.endpoint}
              </p>

              <p className="mt-2 text-sm leading-6 text-(--muted-foreground)">
                {item.purpose}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden overflow-hidden rounded-xl border border-(--border) md:block">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-(--muted) text-(--card-foreground)">
                <tr>
                  <th className="border-b border-(--border) px-4 py-3">
                    Method
                  </th>
                  <th className="border-b border-(--border) px-4 py-3">
                    Endpoint
                  </th>
                  <th className="border-b border-(--border) px-4 py-3">
                    Purpose
                  </th>
                </tr>
              </thead>

              <tbody>
                {endpoints.map((item) => (
                  <tr key={item.endpoint} className="bg-(--card)">
                    <td className="border-b border-(--border) px-4 py-3 font-semibold">
                      {item.method}
                    </td>
                    <td className="border-b border-(--border) px-4 py-3 font-mono text-xs">
                      {item.endpoint}
                    </td>
                    <td className="border-b border-(--border) px-4 py-3 text-(--muted-foreground)">
                      {item.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}