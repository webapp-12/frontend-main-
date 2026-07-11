import DashboardProductCard from "@/components/ui/DashboardProductCard";
import { dashboardProducts } from "@/data/dashboardProducts";

export default function AccountDashboard() {
  return (
    <section className="flex-1 bg-[#f2f3f5] p-6">
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-xl bg-white p-6 xl:col-span-2">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-100 text-3xl">
                🦌
              </div>

              <div>
                <h2 className="text-lg font-bold">dunith</h2>
                <button suppressHydrationWarning className="underline">
                  Profile
                </button>
              </div>
            </div>

            <button suppressHydrationWarning className="font-semibold underline">
              🎧 Online support
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 text-center">
            <div>
              <h3 className="text-2xl font-bold">2</h3>
              <p>Unread messages</p>
            </div>
            <div className="border-x">
              <h3 className="text-2xl font-bold">0</h3>
              <p>New quotes</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold">0</h3>
              <p>Coupons</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold">Favorites</h2>
          <div className="flex h-44 flex-col items-center justify-center rounded-xl bg-gray-50">
            <div className="text-5xl">📦</div>
            <p className="mt-3 font-bold">No favorites yet</p>
            <button suppressHydrationWarning className="underline text-gray-600">
              Explore
            </button>
          </div>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="rounded-xl bg-white p-6 xl:col-span-2">
          <div className="mb-6 flex justify-between">
            <h2 className="text-2xl font-bold">Orders</h2>
            <button suppressHydrationWarning>View all ›</button>
          </div>

          <div className="mb-10 flex flex-wrap gap-3">
            {["All", "Confirming", "Unpaid", "Preparing to ship", "Delivering"].map(
              (tab) => (
                <button
                  key={tab}
                  suppressHydrationWarning
                  className="rounded-full border px-5 py-2 hover:border-black"
                >
                  {tab}
                </button>
              )
            )}
          </div>

          <div className="py-10 text-center">
            <div className="text-6xl">📄</div>
            <h3 className="mt-4 text-2xl font-bold">No orders yet</h3>
            <button
              suppressHydrationWarning
              className="mt-4 rounded-full border border-black px-6 py-2 font-bold"
            >
              Start sourcing
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-white p-6">
          <h2 className="mb-4 text-2xl font-bold">Browsing history</h2>
          <div className="flex gap-4">
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="text-5xl">🔋</div>
              <p className="mt-3 font-bold">LKR 32,039.56</p>
            </div>
            <div className="rounded-xl bg-gray-50 p-4">
              <div className="text-5xl">📦</div>
              <button suppressHydrationWarning className="mt-3 underline">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mb-5 mt-10 text-2xl font-bold">Get product inspiration</h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {dashboardProducts.map((product) => (
          <DashboardProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
