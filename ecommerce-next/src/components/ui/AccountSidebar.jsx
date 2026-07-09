"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  ClipboardList,
  CircleDollarSign,
  Megaphone,
  Heart,
  Bookmark,
  Truck,
  Package,
  Settings,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    path: "/account",
  },
  {
    title: "Messages",
    icon: MessageSquare,
    path: "/account/messages",
  },
  {
    title: "Orders",
    icon: ClipboardList,
    path: "/account/orders",
  },
  {
    title: "My Ads",
    icon: Megaphone,
    path: "/post/myAdsDashboard",
  },
  {
    title: "Payment",
    icon: CircleDollarSign,
    path: "/account/payment",
  },
  {
    title: "Saved & History",
    icon: Heart,
    path: "/account/history",
  },
  {
    title: "Subscription",
    icon: Bookmark,
    path: "/account/subscription",
  },
  {
    title: "Logistics Services",
    icon: Truck,
    path: "/account/logistics",
  },
  {
    title: "Your Business",
    icon: Package,
    path: "/business",
  },
  {
    title: "Account Settings",
    icon: Settings,
    path: "/account/settings",
  },
];

export default function AccountSidebar({ locale = "en" }) {
  const pathname = usePathname();

  return (
    <aside className="hidden min-h-screen w-64 bg-[#f2f3f5] p-4 lg:block">
      <div className="space-y-2">
        {menu.map((item) => {
          const Icon = item.icon;
          const href = `/${locale}${item.path}`;
          const isActive =
            item.path === "/account"
              ? pathname === href
              : pathname === href || pathname.startsWith(`${href}/`);

          return (
            <Link
              key={item.title}
              href={href}
              className={`flex items-center gap-3 rounded-lg px-4 py-3 transition-all ${
                isActive
                  ? "bg-white font-bold text-black shadow-sm"
                  : "text-gray-700 hover:bg-white hover:shadow-sm"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </Link>
          );
        })}
      </div>
    </aside>
  );
}
