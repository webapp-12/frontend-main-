import Header from "@/components/layout/Header";
import HeroSection from "@/components/ui/HeroSection";
import ProductCard from "@/components/ui/ProductCard";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Home | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Localized ecommerce home page for the ${locale.toUpperCase()} storefront.`,
  };
}

export default async function HomePage({ params }) {
  await params;

  const cards = [
    { title: "Get your game on", img: "🎮", link: "Shop gaming" },
    { title: "Shop Fashion for less", img: "👕", link: "See all deals" },
    {
      title: "Must-haves for every student",
      img: "🎒",
      link: "Shop Back to School",
    },
    {
      title: "Must-have school supplies",
      img: "📚",
      link: "Shop supplies",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-200">
      <Header />
      <HeroSection />

      <section
        id="products"
        className="relative mx-auto -mt-10 grid max-w-7xl gap-6 px-6 pb-12 md:grid-cols-2 lg:grid-cols-4"
      >
        {cards.map((card, index) => (
          <ProductCard
            key={index}
            title={card.title}
            img={card.img}
            link={card.link}
          />
        ))}
      </section>
    </main>
  );
}
