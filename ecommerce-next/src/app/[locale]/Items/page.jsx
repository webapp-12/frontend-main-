import Header from "@/components/layout/Header";
import FilterSidebar from "@/components/ui/FilterSidebar";
import ProductGrid from "@/components/ui/ProductGrid";
import SecondNav from "@/components/ui/SecondNav";
import SortDropdown from "@/components/ui/SortDropdown";
import { gamingProducts } from "@/data/gamingProducts";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Items | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Browse gaming items in the ${locale.toUpperCase()} storefront.`,
  };
}

function getPageTitle(category) {
  if (category === "gaming") return "Gaming";
  if (category === "fashion") return "Fashion";
  return "Shop All";
}

export default async function GamingPage({ params, searchParams }) {
  const { locale } = await params;
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category;

  return (
    <main className="min-h-screen bg-white">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <section className="mx-auto max-w-7xl bg-white px-6 py-8">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="text-3xl font-bold">{getPageTitle(category)}</h1>
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
      </section>
    </main>
  );
}
