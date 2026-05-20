import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GalleryStrip, PageHero, SectionHeading } from "@/components/sections";
import { gallery, pageMetadata } from "@/lib/brand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.gallery" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "he" ? "/he/gallery" : "/gallery",
  });
}

export default async function GalleryPage() {
  const t = await getTranslations("pages.gallery");
  const tGallery = await getTranslations("gallery");
  const galleryItems = tGallery.raw("items") as Array<{ alt: string; label: string }>;

  return (
    <>
      <PageHero title={t("heroTitle")} text={t("heroText")} />
      <section className="bg-obsidian px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title={t("sectionTitle")} text={t("sectionText")} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <figure
                key={item.src}
                className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-white/10"
              >
                <Image
                  src={item.src}
                  alt={galleryItems[index]?.alt ?? item.src}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 font-serif text-2xl text-cream">
                  {galleryItems[index]?.label ?? item.src}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
      <GalleryStrip />
    </>
  );
}
