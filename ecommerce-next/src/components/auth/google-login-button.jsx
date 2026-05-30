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

export default function GoogleLoginButton({ callbackUrl }) {
  const [isPending, startTransition] = useTransition();

  function handleGoogleSignIn() {
    startTransition(async () => {
      await signIn("google", { callbackUrl });
    });
  }

  return (
    <button
      type="button"
      onClick={handleGoogleSignIn}
      disabled={isPending}
      className="inline-flex w-full items-center justify-center gap-3 rounded-2xl border border-neutral-200 bg-white px-5 py-3 text-sm font-semibold text-neutral-900 shadow-sm transition hover:-translate-y-0.5 hover:border-neutral-300 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
    >
      <GoogleMark />
      {isPending ? "Redirecting..." : "Continue with Google"}
    </button>
  );
}
