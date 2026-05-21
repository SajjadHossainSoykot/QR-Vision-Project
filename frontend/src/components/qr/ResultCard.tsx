import { CheckCircle2, Copy, XCircle } from "lucide-react";

type ResultCardProps = {
  result: unknown;
  error?: string;
};

type QRApiResponse = {
  success?: boolean;
  data?: string;
  text?: string;
  result?: string;
  message?: string;
  method?: string;
  bbox?: unknown;
};

function getDecodedText(result: unknown): string {
  if (!result || typeof result !== "object") return "";

  const data = result as QRApiResponse;

  if (typeof data.data === "string" && data.data.trim()) return data.data;
  if (typeof data.text === "string" && data.text.trim()) return data.text;
  if (typeof data.result === "string" && data.result.trim()) return data.result;

  return "";
}

function getMethod(result: unknown): string {
  if (!result || typeof result !== "object") return "Unknown";

  const data = result as QRApiResponse;

  if (typeof data.method === "string" && data.method.trim()) {
    return data.method;
  }

  return "QR Decoder";
}

export default function ResultCard({ result, error }: ResultCardProps) {
  const decodedText = getDecodedText(result);
  const method = getMethod(result);

  const handleCopy = async () => {
    if (!decodedText) return;
    await navigator.clipboard.writeText(decodedText);
  };

  if (error) {
    return (
      <div className="mt-6 min-w-0 rounded-xl border border-(--error-border) bg-(--error-bg) p-5 transition-colors">
        <div className="mb-2 flex items-center gap-2 font-bold text-(--error-text)">
          <XCircle size={18} />
          Error
        </div>

        <p className="break-words text-sm text-(--error-text)">{error}</p>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="mt-6 min-w-0 rounded-xl border border-(--success-border) bg-(--success-bg) p-4 transition-colors sm:p-5">
      <div className="mb-4 flex items-center gap-2 font-bold text-(--success-text)">
        <CheckCircle2 size={20} />
        Decoded Answer
      </div>

      <div className="min-w-0 rounded-xl border border-(--success-border) bg-(--card) p-4 shadow-sm">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-(--muted-foreground)">
          Main QR Data
        </p>

        {decodedText ? (
          <div className="rounded-lg border border-(--border) bg-(--muted) p-4">
            <p className="break-words text-xl font-semibold leading-8 text-(--foreground)">
              {decodedText}
            </p>
          </div>
        ) : (
          <div className="rounded-lg border border-(--border) bg-(--muted) p-4">
            <p className="text-sm text-(--muted-foreground)">
              No readable QR text was found in the API response.
            </p>
          </div>
        )}

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs text-(--muted-foreground)">Detection Method</p>
            <p className="text-sm font-semibold capitalize text-(--foreground)">
              {method}
            </p>
          </div>

          {decodedText && (
            <button
              onClick={handleCopy}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-(--primary) px-4 py-2 text-sm font-semibold text-(--primary-foreground) transition hover:opacity-85"
            >
              <Copy size={15} />
              Copy Result
            </button>
          )}
        </div>
      </div>
    </div>
  );
}