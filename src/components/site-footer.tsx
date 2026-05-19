import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, whatsappUrl } from "@/lib/brand";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black px-5 py-14 text-cream/72 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <Link href="/" className="font-serif text-3xl text-cream">
            Ofer&apos;s Atelier
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7">
            Fire, smoke, handcrafted technique, and intimate culinary
            hospitality in Chiang Mai.
          </p>
        </div>
        <div className="grid gap-3 text-sm">
          <Link href="/experiences" className="hover:text-copper">
            Experiences
          </Link>
          <Link href="/private-events" className="hover:text-copper">
            Private Events
          </Link>
          <Link href="/consulting" className="hover:text-copper">
            Consulting
          </Link>
          <Link href="/journal" className="hover:text-copper">
            Journal
          </Link>
        </div>
        <address className="grid gap-3 text-sm not-italic">
          <a className="flex gap-3 hover:text-copper" href={`tel:${contact.phone}`}>
            <Phone size={16} aria-hidden /> {contact.phone}
          </a>
          <a className="flex gap-3 hover:text-copper" href={`mailto:${contact.email}`}>
            <Mail size={16} aria-hidden /> {contact.email}
          </a>
          <span className="flex gap-3">
            <MapPin size={16} aria-hidden /> {contact.address}
          </span>
          <a className="flex gap-3 hover:text-copper" href={contact.instagram}>
            <span className="w-4 text-center text-xs font-bold" aria-hidden>
              IG
            </span>
            @ofersatelier
          </a>
          <a href={whatsappUrl} className="mt-2 text-copper hover:text-gold">
            Book via WhatsApp
          </a>
        </address>
      </div>
      <div className="mx-auto mt-12 max-w-7xl text-xs text-cream/42">
        © {new Date().getFullYear()} Ofer&apos;s Atelier. Culinary experiences
        in Chiang Mai.
      </div>
    </footer>
  );
}
