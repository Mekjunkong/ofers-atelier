import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactSection, FAQSection, PageHero } from "@/components/sections";
import { localBusinessSchema, pageMetadata } from "@/lib/brand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.contact" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "he" ? "/he/contact" : "/contact",
  });
}

export default async function ContactPage() {
  const t = await getTranslations("pages.contact");

  return (
    <>
      <PageHero title={t("heroTitle")} text={t("heroText")} />
      <ContactSection />
      <FAQSection />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
