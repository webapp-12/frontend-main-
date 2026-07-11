import Header from "@/components/layout/Header";
import SecondNav from "@/components/ui/SecondNav";
import AccountSidebar from "@/components/ui/myaccount/AccountSidebar";
import AccountDashboard from "@/components/ui/myaccount/AccountDashboard";

export default async function AccountPage({ params }) {
  const { locale } = await params;

  return (
   <main className="min-h-screen bg-[#f3f4f6]">
  <div className="fixed inset-x-0 top-0 z-50">
    <Header locale={locale} />
  </div>

  <div className="pt-[72px]">
    <SecondNav locale={locale} />

    <div className="mx-auto flex max-w-7xl items-start gap-6 px-4 py-6">
      <AccountSidebar locale={locale} />
      <AccountDashboard />
    </div>
  </div>
</main>
  );
}