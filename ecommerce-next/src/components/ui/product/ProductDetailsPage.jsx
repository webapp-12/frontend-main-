import Image from "next/image";
import { product, relatedProducts } from "@/data/productDetails";

export default function ProductDetailsPage() {
  return (
    <main className="bg-slate-100 px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm text-slate-500">
          Home › Electronics › Accessories ›{" "}
          <span className="text-orange-500">{product.title}</span>
        </p>

        <section className="grid gap-6 rounded-3xl bg-white p-5 shadow-sm lg:grid-cols-[430px_1fr_320px]">
          {/* Product Images */}
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

          {/* Product Info */}
          <div>
            <div className="mb-4 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
              Flash Sale · Ends in 04:37:23
            </div>

            <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-950">
              {product.title}
            </h1>

            <div className="mt-4 flex items-center gap-3 text-sm">
              <span className="text-yellow-400">★★★★★</span>
              <span className="font-semibold text-blue-600">
                {product.ratingsCount} Ratings
              </span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-500">Brand: {product.brand}</span>
            </div>

            <div className="mt-6 rounded-2xl bg-orange-50 p-5">
              <h2 className="text-4xl font-black tracking-tight text-orange-500">
                {product.price}
              </h2>

              <p className="mt-2 text-base text-slate-400 line-through">
                {product.oldPrice}
                <span className="ml-3 rounded-full bg-orange-500 px-3 py-1 text-xs font-bold text-white no-underline">
                  {product.discount}
                </span>
              </p>
            </div>

            <p className="mt-6 text-base text-slate-600">
              Installment available: up to 3 months, as low as Rs. 313 per month.
            </p>

            <div className="mt-6 flex items-center gap-5">
              <span className="font-semibold text-slate-500">Quantity</span>
              <button className="h-10 w-10 rounded-full bg-slate-100 text-xl">−</button>
              <span className="font-bold">1</span>
              <button className="h-10 w-10 rounded-full bg-slate-100 text-xl">+</button>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <button className="rounded-xl bg-blue-500 py-4 text-lg font-bold text-white transition hover:bg-blue-600">
                Buy Now
              </button>

              <button className="rounded-xl bg-orange-500 py-4 text-lg font-bold text-white transition hover:bg-orange-600">
                Add to Cart
              </button>
            </div>
          </div>

          {/* Delivery */}
          <aside className="rounded-2xl bg-slate-50 p-5">
            <h3 className="mb-4 font-bold text-slate-700">Delivery Options</h3>

            <p className="mb-5 text-sm text-slate-600">
              📍 {product.location}
              <span className="ml-3 cursor-pointer font-bold text-blue-600">
                CHANGE
              </span>
            </p>

            <div className="border-t py-4">
              <p className="flex justify-between font-semibold">
                <span>Standard Delivery</span>
                <b>{product.deliveryFee}</b>
              </p>
              <p className="mt-1 text-sm text-slate-400">Guaranteed by 13-18 Jul</p>
            </div>

            <div className="border-t py-4">
              <p className="flex justify-between font-semibold">
                <span>Collection Point</span>
                <b>{product.pickupFee}</b>
              </p>
              <p className="mt-1 text-sm text-slate-400">Guaranteed by 13-18 Jul</p>
            </div>

            <div className="border-t py-4 font-semibold">
              💵 Cash on Delivery Available
            </div>

            <h3 className="mb-4 mt-5 font-bold text-slate-700">
              Return & Warranty
            </h3>

            <p className="mb-3 text-sm">↩️ 14 days easy return</p>
            <p className="text-sm">🛡️ 6 Months Seller Warranty</p>
          </aside>
        </section>

        {/* Product Details */}
        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="mb-5 text-2xl font-extrabold text-slate-950">
            Product Details
          </h2>

          <ul className="list-disc space-y-2 pl-6 text-slate-600">
            <li>Fast charging wall adapter</li>
            <li>Compatible with Samsung mobile phones</li>
            <li>5V / 3.0A power output</li>
            <li>USB-C charging port</li>
            <li>Compact design for home, office, and travel</li>
          </ul>
        </section>

        {/* Related Products */}
        <section className="mt-6 pb-10">
          <h2 className="mb-5 text-2xl font-extrabold text-slate-950">
            You may also like
          </h2>

          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {relatedProducts.map((item) => (
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

                <p className="mt-2 text-xl font-black text-orange-500">
                  {item.price}
                </p>

                <p className="text-sm text-yellow-400">★★★★★</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}