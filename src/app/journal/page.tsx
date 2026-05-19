import type { Metadata } from "next";
import { JournalPreview, PageHero } from "@/components/sections";
import { pageMetadata } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Journal",
  description:
    "Read Ofer’s Atelier notes on smoked meat, fire cooking, preserving techniques, hospitality, chef-table experiences, and restaurant craft.",
  path: "/journal",
});

export default function JournalPage() {
  return (
    <>
      <PageHero
        title="Journal"
        text="A future home for chef notes, techniques, menu stories, and reflections from the atelier."
      />
      <JournalPreview />
    </>
  );
}
