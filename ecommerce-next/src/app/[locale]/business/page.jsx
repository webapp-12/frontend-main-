import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import FeaturePlaceholder from "@/components/ui/FeaturePlaceholder";

export default async function BusinessPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <FeaturePlaceholder
          title="Your Business"
          description="Start with the business form, create your account successfully, and continue to the dashboard from one place."
          primaryHref={`/${locale}/business/register`}
          primaryLabel="Open business form"
          secondaryHref={`/${locale}/business/dashboard`}
          secondaryLabel="Open business dashboard"
        />
      </div>
    </main>
  );
}
