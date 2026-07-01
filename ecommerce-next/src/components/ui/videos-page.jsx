"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";

import { VIDEO_CATEGORIES, VIDEO_FILTERS } from "../../services/videos";

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

function VideoCard({ video, large = false }) {
  return (
    <article className="group">
      <div
        className={`relative overflow-hidden rounded-3xl border border-white/8 bg-gradient-to-br ${video.accent} ${large ? "aspect-[16/10]" : "aspect-video"}`}
      >
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover opacity-70 transition duration-300 group-hover:scale-[1.03] group-hover:opacity-90"
          sizes={large ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(6,8,16,0.9),rgba(6,8,16,0.1),rgba(6,8,16,0.2))]" />
        {large ? (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="8,5 19,12 8,19" />
              </svg>
            </div>
          </div>
        ) : null}
        <div className="absolute bottom-4 right-4 rounded-xl bg-black/70 px-3 py-1 text-sm font-semibold text-white">
          {video.duration}
        </div>
      </div>

      <div className="mt-4 flex gap-3">
        <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white text-[10px] font-black text-[#d42d46]">
          STRUG
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-lg font-semibold text-white">
            {video.title}
          </h3>
          <p className="text-sm text-white/65">{video.channel}</p>
          <p className="text-sm text-white/45">
            {video.views} · {video.ago}
          </p>
        </div>
      </div>
    </article>
  );
}

export default function VideosPage({ locale, videos }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredVideos = useMemo(() => {
    const query = search.trim().toLowerCase();

    let next = videos.filter((video) => {
      if (activeCategory !== "all" && video.category !== activeCategory) {
        return false;
      }

      if (activeFilter === "shorts" && !video.isShort) {
        return false;
      }

      if (activeFilter !== "all" && activeFilter !== "shorts" && !video.filterTags.includes(activeFilter)) {
        return false;
      }

      if (!query) {
        return true;
      }

      return (
        video.title.toLowerCase().includes(query) ||
        video.channel.toLowerCase().includes(query) ||
        video.category.toLowerCase().includes(query)
      );
    });

    if (activeFilter === "mix") {
      next = [...next].sort((left, right) => left.title.localeCompare(right.title));
    }

    return next;
  }, [activeCategory, activeFilter, search, videos]);

  const featuredVideo = filteredVideos.find((video) => video.featured) ?? filteredVideos[0] ?? null;
  const remainingVideos = featuredVideo
    ? filteredVideos.filter((video) => video.id !== featuredVideo.id)
    : filteredVideos;

  return (
    <main className="min-h-screen bg-[#09090f] text-white">
      <div className="mx-auto max-w-[1500px] px-4 py-6 md:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[96px_minmax(0,1fr)]">
          <aside className="hidden rounded-[2rem] border border-white/8 bg-white/[0.03] p-4 lg:block">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-[#11111a] text-[#d92d48]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M4 20L20 4" />
                <path d="M4 4h16v16" />
              </svg>
            </div>
            <nav className="space-y-3 text-center text-xs text-white/55">
              {["Rideshare", "Shop", "Food", "Feed", "Videos", "Town Hall", "Messages", "Work"].map((item) => (
                <div
                  key={item}
                  className={`rounded-2xl px-2 py-3 ${item === "Videos" ? "bg-[#4a1fd5]/25 text-[#b388ff]" : "bg-transparent"}`}
                >
                  {item}
                </div>
              ))}
            </nav>
          </aside>

          <section className="min-w-0">
            <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="text-center md:text-left">
                <p className="text-sm uppercase tracking-[0.35em] text-white/40">
                  Creator Media
                </p>
                <h1 className="mt-2 text-5xl font-black tracking-tight md:text-6xl">
                  VIDEOS
                </h1>
              </div>

              <div className="flex items-center justify-center gap-3 md:justify-end">
                <Link
                  href={`/${locale}/login`}
                  className="rounded-2xl border border-[#2563eb]/35 bg-[#0f1730] px-5 py-3 text-sm font-semibold text-[#60a5fa] transition hover:border-[#60a5fa] hover:bg-[#101d3d]"
                >
                  Upload
                </Link>
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/60">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 20V10" />
                    <path d="M10 20V4" />
                    <path d="M16 20v-8" />
                    <path d="M22 20V8" />
                  </svg>
                </div>
                <div className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/[0.04] text-white/60">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16v16H4z" />
                    <path d="M9 4v16" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="mx-auto max-w-5xl">
              <div className="relative mb-7">
                <span className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-white/35">
                  <SearchIcon />
                </span>
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search videos..."
                  className="w-full rounded-2xl border border-white/5 bg-[#111018] py-4 pl-14 pr-4 text-lg text-white outline-none ring-0 placeholder:text-white/30"
                />
              </div>

              <div className="mb-8 flex flex-wrap items-start justify-center gap-4">
                {VIDEO_CATEGORIES.map((category) => {
                  const active = activeCategory === category.id;

                  return (
                    <button
                      key={category.id}
                      type="button"
                      onClick={() => setActiveCategory(category.id)}
                      className="flex w-[78px] flex-col items-center gap-2 text-center"
                    >
                      <div
                        className={`relative h-[78px] w-[78px] overflow-hidden rounded-2xl border transition ${active ? "border-[#2563eb] shadow-[0_0_0_2px_rgba(37,99,235,0.25)]" : "border-white/10"}`}
                      >
                        <Image
                          src={category.image}
                          alt={category.label}
                          fill
                          className="object-cover"
                          sizes="78px"
                        />
                        <div className={`absolute inset-0 ${active ? "bg-[#2563eb]/10" : "bg-black/20"}`} />
                      </div>
                      <span className={`text-sm ${active ? "font-semibold text-white" : "text-white/60"}`}>
                        {category.label}
                      </span>
                    </button>
                  );
                })}
              </div>

              <div className="mb-10 flex flex-wrap justify-center gap-3">
                {VIDEO_FILTERS.map((filter) => {
                  const active = activeFilter === filter.id;

                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => setActiveFilter(filter.id)}
                      className={`rounded-full border px-6 py-3 text-lg font-semibold transition ${active ? "border-[#2563eb] bg-[#0e1b3a] text-[#76a9ff]" : "border-white/12 bg-transparent text-white/45 hover:text-white/70"}`}
                    >
                      {filter.label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-10">
              <h2 className="mb-6 text-3xl font-black tracking-[0.12em] text-white">
                TRENDING NOW
              </h2>

              {filteredVideos.length === 0 ? (
                <div className="rounded-[2rem] border border-white/8 bg-white/[0.03] p-10 text-center text-white/55">
                  No videos match this search yet.
                </div>
              ) : (
                <div className="grid gap-8 xl:grid-cols-2">
                  {featuredVideo ? <VideoCard video={featuredVideo} large /> : null}
                  <div className="grid gap-8 sm:grid-cols-2">
                    {remainingVideos.map((video) => (
                      <VideoCard key={video.id} video={video} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
