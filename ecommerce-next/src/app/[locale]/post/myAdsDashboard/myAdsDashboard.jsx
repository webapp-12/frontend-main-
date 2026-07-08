import Image from "next/image";
import productImg from "@/assets/Products/product1.jpg";

export default function MyAdsDashboard() {
  return (
    <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-black/5 sm:p-8">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[300px_1fr]">
        <aside>
          <h2 className="mb-8 border-b pb-5 text-3xl font-light text-slate-900">
            Account
          </h2>

          <MenuItem active title="My ads" />
          <MenuItem title="My membership" />
          <MenuItem title="Saved searches" />
          <MenuItem title="Favorites" />
          <MenuItem title="Settings" />
          <MenuItem title="Phone Numbers" />

          <h3 className="mb-4 mt-8 text-2xl text-slate-900">Jobs</h3>

          <MenuItem title="My Profile" />
          <MenuItem title="Profile Database" />
        </aside>

        <section>
          <h1 className="border-b pb-5 text-2xl font-bold text-slate-900">
            dunith dilshan 2
          </h1>

          <div className="mb-6 mt-8 flex items-center rounded bg-[#f3f5f6] px-5 py-4 text-lg font-bold text-slate-900 sm:text-2xl">
            Pending payment verification
            <span className="ml-3 rounded-full bg-[#009877] px-2.5 py-1 text-sm text-white">
              1
            </span>
          </div>

          <div className="mb-6 flex items-start rounded border border-[#00A884] bg-white px-5 py-5 text-base text-gray-700 sm:text-xl">
            <span className="mr-3 text-2xl text-[#009877]">i</span>
            <span>
              Ads in this section require payment before they can be published.
            </span>
          </div>

          <div className="overflow-hidden rounded-lg border shadow-sm">
            <div className="flex flex-col gap-6 p-6 md:flex-row md:items-start md:gap-8">
              <Image
                src={productImg}
                alt="Land for sale"
                className="h-40 w-full rounded object-cover md:w-56"
                sizes="(max-width: 768px) 100vw, 224px"
              />

              <div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Land for Sale Kurunegala
                </h2>

                <p className="mt-3 text-xl font-bold text-[#009877]">
                  100.0 perches
                </p>

                <p className="mt-2 text-lg text-gray-500 sm:text-xl">
                  Kurunegala, Land For Sale
                </p>

                <p className="mt-2 text-xl font-bold text-slate-900">
                  Rs 60,000 per perch
                </p>
              </div>
            </div>

            <div className="flex justify-end border-t p-5">
              <button className="rounded-md bg-[#009877] px-6 py-3 text-base font-semibold text-white hover:bg-[#00806b] sm:px-10 sm:py-4 sm:text-xl">
                Pay now
              </button>
            </div>
          </div>

          <div className="mt-6 text-right">
            <button className="text-base text-[#0A66C2] hover:underline sm:text-xl">
              See all payment pending ads ›
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

function MenuItem({ title, active = false }) {
  return (
    <div
      className={`flex items-center justify-between border-b py-4 text-lg ${
        active ? "font-bold text-black" : "text-[#0066c0]"
      }`}
    >
      <span>{title}</span>
      <span className="text-4xl font-light text-gray-400">›</span>
    </div>
  );
}
