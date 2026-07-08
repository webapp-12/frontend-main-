import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import {
  BarChart3,
  CreditCard,
  MessageSquareText,
  Package,
  Settings,
  ShoppingCart,
  Users,
} from "lucide-react";

const dashboardCards = [
  {
    title: "Products",
    description: "Add and manage listings, stock levels, and merchandising.",
    icon: Package,
  },
  {
    title: "Orders",
    description: "Track fulfillment, returns, and order activity in one place.",
    icon: ShoppingCart,
  },
  {
    title: "Customers",
    description: "Review customer segments, messages, and support history.",
    icon: Users,
  },
  {
    title: "Analytics",
    description: "Monitor traffic, conversions, and top-performing products.",
    icon: BarChart3,
  },
  {
    title: "Reviews",
    description: "Keep up with feedback, ratings, and buyer sentiment.",
    icon: MessageSquareText,
  },
  {
    title: "Payments",
    description: "View payouts, payment methods, and transaction summaries.",
    icon: CreditCard,
  },
  {
    title: "Store Settings",
    description: "Update storefront identity, policies, and operational details.",
    icon: Settings,
  },
];

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Business Dashboard | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Manage your business dashboard for the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function BusinessDashboardPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f3f4f6]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <section className="mx-auto max-w-7xl px-6 py-8">
        <div className="rounded-[32px] bg-white p-8 shadow-sm ring-1 ring-black/5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#f59e0b]">
            Seller Workspace
          </p>
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Business Dashboard
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-slate-600 sm:text-base">
            Stay on top of your storefront operations with quick access to products, customers, orders, and revenue tools.
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {dashboardCards.map((card) => {
            const Icon = card.icon;

            return (
              <article
                key={card.title}
                className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-50 text-[#232f3e]">
                  <Icon className="h-6 w-6" />
                </div>
                <h2 className="mt-5 text-xl font-bold text-slate-900">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {card.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
