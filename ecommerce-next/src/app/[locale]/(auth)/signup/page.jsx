export default async function SignupPage({ params }) {
  const { locale } = await params;

  return (
    <div
      className="flex min-h-screen items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/signup-bg.jpg')" }}
    >
      <div className="w-full max-w-sm rounded-3xl p-10 text-center shadow-lg backdrop-blur-xl">
        <h3 className="mb-6 text-2xl font-bold text-white">Sign up</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            className="w-full rounded-2xl border border-transparent bg-transparent px-5 py-3 text-white shadow-md outline-none hover:border-gray-400 placeholder:text-white/80"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-2xl border border-transparent bg-transparent px-5 py-3 text-white shadow-md outline-none hover:border-gray-400 placeholder:text-white/80"
          />

          <input
            type="password"
            placeholder="Create Password"
            className="w-full rounded-full border border-transparent bg-transparent px-5 py-3 text-white shadow-md outline-none hover:border-gray-400 placeholder:text-white/80"
          />

          <input
            type="password"
            placeholder="Re-Enter Password"
            className="w-full rounded-full border border-transparent bg-transparent px-5 py-3 text-white shadow-md outline-none hover:border-gray-400 placeholder:text-white/80"
          />

          <button className="w-full rounded-full bg-white py-3 font-bold transition hover:shadow-lg">
            SIGN UP
          </button>

          <p className="text-sm text-white">
            Already have an account?{" "}
            <a href={`/${locale}/login`} className="underline">
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
