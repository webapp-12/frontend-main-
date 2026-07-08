const tabs = [
  "All",
  "Aquarium",
  "Filtration",
  "Sterilizers",
  "Accessories",
  "Bulk Orders",
];

export default function StoreTabs() {
  return (
    <section className="mt-6 overflow-x-auto">
      <div className="flex min-w-max gap-3">
        {tabs.map((tab, index) => (
          <button
            key={tab}
            type="button"
            className={`rounded-full px-5 py-2.5 text-sm font-semibold transition ${
              index === 0
                ? "bg-[#232f3e] text-white"
                : "bg-white text-slate-700 ring-1 ring-slate-200 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
    </section>
  );
}
