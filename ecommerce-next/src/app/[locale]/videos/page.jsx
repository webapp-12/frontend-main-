import VideosPage from "../../../components/ui/videos-page";
import { getVideosCatalog } from "../../../services/videos";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return {
    title: `Videos | ${locale.toUpperCase()} | Ecommerce Next`,
    description: `Video section inspired by the legacy Strug videos page for the ${locale.toUpperCase()} locale.`,
  };
}

export default async function VideosRoutePage({ params }) {
  const { locale } = await params;
  const videos = await getVideosCatalog();

  return <VideosPage locale={locale} videos={videos} />;
}
