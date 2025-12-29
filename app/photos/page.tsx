import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PhotoGallery from "@/components/PhotoGallery";
import { getSEOTags } from "@/libs/seo";
import config from "@/config";
import { createClient } from "@/libs/supabase/server";

export const metadata = getSEOTags({
  title: `Photos | ${config.appName}`,
  description: "Photo gallery showcasing photography work by Home Ruler Productions.",
  canonicalUrlRelative: "/photos",
});

export const revalidate = 60; // Revalidate every 60 seconds

async function getPhotos() {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("photos")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error("Error fetching photos:", error);
    return [];
  }
}

export default async function PhotosPage() {
  const photos = await getPhotos();

  return (
    <>
      <Header />
      <main className="min-h-[70vh] px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
            Photos
          </h1>
          <PhotoGallery initialPhotos={photos} />
        </div>
      </main>
      <Footer />
    </>
  );
}
