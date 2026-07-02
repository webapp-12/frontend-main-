const sortOptions = [
  "Featured",
  "Price: Low to High",
  "Price: High to Low",
  "Newest Arrivals",
];

export default function SortDropdown() {
  return (
    <label className="flex items-center gap-3 text-sm font-medium text-gray-700">
      <span>Sort by</span>
      <select className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-900 outline-none transition focus:border-cyan-700 focus:ring-2 focus:ring-cyan-100">
        {sortOptions.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
