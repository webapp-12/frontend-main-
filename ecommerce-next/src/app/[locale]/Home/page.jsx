import HomeLanding from "../../../components/ui/home-landing";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Home | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Localized ecommerce home page for the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;

  return <HomeLanding locale={locale} />;
}
