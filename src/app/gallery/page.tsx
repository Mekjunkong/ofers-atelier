import type { Metadata } from "next";
import Image from "next/image";
import { GalleryStrip, PageHero, SectionHeading } from "@/components/sections";
import { gallery, pageMetadata } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Gallery",
  description:
    "View Chef Ofer Aviv, smoked meat, fire cooking, workshops, food closeups, and private feast imagery from Ofer’s Atelier in Chiang Mai.",
  path: "/gallery",
});

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        text="Real images from Chef Ofer’s kitchen, table, workshops, smoked meat, and fire-led culinary experiences."
      />
      <section className="bg-obsidian px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Atelier Moments"
            text="Replace or add final approved photography in public/images/gallery as more images are collected from Wix, Facebook, and Instagram."
          />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item) => (
              <figure
                key={item.src}
                className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-white/10"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-5 font-serif text-2xl text-cream">
                  {item.label}
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
