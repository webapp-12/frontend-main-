import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import FeaturePlaceholder from "@/components/ui/FeaturePlaceholder";

function formatSectionTitle(section) {
  return section
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export default async function AccountSectionPage({ params }) {
  const { locale, section } = await params;
  const title = formatSectionTitle(section);

  return (
    <main className="min-h-screen bg-[#f6f7fb]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <div className="mx-auto max-w-7xl px-6 py-10">
        <FeaturePlaceholder
          title={title}
          description={`This ${title.toLowerCase()} page is now connected so account, dashboard, and my-ads links all resolve correctly.`}
          primaryHref={`/${locale}/account`}
          primaryLabel="Back to account"
          secondaryHref={`/${locale}/business`}
          secondaryLabel="Open business hub"
        />
      </div>
    </main>
  );
}
