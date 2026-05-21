import {
  AlertTriangle,
  CheckCircle2,
  Copy,
  FileJson,
  XCircle,
} from "lucide-react";

type ResultCardProps = {
  result: unknown;
  error?: string;
};

type QRApiResponse = {
  success?: boolean;
  data?: string | null;
  text?: string | null;
  result?: string | null;
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

function getMessage(result: unknown): string {
  if (!result || typeof result !== "object") return "";

  const data = result as QRApiResponse;

  if (typeof data.message === "string" && data.message.trim()) {
    return data.message;
  }

  return "";
}

function isApiSuccess(result: unknown): boolean {
  if (!result || typeof result !== "object") return false;

  const data = result as QRApiResponse;

  return data.success === true;
}

export default function ResultCard({ result, error }: ResultCardProps) {
  const decodedText = getDecodedText(result);
  const method = getMethod(result);
  const message = getMessage(result);
  const apiSuccess = isApiSuccess(result);

  const hasValidDecodedData = apiSuccess && decodedText.length > 0;
  const hasNoDecodedData = result && !hasValidDecodedData;

  const handleCopy = async () => {
    if (!decodedText) return;
    await navigator.clipboard.writeText(decodedText);
  };

  if (error) {
    return (
      <div className="mt-6 min-w-0 rounded-xl border border-(--error-border) bg-(--error-bg) p-5 transition-colors">
        <div className="mb-2 flex items-center gap-2 font-bold text-(--error-text)">
          <XCircle size={18} />
          Decode Error
        </div>

        <p className="break-words text-sm text-(--error-text)">{error}</p>
      </div>
    );
  }

  if (!result) return null;

  if (hasNoDecodedData) {
    return (
      <div className="mt-6 min-w-0 space-y-5">
        <div className="rounded-xl border border-yellow-300 bg-yellow-50 p-4 transition-colors sm:p-5">
          <div className="mb-4 flex items-center gap-2 font-bold text-yellow-700">
            <AlertTriangle size={20} />
            No QR Data Found
          </div>

          <div className="min-w-0 rounded-xl border border-yellow-300 bg-white p-4 shadow-sm">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              Decode Status
            </p>

            <div className="rounded-lg border border-yellow-200 bg-yellow-50 p-4">
              <p className="break-words text-base font-medium leading-7 text-yellow-800">
                {message || "The image was processed, but no readable QR text was found."}
              </p>
            </div>

            <div className="mt-4">
              <p className="text-xs text-slate-500">Detection Method</p>
              <p className="text-sm font-semibold capitalize text-slate-900">
                {method}
              </p>
            </div>
          </div>
        </div>

        <div className="min-w-0 rounded-xl border border-(--border) bg-(--muted) p-4 transition-colors sm:p-5">
          <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-(--card-foreground)">
            <FileJson size={16} />
            API Response Preview
          </div>

          <pre className="max-h-80 max-w-full overflow-auto whitespace-pre-wrap break-words rounded-lg border border-(--border) bg-(--card) p-4 text-xs leading-6 text-(--foreground)">
            {JSON.stringify(result, null, 2)}
          </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-6 min-w-0 space-y-5">
      <div className="rounded-xl border border-(--success-border) bg-(--success-bg) p-4 transition-colors sm:p-5">
        <div className="mb-4 flex items-center gap-2 font-bold text-(--success-text)">
          <CheckCircle2 size={20} />
          Decoded Answer
        </div>

        <div className="min-w-0 rounded-xl border border-(--success-border) bg-(--card) p-4 shadow-sm">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-(--muted-foreground)">
            Main QR Data
          </p>

          <div className="rounded-lg border border-(--border) bg-(--muted) p-4">
            <p className="break-words text-xl font-semibold leading-8 text-(--foreground)">
              {decodedText}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs text-(--muted-foreground)">
                Detection Method
              </p>
              <p className="text-sm font-semibold capitalize text-(--foreground)">
                {method}
              </p>
            </div>

            <button
              onClick={handleCopy}
              className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-lg bg-(--primary) px-4 py-2 text-sm font-semibold text-(--primary-foreground) transition hover:opacity-85"
            >
              <Copy size={15} />
              Copy Result
            </button>
          </div>
        </div>
      </div>

      <div className="min-w-0 rounded-xl border border-(--border) bg-(--muted) p-4 transition-colors sm:p-5">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-(--card-foreground)">
          <FileJson size={16} />
          API Response Preview
        </div>

        <pre className="max-h-80 max-w-full overflow-auto whitespace-pre-wrap break-words rounded-lg border border-(--border) bg-(--card) p-4 text-xs leading-6 text-(--foreground)">
          {JSON.stringify(result, null, 2)}
        </pre>
      </div>
    </div>
  );
}