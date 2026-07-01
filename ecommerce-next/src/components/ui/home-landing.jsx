"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

const SIDEBAR_ITEMS = [
  { label: "Home", href: null, active: true },
  { label: "Rideshare", href: "#" },
  { label: "Shop", href: "#" },
  { label: "Food", href: "#" },
  { label: "Feed", href: "#" },
  { label: "Videos", href: "videos" },
  { label: "Saved Ref Code", href: "#" },
  { label: "Town Hall", href: "#" },
  { label: "Messages", href: "#" },
  { label: "Work", href: "#" },
  { label: "Split", href: "#" },
];

const HOME_CATEGORIES = [
  { id: "all", label: "All", image: "/img/cat/tempstay/All.png" },
  { id: "entire-home", label: "Entire Home", image: "/img/cat/tempstay/Entire Home.png" },
  { id: "private-room", label: "Private Room", image: "/img/cat/tempstay/Private Room.png" },
  { id: "shared-room", label: "Shared Room", image: "/img/cat/tempstay/Shared Room.png" },
  { id: "cabin", label: "Cabin", image: "/img/cat/tempstay/Cabin.png" },
  { id: "beachfront", label: "Beachfront", image: "/img/cat/tempstay/Beachfront.png" },
  { id: "luxury", label: "Luxury", image: "/img/cat/tempstay/Luxury.png" },
  { id: "unique", label: "Unique", image: "/img/cat/tempstay/Unique.png" },
];

const HOME_LISTINGS = [
  {
    id: "home-from-home",
    title: "Home From Home",
    type: "Apartment",
    location: "Toronto, ON, Canada",
    guests: 3,
    beds: 2,
    host: "Host",
    hostInitial: "H",
    price: 100,
    rating: 0,
    reviews: 0,
    category: "all",
    image: "/img/Temp Stay.JPG",
    superhost: false,
    x: "22%",
    y: "34%",
  },
  {
    id: "home-downtown",
    title: "Home Downtown",
    type: "Apartment",
    location: "Chicago, IL, USA",
    guests: 3,
    beds: 2,
    host: "Host",
    hostInitial: "H",
    price: 100,
    rating: 0,
    reviews: 0,
    category: "entire-home",
    image: "/img/cat/tempstay/Luxury.png",
    superhost: false,
    x: "48%",
    y: "44%",
  },
  {
    id: "stay-palace",
    title: "Stay Palace",
    type: "Apartment",
    location: "Texas Pl, Mobile, AL 36603, USA",
    guests: 3,
    beds: 2,
    host: "Host",
    hostInitial: "H",
    price: 100,
    rating: 0,
    reviews: 0,
    category: "luxury",
    image: "/img/cat/tempstay/Beachfront.png",
    superhost: false,
    x: "72%",
    y: "38%",
  },
  {
    id: "best-room",
    title: "Best Room",
    type: "Entire Home",
    location: "Albany, NY, USA",
    guests: 4,
    beds: 3,
    host: "Host",
    hostInitial: "H",
    price: 180,
    rating: 0,
    reviews: 0,
    category: "private-room",
    image: "/img/cat/tempstay/Private Room.png",
    superhost: false,
    x: "30%",
    y: "70%",
  },
  {
    id: "pine-cabin",
    title: "Pine Cabin",
    type: "Cabin",
    location: "Whistler, BC, Canada",
    guests: 6,
    beds: 4,
    host: "Host",
    hostInitial: "H",
    price: 220,
    rating: 0,
    reviews: 0,
    category: "cabin",
    image: "/img/cat/tempstay/Cabin.png",
    superhost: true,
    x: "58%",
    y: "68%",
  },
  {
    id: "moon-bay",
    title: "Moon Bay",
    type: "Beachfront",
    location: "Santa Monica, CA, USA",
    guests: 2,
    beds: 1,
    host: "Host",
    hostInitial: "H",
    price: 260,
    rating: 0,
    reviews: 0,
    category: "beachfront",
    image: "/img/cat/tempstay/Beachfront.png",
    superhost: true,
    x: "80%",
    y: "72%",
  },
];

function SearchIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function MapIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <polygon points="1 6 8 2 16 6 23 2 23 18 16 22 8 18 1 22 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9 21v-6h6v6" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.45 7.54H22l-6.1 4.43 2.33 7.18L12 16.93l-6.23 4.22 2.33-7.18L2 9.54h7.55z" />
    </svg>
  );
}

function NavIcon({ index }) {
  const icons = [
    <HomeIcon key="home" />,
    <svg key="ride" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 13h18" /><path d="M5 13l1.5-5h11L19 13" /><circle cx="7" cy="18" r="2" /><circle cx="17" cy="18" r="2" /></svg>,
    <svg key="shop" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 7h18" /><path d="M5 7l1 13h12l1-13" /><path d="M9 11v5" /><path d="M15 11v5" /></svg>,
    <svg key="food" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M8 3v10" /><path d="M12 3v10" /><path d="M8 8h4" /><path d="M17 3v18" /><path d="M14 10h6" /></svg>,
    <svg key="feed" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /></svg>,
    <svg key="video" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
    <svg key="tag" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 10V4H14L4 14l6 6L20 10Z" /><path d="M17 7h.01" /></svg>,
    <svg key="users" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
    <svg key="msg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
    <svg key="clock" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 6v6l4 2" /></svg>,
    <svg key="split" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="7" height="16" /><rect x="14" y="4" width="7" height="16" /></svg>,
  ];

  return icons[index] ?? <HomeIcon />;
}

function Sidebar({ locale }) {
  return (
    <aside className="hidden h-[calc(100vh-2rem)] rounded-[2rem] border border-white/8 bg-[#111218] px-3 py-4 lg:sticky lg:top-4 lg:flex lg:flex-col">
      <div className="mb-5 flex justify-center">
        <div className="grid h-16 w-16 place-items-center rounded-[1.4rem] border border-white/10 bg-[#171924] text-[#ff3459] shadow-[0_12px_24px_rgba(0,0,0,0.28)]">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M4 20L20 4" />
            <path d="M4 4h16v16" />
          </svg>
        </div>
      </div>

      <nav className="flex-1 space-y-2">
        {SIDEBAR_ITEMS.map((item, index) => {
          const content = (
            <span
              className={`flex flex-col items-center gap-2 rounded-2xl px-3 py-3 text-[0.9rem] transition ${
                item.active
                  ? "bg-white/[0.06] text-white"
                  : "text-white/45 hover:bg-white/[0.04] hover:text-white/75"
              }`}
            >
              <span className={`${item.label === "Videos" ? "text-[#8b5cf6]" : ""}`}>
                <NavIcon index={index} />
              </span>
              <span className="text-center text-[0.92rem] leading-tight">{item.label}</span>
            </span>
          );

          if (!item.href || item.href === "#") {
            return <div key={item.label}>{content}</div>;
          }

          return (
            <Link key={item.label} href={`/${locale}/${item.href}`}>
              {content}
            </Link>
          );
        })}
      </nav>

      <div className="mt-4 grid gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-white/[0.05] text-white/80">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 1v22" />
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7H14.5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </div>
      </div>
    </aside>
  );
}

function CategoryBubble({ category, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex min-w-[92px] flex-col items-center gap-3 text-center"
    >
      <div
        className={`relative h-[74px] w-[74px] overflow-hidden rounded-[1.35rem] border transition md:h-[86px] md:w-[86px] ${
          active
            ? "border-[#2563eb] shadow-[0_0_28px_rgba(37,99,235,0.42)]"
            : "border-white/10"
        }`}
      >
        <Image src={category.image} alt={category.label} fill className="object-cover" sizes="86px" />
        <div className={`absolute inset-0 ${active ? "bg-[#2563eb]/12" : "bg-black/10"}`} />
      </div>
      <span className={`text-sm ${active ? "font-semibold text-white" : "text-white/60"}`}>{category.label}</span>
    </button>
  );
}

function ListingCard({ listing }) {
  return (
    <article className="group">
      <div className="relative aspect-[16/10] overflow-hidden rounded-[1.7rem] bg-[#163562] shadow-[0_12px_28px_rgba(0,0,0,0.22)]">
        <Image
          src={listing.image}
          alt={listing.title}
          fill
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,8,14,0.84),rgba(6,8,14,0.1),rgba(6,8,14,0.2))]" />

        {listing.superhost ? (
          <div className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white backdrop-blur">
            Superhost
          </div>
        ) : null}

        <button
          type="button"
          aria-label="Save listing"
          className="absolute right-4 top-4 grid h-11 w-11 place-items-center rounded-full bg-black/45 text-white/90 backdrop-blur"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78Z" />
          </svg>
        </button>

        <div className="absolute bottom-4 left-4 rounded-full bg-black/65 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
          {listing.type}
        </div>
      </div>

      <div className="mt-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-[1.75rem] font-semibold leading-tight text-white">{listing.title}</h3>
            <p className="mt-1 text-[1.02rem] text-white/45">{listing.location}</p>
          </div>
          <div className="flex items-center gap-1 whitespace-nowrap pt-1 text-sm text-[#ffbf3f]">
            <StarIcon />
            <span className="text-white">{listing.rating}</span>
            <span className="text-white/35">({listing.reviews})</span>
          </div>
        </div>

        <p className="mt-2 text-[1.02rem] text-white/45">
          {listing.guests} guests - {listing.beds} beds
        </p>

        <div className="mt-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-8 w-8 place-items-center rounded-full bg-[#2563eb] text-xs font-bold text-white">
              {listing.hostInitial}
            </div>
            <span className="text-[1.02rem] text-white/45">Hosted by {listing.host}</span>
          </div>
          <p className="text-right text-[1.15rem] font-semibold text-white">
            ${listing.price}
            <span className="ml-1 text-sm font-normal text-white/45">/ night</span>
          </p>
        </div>
      </div>
    </article>
  );
}

function MapPanel({ listings }) {
  return (
    <div className="h-full min-h-[320px] rounded-[1.5rem] border border-white/8 bg-[#0d0f16] p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-lg font-semibold text-white">Map</h2>
        <span className="text-sm text-white/45">{listings.length} places</span>
      </div>

      <div className="relative h-[420px] overflow-hidden rounded-[1.3rem] border border-white/6 bg-[radial-gradient(circle_at_top,#1e3a8a_0%,#111827_36%,#091018_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24%,rgba(255,255,255,0.04)_25%,transparent_26%),linear-gradient(transparent_24%,rgba(255,255,255,0.04)_25%,transparent_26%)] bg-[length:48px_48px]" />
        {listings.map((listing) => (
          <div key={listing.id} className="absolute" style={{ left: listing.x, top: listing.y }}>
            <div className="-translate-x-1/2 -translate-y-1/2">
              <div className="rounded-xl bg-[#2563eb] px-3 py-1 text-sm font-bold text-white shadow-[0_8px_18px_rgba(37,99,235,0.5)]">
                ${listing.price}
              </div>
              <div className="mx-auto h-0 w-0 border-x-[6px] border-t-[8px] border-x-transparent border-t-[#2563eb]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HomeLanding({ locale }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [showMap, setShowMap] = useState(false);

  const filteredListings = useMemo(() => {
    const query = search.trim().toLowerCase();

    return HOME_LISTINGS.filter((listing) => {
      if (activeCategory !== "all" && listing.category !== activeCategory) {
        return false;
      }

      if (!query) {
        return true;
      }

      return (
        listing.title.toLowerCase().includes(query) ||
        listing.location.toLowerCase().includes(query) ||
        listing.type.toLowerCase().includes(query)
      );
    });
  }, [activeCategory, search]);

  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <div className="mx-auto max-w-[1680px] px-3 py-4 md:px-5 lg:px-6">
        <div className="grid gap-5 lg:grid-cols-[92px_minmax(0,1fr)]">
          <Sidebar locale={locale} />

          <section className="min-w-0">
            <div className="flex min-h-[calc(100vh-2rem)] flex-col overflow-hidden rounded-[2rem] border border-white/6 bg-[#09090f]">
              <div className="flex flex-1 gap-0 overflow-hidden">
                <div className="min-w-0 flex-1 overflow-y-auto px-4 pb-8 pt-7 md:px-8 lg:px-10">
                  <div className="mx-auto max-w-5xl">
                    <div className="mb-5 text-center">
                      <h1 className="text-5xl font-black uppercase tracking-[0.06em] text-white md:text-6xl">
                        TEMP STAY
                      </h1>
                    </div>

                    <div className="mb-7 flex flex-wrap items-center justify-center gap-3">
                      <Link
                        href={`/${locale}/signup`}
                        className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-5 py-3 text-lg font-semibold text-white/85 transition hover:bg-white/[0.08]"
                      >
                        <HomeIcon />
                        Become a Host
                      </Link>
                      <button
                        type="button"
                        onClick={() => setShowMap((value) => !value)}
                        className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-lg font-semibold transition ${
                          showMap
                            ? "border-[#2563eb] bg-[#2563eb] text-white shadow-[0_10px_26px_rgba(37,99,235,0.42)]"
                            : "border-white/15 bg-white/[0.05] text-white/85 hover:bg-white/[0.08]"
                        }`}
                      >
                        <MapIcon />
                        {showMap ? "Hide map" : "Show map"}
                      </button>
                    </div>

                    <div className="relative mx-auto mb-7 max-w-[860px]">
                      <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/30">
                        <SearchIcon />
                      </span>
                      <input
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Search destinations..."
                        className="w-full rounded-[1.15rem] border border-white/5 bg-[#100f17] py-4 pl-14 pr-4 text-lg text-white outline-none placeholder:text-white/30"
                      />
                    </div>

                    <div className="mb-8 overflow-x-auto pb-2">
                      <div className="flex min-w-max gap-5 px-1 md:justify-center">
                        {HOME_CATEGORIES.map((category) => (
                          <CategoryBubble
                            key={category.id}
                            category={category}
                            active={activeCategory === category.id}
                            onClick={() => setActiveCategory(category.id)}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className={`${showMap ? "xl:pr-2" : ""}`}>
                    {filteredListings.length ? (
                      <div className="grid gap-9 xl:grid-cols-3">
                        {filteredListings.map((listing) => (
                          <ListingCard key={listing.id} listing={listing} />
                        ))}
                      </div>
                    ) : (
                      <div className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] px-6 py-10 text-center">
                        <p className="text-xl font-semibold text-white">No stays found</p>
                        <p className="mt-2 text-white/45">Try another search or switch the category.</p>
                      </div>
                    )}
                  </div>
                </div>

                {showMap ? (
                  <aside className="hidden w-[390px] flex-shrink-0 border-l border-white/6 bg-[#09090f] p-6 xl:block">
                    <MapPanel listings={filteredListings} />
                  </aside>
                ) : null}
              </div>

              {showMap ? (
                <div className="border-t border-white/6 p-4 xl:hidden">
                  <MapPanel listings={filteredListings} />
                </div>
              ) : null}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
