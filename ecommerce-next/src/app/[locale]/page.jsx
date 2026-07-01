import { redirect } from "next/navigation";

import { isSupportedLocale } from "../../lib/i18n";

export default async function LocalePage({ params }) {
  const { locale } = await params;

  if (!isSupportedLocale(locale)) {
    redirect("/en/home");
  }

  redirect(`/${locale}/home`);
}
