import Link from "next/link";

function ChevronDownIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
    </svg>
  );
}

function CartIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="18" cy="20" r="1.5" />
      <path d="M2 4h3l2.7 10.5a1 1 0 0 0 1 .75H18a1 1 0 0 0 .97-.76L21 7H6" />
    </svg>
  );
}

function PinIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 21s6-5.33 6-11a6 6 0 1 0-12 0c0 5.67 6 11 6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function FlagIcon(props) {
  return (
    <svg viewBox="0 0 28 20" fill="none" aria-hidden="true" {...props}>
      <rect width="28" height="20" rx="2" fill="#fff" />
      <path d="M0 2h28M0 6h28M0 10h28M0 14h28M0 18h28" stroke="#C53030" strokeWidth="2" />
      <rect width="12" height="10" rx="2" fill="#1E3A8A" />
      <path
        d="M2 2h1M5 2h1M8 2h1M3.5 4h1M6.5 4h1M2 6h1M5 6h1M8 6h1M3.5 8h1M6.5 8h1"
        stroke="#fff"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HeaderAction({ eyebrow, label, href, withChevron = false }) {
  return (
    <Link
      href={href}
      className="rounded-md px-2 py-2 text-white transition hover:outline hover:outline-1 hover:outline-white"
    >
      <span className="block text-xs leading-none text-white/85">{eyebrow}</span>
      <span className="flex items-center gap-1 text-sm font-bold leading-tight">
        {label}
        {withChevron ? <ChevronDownIcon className="h-3.5 w-3.5 text-white/70" /> : null}
      </span>
    </Link>
  );
}

export default function Header({ locale = "en" }) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#131921] text-white">
      <div className="mx-auto flex max-w-[1600px] items-center gap-3 px-3 py-2">
        <Link
          href={`/${locale}/home`}
          className="shrink-0 rounded-md px-2 py-2 text-3xl font-bold leading-none transition hover:outline hover:outline-1 hover:outline-white"
        >
          <span className="text-white">shop</span>
          <span className="text-orange-400">zone</span>
        </Link>

        <button
          type="button"
          suppressHydrationWarning
          className="hidden shrink-0 items-center gap-2 rounded-md px-2 py-2 text-left transition hover:outline hover:outline-1 hover:outline-white lg:flex"
        >
          <PinIcon className="mt-2 h-5 w-5 shrink-0 text-white/80" />
          <span className="leading-tight">
            <span className="block text-xs text-white/70">Delivering to Nashville 37217</span>
            <span className="block text-sm font-bold text-white">Update location</span>
          </span>
        </button>

        <div className="mx-2 flex min-w-0 flex-1 items-center overflow-hidden rounded-xl border border-[#f3a847] bg-white">
          <button
            type="button"
            suppressHydrationWarning
            className="hidden h-12 shrink-0 items-center gap-1 border-r border-slate-200 bg-slate-100 px-4 text-sm text-slate-700 md:flex"
          >
            <span>All</span>
            <ChevronDownIcon className="h-4 w-4" />
          </button>

          <input
            type="text"
            placeholder="Search products..."
            suppressHydrationWarning
            className="h-12 min-w-0 flex-1 border-0 px-4 text-base text-slate-900 outline-none"
          />

          <button
            type="button"
            suppressHydrationWarning
            className="flex h-12 w-14 shrink-0 items-center justify-center bg-[#f3a847] text-slate-900 transition hover:bg-[#f0c14b]"
            aria-label="Search"
          >
            <SearchIcon className="h-6 w-6" />
          </button>
        </div>

        <button
          type="button"
          suppressHydrationWarning
          className="hidden shrink-0 items-center gap-1 rounded-md px-2 py-2 transition hover:outline hover:outline-1 hover:outline-white lg:flex"
          aria-label="Choose language"
        >
          <FlagIcon className="h-5 w-7 rounded-sm" />
          <span className="text-sm font-bold uppercase">{locale}</span>
          <ChevronDownIcon className="h-4 w-4 text-white/70" />
        </button>

        <div className="hidden shrink-0 items-center gap-1 lg:flex">
          <HeaderAction
            eyebrow="Hello, ghg"
            label="Account & Lists"
            href={`/${locale}/account`}
            withChevron
          />
          <HeaderAction eyebrow="Returns" label="& Orders" href={`/${locale}/account`} />

          <Link
            href={`/${locale}/Items`}
            className="flex items-end gap-2 rounded-md px-2 py-2 transition hover:outline hover:outline-1 hover:outline-white"
          >
            <div className="relative">
              <CartIcon className="h-10 w-10" />
              <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-lg font-bold text-orange-400">
                0
              </span>
            </div>
            <span className="pb-1 text-sm font-bold">Cart</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
