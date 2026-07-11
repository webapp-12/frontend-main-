"use client";

import Link from "next/link";
import {
  Search,
  ChevronDown,
  ShoppingCart,
} from "lucide-react";

export default function Header({ locale = "en" }) {
  const basePath = `/${locale}`;

  return (
    <header className="bg-[#131921] text-white">
      <div className="max-w-7xl mx-auto flex items-center gap-6 px-6 py-3">

        {/* Logo */}
        <Link href={`${basePath}/home`} className="text-3xl font-bold whitespace-nowrap">
          fin<span className="text-orange-400">der</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-6 text-sm">
          <Link href={`${basePath}/Items`}>Today&apos;s Deals</Link>
          <Link href={`${basePath}/Items?category=gaming`}>Gaming</Link>
          <Link href={`${basePath}/Items?category=fashion`}>Fashion</Link>
        </nav>

        {/* Search */}
        <div className="flex-1 hidden md:block">
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Search products..."
              suppressHydrationWarning
              className="w-full rounded-full bg-white text-black pl-12 pr-5 py-3 outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-8 whitespace-nowrap">

          {/* Language */}
          <button
            suppressHydrationWarning
            className="hidden lg:flex items-center gap-2 hover:text-orange-300"
          >
            <span className="text-xl">🇺🇸</span>

            <span className="font-semibold">
              EN
            </span>

            <ChevronDown size={16} />
          </button>

          {/* Account */}
          <Link
            href={`${basePath}/account`}
            className="flex flex-col leading-tight hover:text-orange-300"
          >
            <span className="text-xs">Hello, ghg</span>

            <div className="flex items-center gap-1 font-bold">
              <span>Account & Lists</span>
              <ChevronDown size={14} />
            </div>
          </Link>

          {/* Orders */}
          <Link
            href={`${basePath}/orders`}
            className="flex flex-col leading-tight hover:text-orange-300"
          >
            <span className="text-xs">Returns</span>
            <span className="font-bold">& Orders</span>
          </Link>

          {/* Cart */}
          <Link
            href={`${basePath}/cart`}
            className="relative flex items-end gap-2 hover:text-orange-300"
          >
            <div className="relative">
              <ShoppingCart size={34} />

              <span className="absolute -top-2 left-4 text-orange-400 font-bold">
                0
              </span>
            </div>

            <span className="font-bold text-xl">
              Cart
            </span>
          </Link>

          <button suppressHydrationWarning className="rounded-xl
    bg-gradient-to-r
    from-orange-500
    to-amber-500
    px-7
    py-3
    text-sm
    font-bold
    text-white
    shadow-lg
    transition-all
    duration-300
    hover:from-orange-600
    hover:to-amber-600
    hover:shadow-2xl
    hover:scale-105
    active:scale-95 ">
            Post Your Ads
          </button>

        </div>

      </div>
    </header>
  );
}
