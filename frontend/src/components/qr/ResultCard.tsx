import { CheckCircle2, XCircle } from "lucide-react";

type ResultCardProps = {
  result: unknown;
  error?: string;
};

export default function ResultCard({ result, error }: ResultCardProps) {
  if (error) {
    return (
      <div className="mt-6 rounded-xl border border-(--error-border) bg-(--error-bg) p-5 transition-colors">
        <div className="mb-2 flex items-center gap-2 font-bold text-(--error-text)">
          <XCircle size={18} />
          Error
        </div>

        <p className="text-sm text-(--error-text)">{error}</p>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="mt-6 rounded-xl border border-(--success-border) bg-(--success-bg) p-5 transition-colors">
      <div className="mb-2 flex items-center gap-2 font-bold text-(--success-text)">
        <CheckCircle2 size={18} />
        Decoded Result
      </div>

      <pre className="overflow-x-auto rounded-lg border border-(--border) bg-(--card) p-4 text-sm text-(--card-foreground) shadow-sm">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}