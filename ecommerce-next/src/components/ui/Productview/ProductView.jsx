import { product, relatedProducts } from "@/data/productDetails";

import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import DeliveryCard from "./DeliveryCard";
import ProductDescription from "./ProductDescription";
import ProductSpecification from "./ProductSpecification";
import RelatedProducts from "./RelatedProducts";
import ProductReviews from "./ProductReviews";
import ProductQuestions from "./ProductQuestions";

export default function ProductView() {
  return (
    <div className="px-4 py-6">
      <div className="mx-auto max-w-7xl">
        <p className="mb-4 text-sm text-slate-500">
          Home &rsaquo; Electronics &rsaquo; Accessories &rsaquo;{" "}
          <span className="font-medium text-orange-500">{product.title}</span>
        </p>

        <section className="grid gap-6 rounded-3xl bg-white p-5 shadow-sm lg:grid-cols-[430px_1fr_320px]">
          <ProductImages product={product} />
          <ProductInfo product={product} />
          <DeliveryCard product={product} />
        </section>

        <ProductDescription />

        {false ? <ProductSpecification /> : null}

        <ProductReviews />
        <ProductQuestions />
        <RelatedProducts products={relatedProducts} />
      </div>
    </div>
  );
}
