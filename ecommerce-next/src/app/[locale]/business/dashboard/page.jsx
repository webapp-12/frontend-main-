import Link from "next/link";

import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";

export default async function BusinessDashboardPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <h1 className="mb-6 text-3xl font-bold text-slate-950">
          Business Dashboard
        </h1>

        <div className="grid gap-5 md:grid-cols-3">
          <Card
            title="Products"
            text="Add and manage your products."
            href={`/${locale}/Items`}
          />
          <Card
            title="Orders"
            text="Review current orders and customer activity."
            href={`/${locale}/orders`}
          />
          <Card
            title="Ad Payments"
            text="Open your ads workspace and complete pending payments."
            href={`/${locale}/post/myAdsDashboard`}
          />
        </div>
      </div>
    </main>
  );
}

function Card({ title, text, href }) {
  return (
    <Link
      href={href}
      className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <h2 className="mb-2 text-xl font-bold">{title}</h2>
      <p className="text-slate-600">{text}</p>
    </Link>
  );
}
