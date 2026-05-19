import type { Metadata } from "next";
import { ContactSection, FAQSection, PageHero } from "@/components/sections";
import { localBusinessSchema, pageMetadata } from "@/lib/brand";

export const metadata: Metadata = pageMetadata({
  title: "Contact and Booking",
  description:
    "Contact Ofer’s Atelier in Chiang Mai by WhatsApp, phone, email, Instagram, or Facebook to book a culinary experience, feast, workshop, or consulting session.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact / Booking"
        text="Send a WhatsApp message to request available dates, private group options, consulting details, or the next chef-led workshop."
      />
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
