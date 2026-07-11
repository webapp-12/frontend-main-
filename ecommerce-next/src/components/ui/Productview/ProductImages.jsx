import Image from "next/image";

export default function ProductImages({ product }) {
  return (
    <div>
      <div className="relative overflow-hidden rounded-2xl bg-slate-50">
        <Image
          src={product.image}
          alt={product.title}
          className="h-[430px] w-full object-contain p-6"
          priority
        />
      </div>

      <div className="mt-4 flex gap-3">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white p-1"
          >
            <Image
              src={product.image}
              alt="Product thumbnail"
              className="h-16 w-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
