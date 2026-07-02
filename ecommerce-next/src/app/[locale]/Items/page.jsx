import ProductGrid from "@/components/ui/ProductGrid";
import FilterSidebar from "@/components/ui/FilterSidebar";
import SortDropdown from "@/components/ui/SortDropdown";
import { gamingProducts } from "@/data/gamingProducts";

export default function GamingPage() {
  return (
    <main className="max-w-7xl mx-auto py-8 px-6">

      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Shop All
        </h1>

        <SortDropdown />
      </div>

      <div className="grid grid-cols-12 gap-8">

        <div className="col-span-3">
          <FilterSidebar />
        </div>

        <div className="col-span-9">
          <ProductGrid products={gamingProducts} />
        </div>

      </div>

    </main>
  );
}