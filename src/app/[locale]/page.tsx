import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import {
  AboutPreview,
  ContactSection,
  FAQSection,
  FeaturedExperiences,
  FieldNotes,
  GalleryStrip,
  Hero,
  IntroBand,
  Testimonials,
} from "@/components/sections";
import {
  localBusinessSchema,
  pageMetadata,
  personSchema,
  serviceSchemas,
} from "@/lib/brand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.home" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "he" ? "/he" : "",
  });
}

export default function Home() {
  return (
    <>
      <Hero />
      <IntroBand />
      <FieldNotes />
      <FeaturedExperiences />
      <AboutPreview />
      <GalleryStrip />
      <Testimonials />
      <FAQSection />
      <ContactSection />
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
