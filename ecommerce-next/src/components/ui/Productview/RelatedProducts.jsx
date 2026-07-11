import Image from "next/image";

export default function RelatedProducts({ products }) {
  return (
    <section className="mt-6 pb-10">
      <h2 className="mb-5 text-2xl font-extrabold text-slate-950">
        You may also like
      </h2>

      <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
        {products.map((item) => (
          <div
            key={item.id}
            className="rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <Image
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-contain"
            />

            <h3 className="mt-3 line-clamp-2 font-bold text-slate-900">
              {item.name}
            </h3>

            <p className="mt-2 text-xl font-black text-orange-500">{item.price}</p>

            <p className="text-sm text-yellow-400">★★★★★</p>
          </div>
        ))}
      </div>
    </section>
  );
}
