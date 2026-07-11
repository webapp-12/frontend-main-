import Header from "@/components/layout/Header";
import HeroSection from "@/components/ui/HeroSection";
import ProductCard from "@/components/ui/ProductCard";
import SecondNav from "@/components/ui/SecondNav";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Home | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Localized ecommerce home page for the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;

  const cards = [
    {
      title: "Get your game on",
      img: "🎮",
      link: "Shop gaming",
      href: `/${locale}/Items`,
    },
    {
      title: "Shop Fashion for less",
      img: "👕",
      link: "See all deals",
      href: `/${locale}/Items?category=fashion`,
    },
    {
      title: "Must-haves for every student",
      img: "🎒",
      link: "Shop Back to School",
      href: `/${locale}/Items`,
    },
    {
      title: "Must-have school supplies",
      img: "📚",
      link: "Shop supplies",
      href: `/${locale}/Items`,
    },
  ];

  return (
    <main className="min-h-screen bg-gray-200">
      {/* Only the main header stays fixed */}
      <div className="fixed inset-x-0 top-0 z-50">
        <Header locale={locale} />
      </div>

      {/* Must match the real Header height */}
      <div className="pt-[72px]">
        {/* This navigation scrolls normally */}
        <SecondNav locale={locale} />

        <HeroSection />

        <section
          id="products"
          className="relative z-10 mx-auto -mt-10 grid max-w-7xl gap-6 px-6 pb-12 md:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, index) => (
            <ProductCard
              key={`${card.title}-${index}`}
              title={card.title}
              img={card.img}
              link={card.link}
              href={card.href}
            />
          ))}
        </section>
      </div>
    </main>
  );
}