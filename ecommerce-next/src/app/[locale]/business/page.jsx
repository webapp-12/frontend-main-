import Header from "@/components/layout/Header";
import BusinessRegisterForm from "@/components/ui/BusinessRegisterForm";
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
          primaryHref="#business-register-form"
          primaryLabel="Open business form"
          secondaryHref={`/${locale}/business/dashboard`}
          secondaryLabel="Open business dashboard"
        />

        <section
          id="business-register-form"
          className="mt-8 rounded-[32px] bg-white p-6 shadow-sm sm:p-8"
        >
          <div className="rounded-[28px] bg-gradient-to-r from-[#131921] via-[#1f3a5f] to-[#2b6cb0] px-8 py-10 text-white shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Business Accounts
            </p>
            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Register your business
            </h2>
            <p className="mt-3 max-w-3xl text-sm text-white/80 sm:text-base">
              Set up your business profile, add store branding, and get your seller workspace ready in a few steps.
            </p>
          </div>

          <div className="mt-8">
            <BusinessRegisterForm locale={locale} />
          </div>
        </section>
      </div>
    </main>
  );
}
