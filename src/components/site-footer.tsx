import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, whatsappUrl } from "@/lib/brand";

export async function SiteFooter() {
  const t = await getTranslations("footer");
  const tNav = await getTranslations("nav");

  return (
    <footer className="bg-olive px-5 pt-16 pb-10 text-cream/80 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr_1fr]">
          <div>
            <p className="max-w-md text-sm leading-7 text-cream/70">{t("tagline")}</p>
            <a href={whatsappUrl} className="mt-5 inline-block text-sm font-semibold text-cream hover:text-cream/70 underline underline-offset-4">
              {t("bookViaWhatsApp")}
            </a>
          </div>
          <div className="grid gap-3 text-sm">
            <Link href="/experiences" className="hover:text-cream">
              {tNav("experiences")}
            </Link>
            <Link href="/private-events" className="hover:text-cream">
              {tNav("privateEvents")}
            </Link>
            <Link href="/consulting" className="hover:text-cream">
              {tNav("consulting")}
            </Link>
            <Link href="/gallery" className="hover:text-cream">
              {tNav("gallery")}
            </Link>
            <Link href="/journal" className="hover:text-cream">
              {tNav("journal")}
            </Link>
            <Link href="/contact" className="hover:text-cream">
              {tNav("contact")}
            </Link>
          </div>
          <address className="grid gap-3 text-sm not-italic">
            <a className="flex gap-3 hover:text-cream" href={`tel:${contact.phone}`}>
              <Phone size={16} aria-hidden /> {contact.phone}
            </a>
            <a className="flex gap-3 hover:text-cream" href={`mailto:${contact.email}`}>
              <Mail size={16} aria-hidden /> {contact.email}
            </a>
            <span className="flex gap-3">
              <MapPin size={16} className="shrink-0 mt-0.5" aria-hidden /> {contact.address}
            </span>
            <a className="flex gap-3 hover:text-cream" href={contact.instagram}>
              <span className="w-4 text-center text-xs font-bold" aria-hidden>IG</span>
              @ofersatelier
            </a>
          </address>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-10">
          <Link
            href="/"
            className="block font-serif text-[clamp(3.5rem,10vw,8rem)] leading-none text-cream/90 hover:text-cream transition"
            aria-label="Ofer's Atelier home"
          >
            Ofer&apos;s Atelier
          </Link>
        </div>

        <div className="mt-8 text-xs text-cream/40">
          © {new Date().getFullYear()} {t("copyright")}
        </div>
      </div>
    </footer>
  );
}
