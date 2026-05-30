"use client";

import { useTransition } from "react";
import { signIn } from "next-auth/react";

function GoogleMark() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
      <path
        d="M21.81 12.23c0-.72-.06-1.25-.19-1.8H12.2v3.56h5.53c-.11.88-.72 2.2-2.08 3.09l-.02.12 3 2.27.2.02c1.84-1.66 2.9-4.1 2.9-7.26Z"
        fill="#4285F4"
      />
      <path
        d="M12.2 22c2.71 0 4.99-.88 6.65-2.39l-3.17-2.41c-.85.58-1.99.99-3.48.99-2.65 0-4.89-1.72-5.69-4.09l-.12.01-3.12 2.36-.04.11A10.05 10.05 0 0 0 12.2 22Z"
        fill="#34A853"
      />
      <path
        d="M6.51 14.1a5.9 5.9 0 0 1-.33-1.87c0-.65.12-1.3.31-1.87l-.01-.13-3.16-2.4-.1.04A9.76 9.76 0 0 0 2.14 12c0 1.46.36 2.84 1.08 4.13l3.29-2.03Z"
        fill="#FBBC05"
      />
      <path
        d="M12.2 5.81c1.88 0 3.15.8 3.87 1.47l2.83-2.71C17.18 3.02 14.91 2 12.2 2a10.05 10.05 0 0 0-8.98 5.42l3.27 2.49c.81-2.37 3.04-4.1 5.71-4.1Z"
        fill="#EA4335"
      />
    </svg>
  );
}

function FacebookMark() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
      <path
        d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11.01 10.13 11.93v-8.43H7.08v-3.5h3.05V9.41c0-3.04 1.79-4.72 4.53-4.72 1.31 0 2.68.24 2.68.24v2.99h-1.51c-1.49 0-1.95.93-1.95 1.88v2.26h3.32l-.53 3.5h-2.79V24C19.61 23.08 24 18.09 24 12.07Z"
        fill="currentColor"
      />
    </svg>
  );
}

const providerConfig = {
  facebook: {
    icon: FacebookMark,
    idleLabel: "Continue with Facebook",
    className:
      "border-[#1877F2] bg-[#1877F2] text-white hover:-translate-y-0.5 hover:bg-[#1669d8] hover:shadow-lg",
  },
  google: {
    icon: GoogleMark,
    idleLabel: "Continue with Google",
    className:
      "border-neutral-200 bg-white text-neutral-900 hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg",
  },
};

export default function SocialLoginButton({
  provider,
  callbackUrl,
  disabled = false,
  disabledLabel,
}) {
  const [isPending, startTransition] = useTransition();
  const config = providerConfig[provider];

  if (!config) {
    throw new Error(`Unsupported social provider: ${provider}`);
  }

  const Icon = config.icon;

  function handleSignIn() {
    if (disabled) {
      return;
    }

    startTransition(async () => {
      await signIn(provider, { callbackUrl });
    });
  }

  let buttonLabel = config.idleLabel;

  if (disabled) {
    buttonLabel = disabledLabel ?? `${config.idleLabel} unavailable`;
  } else if (isPending) {
    buttonLabel = "Redirecting...";
  }

  return (
    <button
      type="button"
      onClick={handleSignIn}
      disabled={disabled || isPending}
      className={`inline-flex w-full items-center justify-center gap-3 rounded-2xl border px-5 py-3 text-sm font-semibold shadow-sm transition disabled:cursor-not-allowed disabled:translate-y-0 disabled:opacity-70 ${config.className}`}
    >
      <Icon />
      {buttonLabel}
    </button>
  );
}
