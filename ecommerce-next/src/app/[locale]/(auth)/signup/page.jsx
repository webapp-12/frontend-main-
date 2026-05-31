import Link from "next/link";

export default async function SignupPage({ params }) {
  const { locale } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,#d59c5f_0%,#8f4e1b_45%,#4e2509_100%)] px-6 py-12">
      <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/10 p-10 text-center shadow-lg backdrop-blur-xl">
        <h3 className="mb-6 text-2xl font-bold text-white">Sign up</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            suppressHydrationWarning
            className="w-full rounded-2xl border border-transparent bg-transparent px-5 py-3 text-white shadow-md outline-none hover:border-gray-400 placeholder:text-white/80"
          />

          <input
            type="email"
            placeholder="Email"
            suppressHydrationWarning
            className="w-full rounded-2xl border border-transparent bg-transparent px-5 py-3 text-white shadow-md outline-none hover:border-gray-400 placeholder:text-white/80"
          />

          <input
            type="password"
            placeholder="Create Password"
            suppressHydrationWarning
            className="w-full rounded-full border border-transparent bg-transparent px-5 py-3 text-white shadow-md outline-none hover:border-gray-400 placeholder:text-white/80"
          />

          <input
            type="password"
            placeholder="Re-Enter Password"
            suppressHydrationWarning
            className="w-full rounded-full border border-transparent bg-transparent px-5 py-3 text-white shadow-md outline-none hover:border-gray-400 placeholder:text-white/80"
          />

          <button
            suppressHydrationWarning
            className="w-full rounded-full bg-white py-3 font-bold transition hover:shadow-lg"
          >
            SIGN UP
          </button>

          <p className="text-sm text-white">
            Already have an account?{" "}
            <Link href={`/${locale}/login`} className="underline">
              Log In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
