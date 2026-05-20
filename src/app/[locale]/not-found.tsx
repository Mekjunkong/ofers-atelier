import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { pageMetadata } from "@/lib/brand";

export const metadata = pageMetadata({
  title: "Page Not Found — Ofer's Atelier",
  description: "The page you're looking for doesn't exist.",
  path: "/404",
});

export default async function NotFound() {
  const t = await getTranslations("pages.notFound");

  return (
    <main className="flex min-h-dvh flex-col items-center justify-center bg-obsidian px-5 text-center">
      <p className="text-xs uppercase tracking-[0.22em] text-copper">404</p>
      <h1 className="mt-6 font-serif text-[clamp(3rem,8vw,6rem)] leading-[0.9] text-cream">
        {t("title")}
      </h1>
      <p className="mt-6 max-w-sm text-sm leading-7 text-cream/64">{t("text")}</p>
      <Link
        href="/"
        className="mt-10 inline-flex h-12 items-center justify-center rounded-[8px] bg-copper px-6 text-sm font-semibold text-obsidian shadow-[0_16px_40px_rgba(176,111,56,0.22)] transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold/70"
      >
        {t("backHome")}
      </Link>
    </main>
  );
}
