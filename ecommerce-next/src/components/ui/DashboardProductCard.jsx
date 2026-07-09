export default function DashboardProductCard({ product }) {
  return (
    <div>
      <div className="bg-white rounded-xl h-64 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="mt-3 text-base line-clamp-2">{product.title}</h3>

      <p className="font-bold mt-2">{product.price}</p>

      <p className="text-sm text-gray-700">{product.moq}</p>

      <p className="text-sm text-gray-500 mt-2">
        <span className="text-blue-600 font-bold">Verified</span> · 7 yrs · CN
      </p>
    </div>
  );
}