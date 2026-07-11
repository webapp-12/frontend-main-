import Link from "next/link";

export default function FeaturePlaceholder({
  title,
  description,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}) {
  const safePrimaryHref =
    typeof primaryHref === "string" ? primaryHref : null;
  const safeSecondaryHref =
    typeof secondaryHref === "string" ? secondaryHref : null;

  return (
    <section className="rounded-3xl bg-white p-8 shadow-sm">
      <h1 className="text-3xl font-bold text-slate-950">{title}</h1>
      <p className="mt-3 max-w-2xl text-lg text-slate-600">{description}</p>

      <div className="mt-8 flex flex-wrap gap-4">
        {safePrimaryHref && primaryLabel ? (
          <Link
            href={safePrimaryHref}
            className="rounded-full bg-[#131921] px-6 py-3 font-semibold text-white transition hover:bg-[#232f3e]"
          >
            {primaryLabel}
          </Link>
        ) : null}

        {safeSecondaryHref && secondaryLabel ? (
          <Link
            href={safeSecondaryHref}
            className="rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-900 transition hover:border-slate-900"
          >
            {secondaryLabel}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
