import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import StoreHeader from "@/components/ui/store/StoreHeader";
import StoreProductGrid from "@/components/ui/store/StoreProductGrid";
import StoreSearch from "@/components/ui/store/StoreSearch";
import StoreTabs from "@/components/ui/store/StoreTabs";
import { storeProducts } from "@/data/storeProducts";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Store | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Browse featured wholesale products in the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function StorePage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f5f5f5]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <StoreHeader />

      <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
        <StoreTabs />
        <StoreSearch />
        <StoreProductGrid products={storeProducts} />
      </div>
    </main>
  );
}
