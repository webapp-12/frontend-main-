export default function ProductReviews() {
  return (
    <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-extrabold text-slate-950">
          Ratings & Reviews
        </h2>

        <button className="rounded-full bg-orange-500 px-5 py-2 text-sm font-bold text-white hover:bg-orange-600">
          Write Review
        </button>
      </div>

      <div className="grid gap-8 md:grid-cols-[260px_1fr]">
        <div className="rounded-2xl bg-slate-50 p-6 text-center">
          <h3 className="text-5xl font-black text-slate-950">
            4.7<span className="text-2xl text-slate-400">/5</span>
          </h3>
          <p className="mt-3 text-2xl text-yellow-400">★★★★★</p>
          <p className="mt-2 text-sm font-semibold text-slate-500">
            309 Ratings
          </p>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center justify-between">
              <p className="font-bold text-slate-900">Jude Fernando</p>
              <p className="text-sm text-slate-400">2 days ago</p>
            </div>

            <p className="mt-1 text-yellow-400">★★★★★</p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Good product, supports fast charging. Packaging was safe and
              delivery was quick. Recommended seller.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-5">
            <div className="flex items-center justify-between">
              <p className="font-bold text-slate-900">Nimal Perera</p>
              <p className="text-sm text-slate-400">1 week ago</p>
            </div>

            <p className="mt-1 text-yellow-400">★★★★☆</p>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              Works well for daily use. Product quality is good for the price.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}