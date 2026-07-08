import Image from "next/image";
import Link from "next/link";

import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import { product, relatedProducts } from "@/data/productDetails";

const productFeatures = [
  "Samsung charger adapter with fast charging support",
  "Compatible with Samsung mobile phones",
  "5V / 3.0A power output for quick charging",
  "Single USB-C charging port",
  "Compact design for travel, office, and home use",
];

const reviewBreakdown = [
  "5 stars 273",
  "4 stars 12",
  "3 stars 8",
  "2 stars 4",
  "1 star 10",
];

export default function ProductDetailsPage({ locale = "en" }) {
  return (
    <main className="min-h-screen bg-[#eff0f5]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="mb-4 flex flex-wrap items-center gap-2 text-sm text-[#1687a7]">
          <Link href={`/${locale}/Items`} className="font-semibold hover:underline">
            Mobiles & Tablets
          </Link>
          <span>&gt;</span>
          <span>Mobile Accessories</span>
          <span>&gt;</span>
          <span>Wall Chargers</span>
          <span>&gt;</span>
          <span className="text-slate-700">{product.title}</span>
        </div>

        <section className="grid gap-4 bg-white p-4 lg:grid-cols-[430px_1fr_330px]">
          <div>
            <Image
              src={product.image}
              alt={product.title}
              width={430}
              height={430}
              className="h-[430px] w-full object-cover"
            />

            <div className="mt-4 flex gap-3">
              {[1, 2, 3, 4].map((item) => (
                <Image
                  key={item}
                  src={product.image}
                  alt={`${product.title} thumbnail ${item}`}
                  width={64}
                  height={64}
                  className="h-16 w-16 border object-cover"
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 flex flex-wrap items-center gap-3 bg-orange-400 px-4 py-2 text-white">
              <span className="font-semibold">Flash Sale</span>
              <span className="text-black">Ends in 04:37:23</span>
            </div>

            <h1 className="text-3xl font-medium leading-tight text-slate-900">
              {product.title}
            </h1>

            <div className="mt-5 flex flex-wrap items-center gap-3 text-sm">
              <span className="font-semibold text-yellow-500">5.0 stars</span>
              <span className="text-blue-600">
                Ratings {product.ratingsCount}
              </span>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Brand: <span className="text-blue-600">{product.brand}</span>
            </p>

            <hr className="my-6" />

            <h2 className="text-4xl text-orange-500">{product.price}</h2>
            <p className="mt-2 text-lg text-gray-500 line-through">
              {product.oldPrice}
              <span className="ml-2 text-black no-underline">
                {product.discount}
              </span>
            </p>

            <p className="mt-8 text-lg text-slate-700">
              Installment: Up to 3 months, as low as Rs. 313 per month.
            </p>

            <hr className="my-6" />

            <div className="mb-8 flex items-center gap-6">
              <span className="text-gray-500">Quantity</span>
              <button type="button" className="bg-gray-100 px-4 py-2 text-xl">
                -
              </button>
              <span>1</span>
              <button type="button" className="bg-gray-100 px-4 py-2 text-xl">
                +
              </button>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button className="bg-[#2abbe8] py-4 text-xl font-semibold text-white">
                Buy Now
              </button>
              <button className="bg-[#f57224] py-4 text-xl font-semibold text-white">
                Add to Cart
              </button>
            </div>
          </div>

          <aside className="bg-[#fafafa] p-5">
            <h3 className="mb-4 font-bold text-gray-600">Delivery Options</h3>

            <p className="mb-5 text-slate-700">
              {product.location}
              <span className="ml-3 text-blue-600">CHANGE</span>
            </p>

            <div className="border-t py-4">
              <p className="flex justify-between gap-4">
                <span>Standard</span>
                <b>{product.deliveryFee}</b>
              </p>
              <p className="text-sm text-gray-400">Guaranteed by 13-18 Jul</p>
            </div>

            <div className="border-t py-4">
              <p className="flex justify-between gap-4">
                <span>Collection Point</span>
                <b>{product.pickupFee}</b>
              </p>
              <p className="text-sm text-gray-400">Guaranteed by 13-18 Jul</p>
            </div>

            <div className="border-t py-4 text-slate-700">
              Cash on Delivery Available
            </div>

            <h3 className="mb-4 mt-5 font-bold text-gray-600">
              Return & Warranty
            </h3>

            <p className="mb-4 text-slate-700">14 days easy return</p>
            <p className="text-slate-700">6 Months Seller Warranty</p>
          </aside>
        </section>

        <section className="mt-4 bg-white p-8">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            Product details
          </h2>

          <ul className="mb-8 list-disc pl-6 text-lg leading-8 text-slate-700">
            {productFeatures.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>

          <p className="text-lg leading-8 text-slate-700">
            This Samsung charger UK plug adapter is designed for dependable fast
            charging. It is compact, portable, and suitable for home, office,
            and travel use.
          </p>
        </section>

        <section className="mt-4 bg-white p-8">
          <h2 className="mb-6 text-xl font-bold text-slate-900">
            Ratings & Reviews
          </h2>

          <div className="flex flex-col gap-8 md:flex-row md:gap-16">
            <div>
              <h3 className="text-6xl text-slate-900">
                4.7<span className="text-3xl text-gray-400">/5</span>
              </h3>
              <p className="mt-3 text-2xl font-semibold text-yellow-500">
                Excellent
              </p>
              <p className="mt-2 text-gray-500">309 Ratings</p>
            </div>

            <div className="space-y-2 text-slate-700">
              {reviewBreakdown.map((item) => (
                <p key={item}>{item}</p>
              ))}
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <p className="font-semibold text-yellow-500">5 stars</p>
            <p className="text-gray-500">Jude Fernando</p>
            <p className="mt-4 text-slate-700">
              Good product, supports fast charging. Good seller, recommended.
            </p>
          </div>
        </section>

        <section className="mt-4 pb-10">
          <h2 className="mb-5 text-xl font-bold text-slate-900">
            You may also like
          </h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedProducts.map((item) => (
              <article key={item.id} className="bg-white p-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={300}
                  height={224}
                  className="h-56 w-full object-cover"
                />
                <h3 className="mt-3 line-clamp-2 text-slate-900">
                  {item.name}
                </h3>
                <p className="mt-2 text-2xl text-orange-500">{item.price}</p>
                <p className="text-sm font-semibold text-yellow-500">
                  Highly rated
                </p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
