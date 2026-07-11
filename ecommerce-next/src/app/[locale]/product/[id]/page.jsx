import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import ProductView from "@/components/ui/Productview/ProductView";

export default async function Page({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#eff0f5]">
      <div className="fixed left-0 right-0 top-0 z-50">
        <Header locale={locale} />
        <SecondNav locale={locale} />
      </div>

      <div className="pt-[132px]">
        <ProductView />
      </div>
    </main>
  );
}