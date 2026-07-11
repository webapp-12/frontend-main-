"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

import HelpTopicCard from "@/components/ui/HelpTopicCard";

function CloseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}

export default function FloatingAssistant({ locale = "en" }) {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const helpActions = [
    {
      title: "Manage your account",
      description: "Open account details, profile settings, and account tools.",
      actionLabel: "Account",
      href: `/${locale}/account`,
    },
    {
      title: "Browse gaming deals",
      description: "Jump straight to the gaming items collection page.",
      actionLabel: "Gaming",
      href: `/${locale}/Items?category=gaming`,
    },
    {
      title: "Return to home",
      description: "Go back to the main storefront and featured sections.",
      actionLabel: "Home",
      href: `/${locale}/home`,
    },
  ];

  const handleNavigate = (href) => {
    setIsOpen(false);
    router.push(href);
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {isOpen ? (
        <div className="mb-4 w-[320px] rounded-[28px] border border-slate-200 bg-white p-4 shadow-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                Support
              </p>
              <h2 className="mt-2 text-xl font-bold text-slate-900">
                How can I help?
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Pick a quick action to move faster through the storefront.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              suppressHydrationWarning
              className="rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close assistant"
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-4 space-y-3">
            {helpActions.map((action) => (
              <HelpTopicCard
                key={action.title}
                title={action.title}
                description={action.description}
                actionLabel={action.actionLabel}
                onClick={() => handleNavigate(action.href)}
              />
            ))}
          </div>
        </div>
      ) : null}

      <button
        type="button"
        onClick={() => setIsOpen((current) => !current)}
        suppressHydrationWarning
        className="group relative"
        aria-expanded={isOpen}
        aria-label="Open help assistant"
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

        {!isOpen ? (
          <div className="absolute bottom-28 right-0 whitespace-nowrap rounded-lg bg-black px-3 py-2 text-sm text-white opacity-0 transition group-hover:opacity-100">
            Need help?
          </div>
        ) : null}
      </button>
    </div>
  );
}
