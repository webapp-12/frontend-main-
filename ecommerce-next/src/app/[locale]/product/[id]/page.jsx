import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import ProductDetailsPage from "@/components/ui/product/ProductDetailsPage";

export default async function Page({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#eff0f5]">
      <Header locale={locale} />
      <SecondNav locale={locale} />
      <ProductDetailsPage />
    </main>
  );
}
