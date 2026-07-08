import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Business Account Success | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Business account creation success screen for the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function BusinessSuccessPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <section className="mx-auto flex max-w-4xl px-6 py-12">
        <div className="w-full rounded-[32px] bg-white p-8 text-center shadow-sm ring-1 ring-black/5 sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-3xl">
            <span aria-hidden="true">✓</span>
          </div>
          <h1 className="mt-6 text-3xl font-bold text-slate-900">
            Business account created successfully.
          </h1>
          <p className="mt-3 text-sm text-slate-600 sm:text-base">
            Your seller workspace is ready. Head to the dashboard to start organizing your store.
          </p>
          <Link
            href={`/${locale}/business/dashboard`}
            className="mt-8 inline-flex rounded-full bg-[#232f3e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#131921]"
          >
            Go to Dashboard
          </Link>
        </div>
      </section>
    </main>
  );
}
