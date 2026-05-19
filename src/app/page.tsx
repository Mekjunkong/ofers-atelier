import type { Metadata } from "next";
import {
  AboutPreview,
  ContactSection,
  FAQSection,
  FeaturedExperiences,
  GalleryStrip,
  Hero,
  IntroBand,
  JournalPreview,
  Testimonials,
} from "@/components/sections";
import {
  localBusinessSchema,
  pageMetadata,
  personSchema,
  serviceSchemas,
} from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Ofer’s Atelier | Luxury Fire, Smoke & Culinary Experiences in Chiang Mai",
  description:
    "Discover Ofer’s Atelier, a premium chef-led culinary experience in Chiang Mai offering smoked meat, sausage making, fire cooking, private feasts, and restaurant consulting by Chef Ofer Aviv.",
});

export default function Home() {
  return (
    <>
      <Hero />
      <IntroBand />
      <FeaturedExperiences />
      <AboutPreview />
      <GalleryStrip />
      <Testimonials />
      <FAQSection />
      <ContactSection />
      <JournalPreview />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            localBusinessSchema,
            personSchema,
            ...serviceSchemas,
          ]),
        }}
      />
    </>
  );
}
