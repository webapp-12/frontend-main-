import Image from "next/image";
import Link from "next/link";

import productImg from "@/assets/Products/product1.jpg";

const menuItems = [
  { title: "My ads", slug: "/post/myAdsDashboard", active: true },
  { title: "My membership", slug: "/business" },
  { title: "Saved searches", slug: "/account/saved-searches" },
  { title: "Favorites", slug: "/account/favorites" },
  { title: "Settings", slug: "/account/settings" },
  { title: "Phone Numbers", slug: "/account/phone-numbers" },
];

const jobLinks = [
  { title: "My Profile", slug: "/account/profile" },
  { title: "Profile Database", slug: "/account/profile-database" },
];

export default function MyAdsDashboard({ locale = "en" }) {
  return (
    <div className="rounded-xl bg-white p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
        <aside>
          <h2 className="mb-8 border-b pb-5 text-3xl font-light">
            Account
          </h2>

          {menuItems.map((item) => (
            <MenuItem
              key={item.title}
              href={`/${locale}${item.slug}`}
              title={item.title}
              active={item.active}
            />
          ))}

          <h3 className="mt-8 mb-4 text-2xl">Jobs</h3>

          {jobLinks.map((item) => (
            <MenuItem
              key={item.title}
              href={`/${locale}${item.slug}`}
              title={item.title}
            />
          ))}
        </aside>

        <section>
          <h1 className="border-b pb-5 text-2xl font-bold">
            dunith dilshan 2
          </h1>

          <div className="mt-8 mb-6 flex items-center rounded bg-[#f3f5f6] px-5 py-4 text-2xl font-bold">
            Pending payment verification
            <span className="ml-3 rounded-full bg-[#009877] px-2.5 py-1 text-sm text-white">
              1
            </span>
          </div>

          <div className="mb-6 rounded border border-[#00A884] bg-white px-5 py-5 text-xl text-gray-700">
            Ads in this section require payment before they can be published.
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="flex flex-col gap-8 p-6 md:flex-row md:items-start">
              <Image
                src={productImg}
                alt="Land for sale"
                className="h-40 w-full rounded object-cover md:w-56"
              />

              <div>
                <h2 className="text-2xl font-bold">
                  Land for Sale Kurunegala
                </h2>

                <p className="mt-3 text-xl font-bold text-[#009877]">
                  100.0 perches
                </p>

                <p className="mt-2 text-xl text-gray-500">
                  Kurunegala, Land For Sale
                </p>

                <p className="mt-2 text-xl font-bold">
                  Rs 60,000 per perch
                </p>
              </div>
            </div>

            <div className="flex justify-end border-t p-5">
              <Link
                href={`/${locale}/business/dashboard`}
                className="rounded-md bg-[#009877] px-10 py-4 text-xl font-semibold text-white hover:bg-[#00806b]"
              >
                Pay now
              </Link>
            </div>
          </div>

          <div className="mt-6 text-right">
            <Link
              href={`/${locale}/post/myAdsDashboard`}
              className="text-xl text-[#0A66C2] hover:underline"
            >
              See all payment pending ads &gt;
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function MenuItem({ title, href, active = false }) {
  return (
    <Link
      href={href}
      className={`flex items-center justify-between border-b py-4 text-lg ${
        active ? "font-bold text-black" : "text-[#0066c0]"
      }`}
    >
      <span>{title}</span>
      <span className="text-4xl font-light text-gray-400">&gt;</span>
    </Link>
  );
}
