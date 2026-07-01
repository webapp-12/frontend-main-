export default function ProductCard({ title, img, link }) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-5 flex h-40 items-center justify-center rounded-2xl bg-gray-100 text-7xl">
        <span aria-hidden="true">{img}</span>
      </div>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <a
        href="#products"
        className="mt-4 inline-flex text-sm font-semibold text-cyan-700 transition hover:text-cyan-900"
      >
        {link}
      </a>
    </article>
  );
}
