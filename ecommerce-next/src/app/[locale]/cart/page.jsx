import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import FeaturePlaceholder from "@/components/ui/FeaturePlaceholder";

export default async function CartPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <FeaturePlaceholder
          title="Shopping Cart"
          description="Your cart is ready for checkout. Use this page as the main cart destination from the shared header."
          primaryHref={`/${locale}/Items`}
          primaryLabel="Browse products"
          secondaryHref={`/${locale}/account`}
          secondaryLabel="Go to account"
        />
      </div>
    </main>
  );
}
