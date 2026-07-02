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

export default function Header() {
  return (
    <header className="bg-[#131921] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-4">
        <h1 className="text-3xl font-bold tracking-tight">
          shop<span className="text-orange-400">zone</span>
        </h1>
        <nav className="hidden items-center gap-6 text-sm text-white/80 md:flex">
          <a href="#deals" className="transition hover:text-white">
            Today&apos;s Deals
          </a>
          <a href="#gaming" className="transition hover:text-white">
            Gaming
          </a>
          <a href="#fashion" className="transition hover:text-white">
            Fashion
          </a>

           {/* Search */}
          <div className="hidden md:flex flex-1 max-w-xl mx-10">
            <div className="relative w-full">
              <SearchIcon
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                width={18}
                height={18}
              />

              <input
                type="text"
                placeholder="Search products..."
                className="w-full rounded-full border border-gray-300 pl-11 pr-4 py-2 outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 transition"
              />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}
