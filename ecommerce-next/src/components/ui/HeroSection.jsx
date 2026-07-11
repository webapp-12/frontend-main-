import finderBanner from "@/assets/homebanner/FINDER.png";

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(19, 25, 33, 0.92) 0%, rgba(19, 25, 33, 0.78) 35%, rgba(19, 25, 33, 0.38) 62%, rgba(19, 25, 33, 0.12) 100%), url(${finderBanner.src})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="mx-auto flex min-h-[420px] max-w-7xl flex-col justify-center px-6 py-16">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
          Back to school picks
        </p>
        <h2 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
          Fresh deals for gaming, fashion, and everyday essentials
        </h2>
        <p className="mt-4 max-w-xl text-base text-white/75 sm:text-lg">
          Discover trending products, limited-time offers, and must-haves for the
          new season in one place.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#products"
            className="rounded-full bg-orange-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-orange-300"
          >
            Shop now
          </a>
          <a
            href="#deals"
            className="rounded-full border border-white/20 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
          >
            View deals
          </a>
        </div>
      </div>
    </section>
  );
}
