import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import MyAdsDashboard from "./myAdsDashboard";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Amazon Family | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Manage household members and sharing settings for the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function MyAdsDashboardPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <section className="mx-auto max-w-7xl px-6 py-8">
        <MyAdsDashboard locale={locale} />
      </section>
    </main>
  );
}
