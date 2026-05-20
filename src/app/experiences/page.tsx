import type { Metadata } from "next";
import { ContactSection, ExperiencesGrid, PageHero } from "@/components/sections";
import { pageMetadata, serviceSchemas } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Experiences",
  description:
    "Explore Ofer’s Atelier experiences in Chiang Mai, including fire cooking, preserving workshops, private feasts, smoked pork ribs, and chef consulting.",
  path: "/experiences",
});

export default function ExperiencesPage() {
  return (
    <>
      <PageHero
        title="Experiences"
        text="Chef-led culinary gatherings where smoke, fire, preserving, and table hospitality become a memorable Chiang Mai experience."
      />
      <section className="bg-obsidian px-5 py-24 sm:px-8">
        <div className="mx-auto max-w-7xl">
          <ExperiencesGrid />
        </div>
      </section>
      <ContactSection />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchemas) }}
      />
    </>
  );
}
