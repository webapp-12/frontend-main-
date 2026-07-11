export default function ProductInfo({ product }) {
  return (
    <div>
      <div className="mb-4 inline-flex rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-600">
        Flash Sale - Ends in 04:37:23
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
        <button type="button" className="h-10 w-10 rounded-full bg-slate-100 text-xl">
          -
        </button>
        <span className="font-bold">1</span>
        <button type="button" className="h-10 w-10 rounded-full bg-slate-100 text-xl">
          +
        </button>
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
  );
}
