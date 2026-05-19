import type { Metadata } from "next";
import { ConsultingContent, PageHero } from "@/components/sections";
import { pageMetadata, serviceSchemas } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Restaurant Consulting",
  description:
    "Chef Ofer Aviv offers restaurant consulting in Thailand for menus, smoked meat programs, fire cooking concepts, operations, and guest experience.",
  path: "/consulting",
});

export default function ConsultingPage() {
  return (
    <>
      <PageHero
        title="Consulting"
        text="Restaurant consulting for operators who want sharper culinary identity, better systems, and a memorable guest experience."
      />
      <ConsultingContent />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchemas.find((service) => service.name === "Chef Consulting"),
          ),
        }}
      />
    </>
  );
}
