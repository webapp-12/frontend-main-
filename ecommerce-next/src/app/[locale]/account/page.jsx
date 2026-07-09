import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import AccountSidebar from "@/components/ui/AccountSidebar";
import AccountDashboard from "@/components/ui/AccountDashboard";

export default async function AccountPage({ params }) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#f2f3f5]">
      <Header locale={locale} />
      <SecondNav locale={locale} />

      <div className="mx-auto flex max-w-7xl">
        <AccountSidebar locale={locale} />
        <AccountDashboard />
      </div>
    </main>
  );
}
