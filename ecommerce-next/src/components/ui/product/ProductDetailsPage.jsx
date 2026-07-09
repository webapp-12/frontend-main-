import Image from "next/image";
import { product, relatedProducts } from "@/data/productDetails";

export default function ProductDetailsPage() {
  return (
    <div className="px-6 py-4">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm text-[#1687a7]">
          Mobiles & Tablets › Mobile Accessories › Wall Chargers › {product.title}
        </p>

        <section className="grid gap-4 bg-white p-4 lg:grid-cols-[430px_1fr_330px]">
          <div>
            <Image
              src={product.image}
              alt={product.title}
              className="h-[430px] w-full object-cover"
            />

            <div className="mt-4 flex gap-3">
              {[1, 2, 3, 4].map((item) => (
                <Image
                  key={item}
                  src={product.image}
                  alt="thumb"
                  className="h-16 w-16 border object-cover"
                />
              ))}
            </div>
          </div>

          <div>
            <div className="mb-4 bg-orange-400 px-4 py-2 text-white">
              Flash Sale <span className="ml-6 text-black">Ends in 04:37:23</span>
            </div>

            <h1 className="text-3xl font-medium leading-tight">
              {product.title}
            </h1>

            <div className="mt-5 flex items-center gap-3 text-sm">
              <span className="text-yellow-400">★★★★★</span>
              <span className="text-blue-600">Ratings {product.ratingsCount}</span>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              Brand: <span className="text-blue-600">{product.brand}</span>
            </p>

            <hr className="my-6" />

            <h2 className="text-4xl text-orange-500">{product.price}</h2>
            <p className="mt-2 text-lg text-gray-500 line-through">
              {product.oldPrice}
              <span className="ml-2 text-black no-underline">{product.discount}</span>
            </p>

            <p className="mt-8 text-lg">
              Installment: Up to 3 months, as low as Rs. 313 per month.
            </p>

            <hr className="my-6" />

            <div className="mb-8 flex items-center gap-6">
              <span className="text-gray-500">Quantity</span>
              <button className="bg-gray-100 px-4 py-2 text-xl">−</button>
              <span>1</span>
              <button className="bg-gray-100 px-4 py-2 text-xl">+</button>
            </div>

            <div className="grid grid-cols-2 gap-4">
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

            <p className="mb-5">
              📍 {product.location}
              <span className="ml-3 text-blue-600">CHANGE</span>
            </p>

            <div className="border-t py-4">
              <p className="flex justify-between">
                <span>Standard</span>
                <b>{product.deliveryFee}</b>
              </p>
              <p className="text-sm text-gray-400">Guaranteed by 13-18 Jul</p>
            </div>

            <div className="border-t py-4">
              <p className="flex justify-between">
                <span>Standard Collection Point</span>
                <b>{product.pickupFee}</b>
              </p>
              <p className="text-sm text-gray-400">Guaranteed by 13-18 Jul</p>
            </div>

            <div className="border-t py-4">💵 Cash on Delivery Available</div>

            <h3 className="mt-5 mb-4 font-bold text-gray-600">
              Return & Warranty
            </h3>

            <p className="mb-4">↩️ 14 days easy return</p>
            <p>🛡️ 6 Months Seller Warranty</p>
          </aside>
        </section>

        <section className="mt-4 bg-white p-8">
          <h2 className="mb-6 text-xl font-bold">Product details of</h2>

          <ul className="mb-8 list-disc pl-6 text-lg leading-8">
            <li>Samsung Charger Adapter with Fast Charging</li>
            <li>Compatible with Samsung Mobile Phones</li>
            <li>5V / 3.0A Power Output for quick charging</li>
            <li>1 Port for easy charging</li>
            <li>USB-C Port</li>
          </ul>

          <p className="text-lg leading-8">
            This Samsung Charger UK Plug Adapter is perfect for fast charging
            your mobile phone. It is compact, portable, and suitable for home,
            office, and travel use.
          </p>
        </section>

        <section className="mt-4 bg-white p-8">
          <h2 className="mb-6 text-xl font-bold">Ratings & Reviews</h2>

          <div className="flex gap-16">
            <div>
              <h3 className="text-6xl">4.7<span className="text-3xl text-gray-400">/5</span></h3>
              <p className="mt-3 text-4xl text-yellow-400">★★★★★</p>
              <p className="mt-2 text-gray-500">309 Ratings</p>
            </div>

            <div className="space-y-2 text-yellow-400">
              <p>★★★★★ 273</p>
              <p>★★★★☆ 12</p>
              <p>★★★☆☆ 8</p>
              <p>★★☆☆☆ 4</p>
              <p>★☆☆☆☆ 10</p>
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <p className="text-yellow-400">★★★★★</p>
            <p className="text-gray-500">Jude Fernando</p>
            <p className="mt-4">
              Good product, supports fast charging. Good seller, recommended.
            </p>
          </div>
        </section>

        <section className="mt-4 pb-10">
          <h2 className="mb-5 text-xl font-bold">You may also like</h2>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {relatedProducts.map((item) => (
              <div key={item.id} className="bg-white p-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="h-56 w-full object-cover"
                />
                <h3 className="mt-3 line-clamp-2">{item.name}</h3>
                <p className="mt-2 text-2xl text-orange-500">{item.price}</p>
                <p className="text-yellow-400">★★★★★</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
