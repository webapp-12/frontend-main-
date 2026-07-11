"use client";

import { useState } from "react";
import Link from "next/link";

import AllMenuDrawer from "@/components/ui/AllMenuDrawer";

export default function SecondNav({ locale = "en" }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const navItems = [
    { name: "Today's Deals", href: `/${locale}/Items` },
    { name: "Gaming", href: `/${locale}/Items?category=gaming` },
    { name: "Fashion", href: `/${locale}/Items?category=fashion` },
    { name: "Same-Day Delivery", href: `/${locale}/Items` },
    { name: "Groceries", href: `/${locale}/Items` },
    { name: "Buy Again", href: `/${locale}/Items` },
  ];

  return (
    <>
      <div className="bg-[#232f3e] text-white">
        <div className="mx-auto flex h-12 max-w-7xl items-center gap-5 overflow-x-auto whitespace-nowrap px-4">
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            suppressHydrationWarning
            className="flex items-center gap-2 rounded px-2 py-1 font-semibold hover:outline hover:outline-1 hover:outline-white"
            aria-expanded={isDrawerOpen}
            aria-label="Open all menu"
          >
            <span className="text-2xl leading-none">&#9776;</span>
            <span>All</span>
          </button>

          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="rounded px-2 py-2 text-sm font-medium hover:outline hover:outline-1 hover:outline-white"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>

      <AllMenuDrawer
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        locale={locale}
      />
    </>
  );
}
