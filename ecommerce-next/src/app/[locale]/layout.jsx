import { notFound } from "next/navigation";

import FloatingAssistant from "@/components/ui/FloatingAssistant";

import { isSupportedLocale } from "../../lib/i18n";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {children}
      <FloatingAssistant href={`/${locale}/account`} />
    </div>
  );
}
