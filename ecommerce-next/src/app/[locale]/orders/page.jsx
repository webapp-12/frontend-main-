import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import FeaturePlaceholder from "@/components/ui/FeaturePlaceholder";

export default async function OrdersPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <FeaturePlaceholder
          title="Your Orders"
          description="Track orders, review deliveries, and jump back into shopping from this order center."
          primaryHref={`/${locale}/account/orders`}
          primaryLabel="Open account orders"
          secondaryHref={`/${locale}/Items`}
          secondaryLabel="Continue shopping"
        />
      </div>
    </main>
  );
}
