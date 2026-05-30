export default async function LoginPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-3xl border border-neutral-200 p-8 text-center shadow-sm">
        <h1 className="text-2xl font-semibold">Login page</h1>
        <p className="mt-3 text-sm text-neutral-600">
          The login form has not been built yet for the <strong>{locale}</strong>{" "}
          locale.
        </p>
        <a href={`/${locale}/signup`} className="mt-6 inline-block underline">
          Go to sign up
        </a>
      </div>
    </main>
  );
}
