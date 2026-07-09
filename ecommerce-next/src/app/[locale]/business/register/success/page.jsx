import { redirect } from "next/navigation";

export default async function BusinessRegisterSuccessRedirect({ params }) {
  const { locale } = await params;

  redirect(`/${locale}/business/success`);
}
