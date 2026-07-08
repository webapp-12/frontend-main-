export default function StoreHeader() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 sm:px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
            Supplier Marketplace
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl">
            Global Store
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Source products, compare pricing, and explore trending categories from trusted sellers.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          <div className="rounded-2xl bg-slate-100 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Suppliers
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900">1.2K+</p>
          </div>
          <div className="rounded-2xl bg-slate-100 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Products
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900">24K+</p>
          </div>
          <div className="rounded-2xl bg-slate-100 px-4 py-3 col-span-2 sm:col-span-1">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
              Deals
            </p>
            <p className="mt-2 text-xl font-bold text-slate-900">Daily</p>
          </div>
        </div>
      </div>
    </section>
  );
}
