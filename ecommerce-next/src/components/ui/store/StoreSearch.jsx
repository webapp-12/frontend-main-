export default function StoreSearch() {
  return (
    <section className="mt-6 rounded-3xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:p-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
        <div className="flex-1">
          <label className="block text-sm font-semibold text-slate-700">
            Search products
          </label>
          <input
            type="text"
            placeholder="Search by product, supplier, or keyword"
            className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#f59e0b] focus:ring-4 focus:ring-amber-100"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:w-[360px]">
          <label className="block text-sm font-semibold text-slate-700">
            Category
            <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#f59e0b] focus:ring-4 focus:ring-amber-100">
              <option>All categories</option>
              <option>Aquarium</option>
              <option>Lighting</option>
              <option>Filtration</option>
            </select>
          </label>

          <label className="block text-sm font-semibold text-slate-700">
            Sort by
            <select className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#f59e0b] focus:ring-4 focus:ring-amber-100">
              <option>Featured</option>
              <option>Lowest price</option>
              <option>Highest price</option>
            </select>
          </label>
        </div>
      </div>
    </section>
  );
}
