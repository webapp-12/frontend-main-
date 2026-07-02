"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function FloatingAssistant({ href = "/help" }) {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push(href)}
      className="group fixed bottom-8 right-8 z-50"
      aria-label="Open help"
    >
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl transition duration-300 group-hover:scale-110">
        <Image
          src="/img/assistant/call-center.avif"
          alt="AI assistance"
          className="h-20 w-20 rounded-full object-cover"
          width={80}
          height={80}
          unoptimized
        />
      </div>

      <div className="absolute bottom-28 right-0 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-sm text-white opacity-0 transition group-hover:opacity-100">
        Need help?
      </div>
    </button>
  );
}
