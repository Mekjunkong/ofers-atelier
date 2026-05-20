import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { PageHero, PrivateEventsContent } from "@/components/sections";
import { pageMetadata } from "@/lib/brand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.privateEvents" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "he" ? "/he/private-events" : "/private-events",
  });
}

export default async function PrivateEventsPage() {
  const t = await getTranslations("pages.privateEvents");

  return (
    <>
      <PageHero title={t("heroTitle")} text={t("heroText")} />
      <PrivateEventsContent />
    </>
  );
}
