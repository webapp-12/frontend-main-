import StoreProductCard from "./StoreProductCard";
import { storeProducts } from "@/data/storeProducts";

export default function StoreProductGrid() {

  return (

    <div className="grid grid-cols-4 gap-5 mt-5">

      {storeProducts.map((product)=>(
        <StoreProductCard
          key={product.id}
          product={product}
        />
      ))}

    </div>

  );

}