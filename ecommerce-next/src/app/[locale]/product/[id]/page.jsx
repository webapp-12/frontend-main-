import ProductDetailsPage from "@/components/ui/product/ProductDetailsPage";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Product Details | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `View product details in the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function Page({ params }) {
  const { locale } = await params;

  return <ProductDetailsPage locale={locale} />;
}
