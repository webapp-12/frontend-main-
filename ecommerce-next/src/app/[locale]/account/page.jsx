import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import { accountItems } from "@/data/accountItems";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Your Account | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Manage account tools and settings for the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function AccountPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <Header />
      <SecondNav locale={locale} />

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[32px] bg-gradient-to-r from-[#131921] via-[#1f3a5f] to-[#2b6cb0] px-8 py-10 text-white shadow-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-200">
            Account Center
          </p>
          <h1 className="mt-3 text-4xl font-bold">Your Account</h1>
          <p className="mt-3 max-w-2xl text-sm text-white/80 sm:text-base">
            Review orders, update security details, manage addresses, and keep
            your storefront preferences in one place.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {accountItems.map((item) => (
            <article
              key={item.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-2xl">
                <span aria-hidden="true">{item.icon}</span>
              </div>

              <h2 className="mt-5 text-xl font-bold text-slate-900">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>

              <button
                type="button"
                className="mt-5 inline-flex rounded-full bg-[#232f3e] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#131921]"
              >
                Open
              </button>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
