export default function DeliveryCard({ product }) {
  return (
    <aside className="rounded-2xl bg-slate-50 p-5">
      <h3 className="mb-4 font-bold text-slate-700">Delivery Options</h3>

      <p className="mb-5 text-sm text-slate-600">
        {product.location}
        <span className="ml-3 cursor-pointer font-bold text-blue-600">CHANGE</span>
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

      <div className="border-t py-4 font-semibold">Cash on Delivery Available</div>

      <h3 className="mb-4 mt-5 font-bold text-slate-700">Return & Warranty</h3>

      <p className="mb-3 text-sm">14 days easy return</p>
      <p className="text-sm">6 Months Seller Warranty</p>
    </aside>
  );
}
