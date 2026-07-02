"use client";

export default function HelpTopicCard({
  title,
  description,
  actionLabel,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="w-full rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left transition hover:-translate-y-0.5 hover:border-cyan-300 hover:bg-white hover:shadow-md"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-slate-900">{title}</h3>
          <p className="mt-1 text-sm text-slate-600">{description}</p>
        </div>
        <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-800">
          {actionLabel}
        </span>
      </div>
    </button>
  );
}
