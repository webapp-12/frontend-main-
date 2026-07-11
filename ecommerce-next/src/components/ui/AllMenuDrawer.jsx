"use client";

import Link from "next/link";

export default function AllMenuDrawer({ open, onClose, locale = "en" }) {
  if (!open) return null;

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-40 bg-black/50"
        aria-hidden="true"
      />

      <aside className="fixed left-0 top-0 z-50 h-screen w-[360px] max-w-[90vw] overflow-y-auto bg-white shadow-xl">
        <div className="flex items-center justify-between bg-[#232f3e] px-6 py-4 text-white">
          <div className="flex items-center gap-3 text-2xl font-bold">
            <UserCircleIcon className="h-[30px] w-[30px]" />
            <span>Hello, Dunith</span>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 transition hover:bg-white/10"
            aria-label="Close menu"
          >
            <CloseIcon className="h-[26px] w-[26px]" />
          </button>
        </div>

        <MenuSection
          title="Trending"
          items={["Best Sellers", "New Releases", "Prescription Delivery"]}
        />

        <MenuSection
          title="Digital Content & Devices"
          items={[
           
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
            "Women's Fashion",
            "Men's Fashion",
          ]}
          arrow
        />

        <MenuSection
          title="Programs & Features"
          items={[
            "Medical Care & Pharmacy",
            "Finder Haul",
            "Finder Business",
            "Sell on Finder",
          ]}
          arrow
        />

        <MenuSection
          title="Help & Settings"
          items={[
            { label: "Your Account", href: `/${locale}/account` },
            "English",
            "United States",
            "Sign Out",
          ]}
          onItemClick={onClose}
        />
      </aside>
    </>
  );
}

function MenuSection({ title, items, arrow = false, onItemClick }) {
  return (
    <div className="border-b border-gray-200 py-5">
      <h3 className="mb-3 px-6 text-xl font-bold text-gray-900">{title}</h3>

      <div>
        {items.map((item) => {
          const entry =
            typeof item === "string" ? { label: item } : item;

          if (entry.href) {
            return (
              <Link
                key={entry.label}
                href={entry.href}
                onClick={onItemClick}
                className="flex w-full items-center justify-between px-6 py-3 text-left text-gray-800 hover:bg-gray-100"
              >
                <span>{entry.label}</span>
                {arrow ? (
                  <ChevronRightIcon className="h-[22px] w-[22px] text-gray-500" />
                ) : null}
              </Link>
            );
          }

          return (
            <button
              key={entry.label}
              type="button"
              className="flex w-full items-center justify-between px-6 py-3 text-left text-gray-800 hover:bg-gray-100"
            >
              <span>{entry.label}</span>
              {arrow ? (
                <ChevronRightIcon className="h-[22px] w-[22px] text-gray-500" />
              ) : null}
            </button>
          );
        })}

        {(title === "Shop by Department" || title === "Programs & Features") && (
          <button
            type="button"
            className="flex w-full items-center gap-2 px-6 py-3 text-left text-gray-800 hover:bg-gray-100"
          >
            <span>See all</span>
            <ChevronDownIcon className="h-[20px] w-[20px] text-gray-500" />
          </button>
        )}
      </div>
    </div>
  );
}

function UserCircleIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="9" r="3" />
      <path d="M6.5 18a7 7 0 0 1 11 0" />
    </svg>
  );
}

function CloseIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function ChevronDownIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
