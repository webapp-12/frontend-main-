import Image from "next/image";

export default function StoreProductCard({ product }) {
  return (
    <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative h-52 bg-slate-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
        />
      </div>

      <div className="p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
          {product.badge}
        </p>
        <h3 className="mt-2 line-clamp-2 text-lg font-bold text-slate-900">
          {product.title}
        </h3>
        <p className="mt-2 text-sm text-slate-500">{product.location}</p>
        <p className="mt-4 text-xl font-bold text-slate-900">{product.price}</p>
        <p className="mt-1 text-sm text-slate-500">{product.moq}</p>

        <button
          type="button"
          className="mt-5 inline-flex rounded-full bg-[#232f3e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#131921]"
        >
          View Details
        </button>
      </div>
    </article>
  );
}
