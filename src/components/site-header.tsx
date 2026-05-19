"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/brand";

const navItems = [
  ["Experiences", "/experiences"],
  ["About", "/about"],
  ["Gallery", "/gallery"],
  ["Private Events", "/private-events"],
  ["Consulting", "/consulting"],
  ["Journal", "/journal"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-obsidian/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-2xl text-cream transition hover:text-copper"
          aria-label="Ofer's Atelier home"
        >
          Ofer&apos;s Atelier
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-cream/78 lg:flex">
          {navItems.map(([label, href]) => {
            const active = pathname === href || pathname.startsWith(href + "/");
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "font-medium text-copper underline decoration-copper/50 underline-offset-[6px] transition"
                    : "transition hover:text-copper"
                }
                aria-current={active ? "page" : undefined}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <a
          href={whatsappUrl}
          className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-copper/50 bg-copper px-4 text-sm font-semibold text-obsidian shadow-[0_12px_34px_rgba(176,111,56,0.22)] transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold/70"
        >
          <MessageCircle size={17} aria-hidden />
          <span className="hidden sm:inline">WhatsApp Ofer</span>
          <span className="sm:hidden">Book</span>
        </a>
      </div>
    </header>
  );
}
