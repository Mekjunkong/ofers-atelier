import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, SectionHeading, WhatsAppButton } from "@/components/sections";
import { pageMetadata, personSchema } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "About Chef Ofer Aviv",
  description:
    "Meet Chef Ofer Aviv, the chef behind Ofer’s Atelier in Chiang Mai, specializing in smoked meat, fire cooking, restaurant consulting, and global fusion cuisine.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Chef Ofer"
        text="A chef, host, and culinary consultant with around 15 years of experience shaping memorable food around fire, smoke, and conversation."
      />
      <section className="bg-obsidian px-5 py-24 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[8px] border border-white/10">
            <Image
              src="/images/chef-ofer-real.jpg"
              alt="Chef Ofer Aviv with smoked meat"
              width={1400}
              height={950}
              className="aspect-[4/5] object-cover object-[54%_42%] lg:aspect-[5/4]"
              priority
            />
          </div>
          <div>
            <SectionHeading title="Craft, hospitality, and the pleasure of gathering" />
            <p className="mt-7 text-lg leading-9 text-cream/72">
              Ofer Aviv is a chef with around 15 years of experience across the
              culinary field. His specialties include smoked meat, restaurant
              consulting, global fusion cuisine, and food experiences that bring
              guests close to the process.
            </p>
            <p className="mt-5 text-base leading-8 text-cream/64">
              At Ofer&apos;s Atelier, dining is treated as an act of hosting:
              fire becomes atmosphere, smoke becomes memory, and the table
              becomes a place for stories, technique, generosity, and human
              connection.
            </p>
            <div className="mt-8">
              <WhatsAppButton>Book with Ofer</WhatsAppButton>
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
