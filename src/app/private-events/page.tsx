import type { Metadata } from "next";
import { PageHero, PrivateEventsContent } from "@/components/sections";
import { pageMetadata } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Private Events",
  description:
    "Book private chef-table dinners, fire cooking feasts, and intimate culinary gatherings with Chef Ofer Aviv in Chiang Mai.",
  path: "/private-events",
});

export default function PrivateEventsPage() {
  return (
    <>
      <PageHero
        title="Private Events"
        text="Bespoke chef-led gatherings for guests who want a private table, live fire, smoked meat, and a meal built around connection."
      />
      <PrivateEventsContent />
    </>
  );
}
