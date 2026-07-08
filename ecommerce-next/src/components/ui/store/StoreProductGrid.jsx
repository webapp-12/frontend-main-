import StoreProductCard from "@/components/ui/store/StoreProductCard";

export default function StoreProductGrid({ products = [] }) {
  return (
    <section className="mt-6 pb-8">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-slate-900">Featured Products</h2>
        <p className="text-sm text-slate-500">{products.length} items</p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <StoreProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
