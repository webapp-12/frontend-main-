import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import MyAdsDashboard from "@/components/ui/myAdsDashboard";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `My Ads | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Manage advertisements for the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function MyAdsDashboardPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <div className="fixed inset-x-0 top-0 z-50">
        <Header locale={locale} />
      </div>

      <div className="pt-[88px]">
        <SecondNav locale={locale} />

        <div className="mx-auto max-w-7xl px-6 py-8">
          <MyAdsDashboard locale={locale} />
        </div>
      </div>
    </main>
  );
}