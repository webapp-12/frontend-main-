export default function ProductSpecification() {
  return (
    <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
      <h2 className="mb-5 text-2xl font-extrabold text-slate-950">
        Specifications
      </h2>

      <div className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">Connector Type</p>
          <p className="mt-1">USB-C</p>
        </div>
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">Power Output</p>
          <p className="mt-1">45W</p>
        </div>
      </div>
    </section>
  );
}
