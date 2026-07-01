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
        </nav>
      </div>
    </header>
  );
}
