import { CheckCircle2, XCircle } from "lucide-react";

type ResultCardProps = {
  result: unknown;
  error?: string;
};

export default function ResultCard({ result, error }: ResultCardProps) {
  if (error) {
    return (
      <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5">
        <div className="mb-2 flex items-center gap-2 font-bold text-red-700">
          <XCircle size={18} />
          Error
        </div>
        <p className="text-sm text-red-700">{error}</p>
      </div>
    );
  }

  if (!result) return null;

  return (
    <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-5">
      <div className="mb-2 flex items-center gap-2 font-bold text-green-800">
        <CheckCircle2 size={18} />
        Decoded Result
      </div>

      <pre className="overflow-x-auto rounded-lg bg-white p-4 text-sm text-slate-800 shadow-sm">
        {JSON.stringify(result, null, 2)}
      </pre>
    </div>
  );
}