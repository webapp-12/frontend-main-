import Header from "@/components/layout/Header";
import BusinessRegisterForm from "@/components/ui/BusinessRegisterForm";
import SecondNav from "@/components/ui/SecondNav";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Business Registration | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Create a business account for the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function BusinessRegisterPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="rounded-[32px] bg-gradient-to-r from-[#131921] via-[#1f3a5f] to-[#2b6cb0] px-8 py-10 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Business Accounts
          </p>
          <h1 className="mt-3 text-4xl font-bold">Register your business</h1>
          <p className="mt-3 max-w-3xl text-sm text-white/80 sm:text-base">
            Set up your business profile, add store branding, and get your seller workspace ready in a few steps.
          </p>
        </div>

        <div className="mt-8">
          <BusinessRegisterForm locale={locale} />
        </div>
      </section>
    </main>
  );
}
