import Image from "next/image";
import Link from "next/link";

export default function ProductGrid({ products, Products, locale = "en" }) {
  const items = products ?? Products ?? [];

  if (!items.length) {
    return (
      <div className="rounded-3xl bg-white p-10 text-center shadow-sm ring-1 ring-black/5">
        <h2 className="text-xl font-semibold text-gray-900">No products found</h2>
        <p className="mt-2 text-sm text-gray-600">
          Add products to the data source to populate this collection.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((product) => {
        const imageSource =
          typeof product.image === "string"
            ? product.image.startsWith("/")
              ? product.image
              : null
            : product.image;

        return (
          <Link
            key={product.id}
            href={`/${locale}/product/${product.id}`}
            className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative h-[260px] bg-slate-100">
              <span className="absolute left-4 top-4 z-10 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white shadow">
                {product.badge}
              </span>

              {imageSource ? (
                <Image
                  src={imageSource}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center">
                  <span className="text-6xl font-black text-slate-700">
                    {product.image}
                  </span>
                </div>
              )}
            </div>

            <div className="p-5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-orange-500">
                {product.category}
              </p>

              <h2 className="mt-2 line-clamp-2 text-[22px] font-bold leading-tight tracking-[-0.02em] text-slate-900 transition-colors group-hover:text-orange-500">
              {product.name}
              </h2>

              <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
                {product.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
             <span className="text-3xl font-semibold tracking-tight text-zinc-900">
              ${product.price}
             </span>

                <span className="rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white transition group-hover:bg-slate-950">
                  View
                </span>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}