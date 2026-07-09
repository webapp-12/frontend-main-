import Image from "next/image";

export default function StoreProductCard({product}) {

  return (

    <div className="bg-white">

      <Image
        src={product.image}
        alt={product.name}
        width={350}
        height={350}
      />

      <div className="p-4">

        <h2>{product.name}</h2>

        <p className="text-orange-500 text-2xl">
          {product.price}
        </p>

      </div>

    </div>

  );

}