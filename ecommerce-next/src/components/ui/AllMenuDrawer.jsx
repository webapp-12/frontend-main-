"use client";

import { X, UserCircle, ChevronRight, ChevronDown } from "lucide-react";

export default function AllMenuDrawer({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50"
      />

      <aside className="fixed left-0 top-0 z-50 h-screen w-[360px] max-w-[90vw] bg-white shadow-xl overflow-y-auto">
        <div className="flex items-center justify-between bg-[#232f3e] text-white px-6 py-4">
          <div className="flex items-center gap-3 text-2xl font-bold">
            <UserCircle size={30} />
            <span>Hello, ghg</span>
          </div>

          <button onClick={onClose}>
            <X size={26} />
          </button>
        </div>

        <MenuSection title="Trending" items={["Best Sellers", "New Releases", "Prescription Delivery"]} />

        <MenuSection
          title="Digital Content & Devices"
          items={[
            "Prime Video",
            "Amazon Music",
            "Echo & Alexa",
            "Fire Tablets",
            "Fire TV",
            "Amazon Luna",
            "Kindle E-readers & Books",
            "Audible Books & Originals",
            "Amazon Photos",
            "Amazon Appstore",
          ]}
          arrow
        />

        <MenuSection
          title="Shop by Department"
          items={[
            "Electronics",
            "Computers",
            "Smart Home",
            "Arts & Crafts",
            "Automotive",
            "Baby",
            "Beauty and Personal Care",
            "Women’s Fashion",
            "Men’s Fashion",
          ]}
          arrow
        />

        <MenuSection
          title="Programs & Features"
          items={[
            "Medical Care & Pharmacy",
            "Amazon Haul",
            "Amazon Business",
            "Sell on Amazon",
          ]}
          arrow
        />

        <MenuSection
          title="Help & Settings"
          items={[
            "Your Account",
            "🌐 English",
            "🇺🇸 United States",
            "Sign Out",
          ]}
        />
      </aside>
    </>
  );
}

function MenuSection({ title, items, arrow = false }) {
  return (
    <div className="border-b border-gray-200 py-5">
      <h3 className="px-6 mb-3 text-xl font-bold text-gray-900">
        {title}
      </h3>

      <div>
        {items.map((item) => (
          <button
            key={item}
            className="w-full flex items-center justify-between px-6 py-3 text-left text-gray-800 hover:bg-gray-100"
          >
            <span>{item}</span>
            {arrow && <ChevronRight size={22} className="text-gray-500" />}
          </button>
        ))}

        {(title === "Shop by Department" || title === "Programs & Features") && (
          <button className="w-full flex items-center gap-2 px-6 py-3 text-left text-gray-800 hover:bg-gray-100">
            <span>See all</span>
            <ChevronDown size={20} className="text-gray-500" />
          </button>
        )}
      </div>
    </div>
  );
}