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
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((product) => (
        <Link
          key={product.id}
          href={`/${locale}/product/${product.id}`}
          className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
        >
          <div className="flex h-52 items-center justify-center bg-slate-100 p-6 text-7xl">
            <span aria-hidden="true">{product.image}</span>
          </div>
          <div className="p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
              {product.category}
            </p>
            <h2 className="mt-2 text-lg font-bold text-gray-900">{product.name}</h2>
            <p className="mt-2 text-sm text-gray-600">{product.description}</p>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-2xl font-bold text-gray-900">${product.price}</span>
              <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                {product.badge}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
