import Link from "next/link";
import DashboardProductCard from "./DashboardProductCard";
import { dashboardProducts } from "@/data/dashboardProducts";

export default function AccountDashboard() {
  return (
    <section className="flex-1 bg-[#f2f3f5] p-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 bg-white rounded-xl p-6">
          <div className="flex justify-between">
            <div className="flex gap-4">
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center text-3xl">
                🦌
              </div>

              <div>
                <h2 className="font-bold text-lg">dunith</h2>
                <button className="underline">Profile</button>
              </div>
            </div>

            <button className="underline font-semibold">
              🎧 Online support
            </button>
          </div>

          <div className="grid grid-cols-3 text-center mt-10">
            <div>
              <h3 className="font-bold text-2xl">2</h3>
              <p>Unread messages</p>
            </div>
            <div className="border-x">
              <h3 className="font-bold text-2xl">0</h3>
              <p>New quotes</p>
            </div>
            <div>
              <h3 className="font-bold text-2xl">0</h3>
              <p>Coupons</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Favorites</h2>
          <div className="bg-gray-50 rounded-xl h-44 flex flex-col items-center justify-center">
            <div className="text-5xl">📦</div>
            <p className="font-bold mt-3">No favorites yet</p>
            <button className="underline text-gray-600">Explore</button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        <div className="xl:col-span-2 bg-white rounded-xl p-6">
          <div className="flex justify-between mb-6">
            <h2 className="text-2xl font-bold">Orders</h2>
            <button>View all ›</button>
          </div>

          <div className="flex gap-3 flex-wrap mb-10">
            {["All", "Confirming", "Unpaid", "Preparing to ship", "Delivering"].map(
              (tab) => (
                <button
                  key={tab}
                  className="border rounded-full px-5 py-2 hover:border-black"
                >
                  {tab}
                </button>
              )
            )}
          </div>

          <div className="text-center py-10">
            <div className="text-6xl">📄</div>
            <h3 className="text-2xl font-bold mt-4">No orders yet</h3>
            <button className="mt-4 border border-black rounded-full px-6 py-2 font-bold">
              Start sourcing
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-4">Browsing history</h2>
          <div className="flex gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-5xl">🔋</div>
              <p className="font-bold mt-3">LKR 32,039.56</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-4">
              <div className="text-5xl">📦</div>
              <button className="underline mt-3">Explore</button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-5">
        Get product inspiration
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {dashboardProducts.map((product) => (
          <DashboardProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}