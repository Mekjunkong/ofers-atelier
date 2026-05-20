import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ContactSection, ExperiencesGrid, PageHero } from "@/components/sections";
import { pageMetadata, serviceSchemas } from "@/lib/brand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.experiences" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "he" ? "/he/experiences" : "/experiences",
  });
}

export default async function ExperiencesPage() {
  const t = await getTranslations("pages.experiences");

  return (
    <>
      <PageHero title={t("heroTitle")} text={t("heroText")} />
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
