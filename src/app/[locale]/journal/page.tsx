import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { pageMetadata } from "@/lib/brand";
import { getAllPosts, getLatestPost } from "@/content/journal";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pages.journal" });
  return pageMetadata({
    title: t("metaTitle"),
    description: t("metaDescription"),
    path: locale === "he" ? "/he/journal" : "/journal",
  });
}

export default async function JournalPage() {
  const latest = getLatestPost();
  const archive = getAllPosts().slice(1);

  return (
    <main className="bg-[#F7F2EA] pt-32 pb-32 min-h-screen">
      <div className="px-5 sm:px-8 mx-auto max-w-3xl">

        {/* Page header */}
        <header className="mb-14">
          <p className="text-[10px] uppercase tracking-[0.28em] text-[#9C8E7E] mb-5">
            Ofer&apos;s Atelier — Chiang Mai
          </p>
          <h1 className="font-serif text-[clamp(2.4rem,6vw,3.8rem)] leading-[1.1] text-[#2C2419]">
            Field Notes
          </h1>
          <p className="mt-5 text-[0.93rem] leading-[1.95] text-[#5A4F42] max-w-md">
            Small real stories from the kitchen, the market, the fire, and the everyday life of the atelier. One at a time.
          </p>
        </header>

        <hr className="border-t border-[#DDD5C8] mb-16" />

        {/* Latest post — featured, full width */}
        <article className="mb-20">
          <div className="relative w-full aspect-[3/2] overflow-hidden mb-9">
            <Image
              src={latest.image}
              alt={latest.imageAlt}
              fill
              priority
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-baseline justify-between mb-4">
            <span className="text-[10px] uppercase tracking-[0.24em] text-[#B06F38]">
              {latest.category}
            </span>
            <time className="text-[10px] tracking-wide text-[#9C8E7E]" dateTime={latest.dateISO}>
              {latest.date}
            </time>
          </div>

          <h2 className="font-serif text-[clamp(1.7rem,4vw,2.5rem)] leading-[1.28] text-[#2C2419] mb-7 max-w-xl">
            {latest.title}
          </h2>

          <p className="text-[1rem] leading-[2.0] text-[#4A3F32] tracking-[0.006em]">
            {latest.body}
          </p>
        </article>

        {/* Archive */}
        {archive.length > 0 && (
          <>
            <hr className="border-t border-[#DDD5C8] mb-14" />
            <p className="text-[10px] uppercase tracking-[0.26em] text-[#9C8E7E] mb-12">
              Earlier notes
            </p>
            <div className="grid gap-14 sm:grid-cols-2">
              {archive.map((post) => (
                <article key={post.slug} className="group">
                  <div className="relative w-full aspect-[3/2] overflow-hidden mb-5">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      sizes="(min-width: 640px) 340px, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-[9px] uppercase tracking-[0.24em] text-[#B06F38]">
                      {post.category}
                    </span>
                    <time className="text-[9px] text-[#9C8E7E]" dateTime={post.dateISO}>
                      {post.date}
                    </time>
                  </div>

                  <h3 className="font-serif text-[1.2rem] leading-[1.4] text-[#2C2419] mb-3">
                    {post.title}
                  </h3>

                  <p className="text-[0.875rem] leading-[1.9] text-[#5A4F42]">
                    {post.body}
                  </p>
                </article>
              ))}
            </div>
          </>
        )}

      </div>
    </main>
  );
}
