import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { JournalPreview, PageHero } from "@/components/sections";
import { pageMetadata } from "@/lib/brand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.journal" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "he" ? "/he/journal" : "/journal",
  });
}

export default async function JournalPage() {
  const t = await getTranslations("pages.journal");

  return (
    <>
      <PageHero title={t("heroTitle")} text={t("heroText")} />
      <JournalPreview />
    </>
  );
}
