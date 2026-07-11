import Image from "next/image";
import Link from "next/link";

import productImg from "@/assets/Products/product1.jpg";

const menuItems = [
  {
    title: "My ads",
    slug: "/post/myAdsDashboard",
    active: true,
  },
  {
    title: "My membership",
    slug: "/business",
  },
  {
    title: "Saved searches",
    slug: "/account/saved-searches",
  },
  {
    title: "Favorites",
    slug: "/account/favorites",
  },
  {
    title: "Settings",
    slug: "/account/settings",
  },
  {
    title: "Phone Numbers",
    slug: "/account/phone-numbers",
  },
];

const jobLinks = [
  {
    title: "My Profile",
    slug: "/account/profile",
  },
  {
    title: "Profile Database",
    slug: "/account/profile-database",
  },
];

function normalizeLocale(locale) {
  return typeof locale === "string" ? locale : "en";
}

function normalizeSlug(slug, fallback = "/account") {
  return typeof slug === "string" ? slug : fallback;
}

export default function MyAdsDashboard({ locale = "en" }) {
  const safeLocale = normalizeLocale(locale);

  return (
    <section className="w-full">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
        {/* My Ads sidebar */}
        <aside className="h-fit rounded-2xl bg-[#f2f3f5] p-4">
          <h2 className="mb-4 px-4 text-xl font-extrabold text-slate-950">
            Account
          </h2>

          <nav className="space-y-2">
            {menuItems.map((item) => (
              <MenuItem
                key={item.title}
                href={`/${safeLocale}${normalizeSlug(item.slug)}`}
                title={item.title}
                active={item.active}
              />
            ))}
          </nav>

          <div className="my-5 border-t border-slate-200" />

          <h3 className="mb-3 px-4 text-xl font-extrabold text-slate-950">
            Jobs
          </h3>

          <nav className="space-y-2">
            {jobLinks.map((item) => (
              <MenuItem
                key={item.title}
                href={`/${safeLocale}${normalizeSlug(item.slug)}`}
                title={item.title}
              />
            ))}
          </nav>
        </aside>

        {/* Main My Ads content */}
        <div className="min-w-0 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <div className="border-b border-slate-200 pb-5">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-500">
              My advertisements
            </p>

            <h1 className="mt-1 text-2xl font-extrabold text-slate-950">
              Dunith Dilshan 2
            </h1>
          </div>

          {/* Pending payment heading */}
          <div className="mt-8 flex flex-col gap-4 rounded-2xl bg-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-xl font-extrabold text-slate-950 sm:text-2xl">
                Pending payment verification
              </h2>

              <p className="mt-1 text-sm font-medium text-slate-500">
                Complete the payment to publish this advertisement.
              </p>
            </div>

            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-500 text-base font-extrabold text-white shadow-sm">
              1
            </span>
          </div>

          {/* Alert */}
          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 px-5 py-5">
            <p className="font-semibold text-orange-800">
              Ads in this section require payment before they can be published.
            </p>
          </div>

          {/* Advertisement card */}
          <article className="mt-6 overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200">
            <div className="grid grid-cols-1 gap-6 p-6 md:grid-cols-[230px_minmax(0,1fr)]">
              <div className="overflow-hidden rounded-2xl bg-slate-100">
                <Image
                  src={productImg}
                  alt="Land for sale in Kurunegala"
                  className="h-56 w-full object-cover"
                />
              </div>

              <div className="min-w-0">
                <span className="inline-flex rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-orange-600">
                  Payment pending
                </span>

                <h2 className="mt-4 text-2xl font-extrabold text-slate-950">
                  Land for Sale Kurunegala
                </h2>

                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <InfoCard
                    label="Land size"
                    value="100.0 perches"
                  />

                  <InfoCard
                    label="Location"
                    value="Kurunegala"
                  />

                  <InfoCard
                    label="Price"
                    value="Rs 60,000 per perch"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 border-t border-slate-200 p-5 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href={`/${safeLocale}/post/myAdsDashboard`}
                className="text-sm font-bold text-slate-600 transition hover:text-orange-600"
              >
                View advertisement details
              </Link>

              <Link
                href={`/${safeLocale}/business/dashboard`}
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-8 py-3 font-bold text-white shadow-sm transition hover:bg-orange-600"
              >
                Pay now
              </Link>
            </div>
          </article>

          <div className="mt-6 text-right">
            <Link
              href={`/${safeLocale}/post/myAdsDashboard`}
              className="font-bold text-orange-500 transition hover:text-orange-600"
            >
              See all payment pending ads →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MenuItem({ title, href, active = false }) {
  const safeHref =
    typeof href === "string" ? href : "/en/account";

  return (
    <Link
      href={safeHref}
      className={`flex min-h-14 items-center justify-between rounded-xl px-4 py-3 text-base transition ${
        active
          ? "bg-white font-bold text-black shadow-sm"
          : "text-slate-700 hover:bg-white hover:shadow-sm"
      }`}
    >
      <span>{title}</span>

      <span
        className={`text-2xl font-light ${
          active ? "text-orange-500" : "text-slate-400"
        }`}
      >
        ›
      </span>
    </Link>
  );
}

function InfoCard({ label, value }) {
  return (
    <div className="rounded-2xl bg-slate-50 p-4">
      <p className="text-xs font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-2 font-extrabold text-slate-950">
        {value}
      </p>
    </div>
  );
}