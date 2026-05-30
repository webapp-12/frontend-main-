export default async function HomePage({ params }) {
  const { locale } = await params;

  return (
    <main>
      <h1>Home</h1>
      <p>Current locale: {locale}</p>
    </main>
  );
}
