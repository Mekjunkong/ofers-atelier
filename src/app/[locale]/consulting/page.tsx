import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { ConsultingContent, PageHero } from "@/components/sections";
import { pageMetadata, serviceSchemas } from "@/lib/brand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.consulting" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "he" ? "/he/consulting" : "/consulting",
  });
}

export default async function ConsultingPage() {
  const t = await getTranslations("pages.consulting");

  return (
    <>
      <PageHero title={t("heroTitle")} text={t("heroText")} />
      <ConsultingContent />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemas.find((s) => s.name === "Chef Consulting"),
          ),
        }}
      />
    </>
  );
}
