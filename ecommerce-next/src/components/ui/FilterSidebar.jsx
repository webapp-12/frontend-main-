export default function FilterSidebar() {
  const categories = [
    "All",
    "Gaming Consoles",
    "Gaming Keyboards",
    "Gaming Mice",
    "Gaming Chairs",
    "Gaming Headsets",
    "Gaming Controllers",
  ];

  const brands = [
    "Sony",
    "Microsoft",
    "Logitech",
    "Razer",
    "SteelSeries",
    "HyperX",
  ];

  return (
    <aside className="w-full">

      {/* Shop By */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          Shop by
        </h2>

        <div className="space-y-3">
          {categories.map((category) => (
            <label
              key={category}
              className="flex items-center gap-3 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                className="w-4 h-4"
              />
              <span>{category}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          Price
        </h2>

        <div className="space-y-2">

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>Under $25</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>$25 - $50</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>$50 - $100</span>
          </label>

          <label className="flex items-center gap-3">
            <input type="checkbox" />
            <span>Above $100</span>
          </label>

        </div>
      </div>

      {/* Brand */}
      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">
          Brand
        </h2>

        <div className="space-y-2">
          {brands.map((brand) => (
            <label
              key={brand}
              className="flex items-center gap-3"
            >
              <input type="checkbox" />
              <span>{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Rating */}
      <div>
        <h2 className="text-xl font-bold mb-4">
          Rating
        </h2>

        <div className="space-y-2">

          <label className="flex items-center gap-3">
            <input type="radio" name="rating" />
            ⭐⭐⭐⭐⭐
          </label>

          <label className="flex items-center gap-3">
            <input type="radio" name="rating" />
            ⭐⭐⭐⭐☆
          </label>

          <label className="flex items-center gap-3">
            <input type="radio" name="rating" />
            ⭐⭐⭐☆☆
          </label>

        </div>
      </div>

    </aside>
  );
}