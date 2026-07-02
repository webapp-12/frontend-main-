export default function SortDroupdown(){
    return(
        <div className="flex items-center gap-3">

            <span className="font-medium text-gray-700">
                Sort by:
            </span>

            <select className="border rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-indigo-500">

                <option>Featured</option>

                <option>Newest</option>

                <option>Prices: Low to High</option>

                <option>Prices: High to Low</option>

                <option>Highest Rated</option>
            </select>
            
        </div>
    )
}