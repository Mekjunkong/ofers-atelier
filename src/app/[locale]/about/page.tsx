import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { PageHero, SectionHeading, WhatsAppButton } from "@/components/sections";
import { pageMetadata, personSchema } from "@/lib/brand";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.about" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "he" ? "/he/about" : "/about",
  });
}

export default async function AboutPage() {
  const t = await getTranslations("pages.about");
  const tCommon = await getTranslations("common");
  const tBooking = await getTranslations("booking");

  return (
    <>
      <PageHero title={t("heroTitle")} text={t("heroText")} />
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
            <SectionHeading title={t("sectionTitle")} />
            <p className="mt-7 text-lg leading-9 text-cream/72">{t("body1")}</p>
            <p className="mt-5 text-base leading-8 text-cream/64">{t("body2")}</p>
            <div className="mt-8">
              <WhatsAppButton bookingMsg={tBooking("message")}>{t("cta")}</WhatsAppButton>
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
