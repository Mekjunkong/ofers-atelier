"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
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

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
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
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrl}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[8px] border border-copper/50 bg-copper px-4 text-sm font-semibold text-obsidian shadow-[0_12px_34px_rgba(176,111,56,0.22)] transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold/70"
            >
              <MessageCircle size={17} aria-hidden />
              <span className="hidden sm:inline">WhatsApp Ofer</span>
              <span className="sm:hidden">Book</span>
            </a>
            <button
              onClick={() => setOpen((v) => !v)}
              className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-white/15 text-cream transition hover:border-copper/40 hover:text-copper focus:outline-none focus:ring-2 focus:ring-gold/70 lg:hidden"
              aria-label={open ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-obsidian/70 backdrop-blur-sm lg:hidden"
              aria-hidden
              onClick={() => setOpen(false)}
            />
            <motion.nav
              id="mobile-nav"
              key="mobile-drawer"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.32, ease: EASE }}
              className="fixed inset-y-0 right-0 z-50 flex w-72 flex-col border-l border-white/10 bg-obsidian px-6 pb-8 pt-24 lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="grid gap-1">
                {navItems.map(([label, href]) => {
                  const active = pathname === href || pathname.startsWith(href + "/");
                  return (
                    <Link
                      key={href}
                      href={href}
                      className={`border-b border-white/5 py-3.5 text-base transition ${
                        active
                          ? "font-medium text-copper"
                          : "text-cream/78 hover:text-copper"
                      }`}
                      aria-current={active ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  );
                })}
              </div>
              <div className="mt-auto border-t border-white/10 pt-6">
                <a
                  href={whatsappUrl}
                  className="flex h-12 items-center justify-center gap-2 rounded-[8px] bg-copper text-sm font-semibold text-obsidian shadow-[0_12px_34px_rgba(176,111,56,0.22)] transition hover:bg-gold"
                >
                  <MessageCircle size={17} aria-hidden />
                  WhatsApp Ofer
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
