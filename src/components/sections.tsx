import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  ArrowUpRight,
  Clock,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { contact, experiences, gallery, whatsappUrl } from "@/lib/brand";
import { FadeIn, HeroItem, HeroMotion } from "@/components/motion";
import { Link } from "@/i18n/navigation";

export function WhatsAppButton({
  children,
  variant = "solid",
  bookingMsg,
}: {
  children: React.ReactNode;
  variant?: "solid" | "outline";
  bookingMsg: string;
}) {
  const base = whatsappUrl.split("?")[0];
  const href = `${base}?text=${encodeURIComponent(bookingMsg)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={
        variant === "solid"
          ? "inline-flex h-12 items-center justify-center gap-2 rounded-[8px] bg-copper px-5 text-sm font-semibold text-obsidian shadow-[0_16px_40px_rgba(176,111,56,0.22)] transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold/70"
          : "inline-flex h-12 items-center justify-center gap-2 rounded-[8px] border border-copper/55 px-5 text-sm font-semibold text-cream transition hover:border-gold hover:text-gold focus:outline-none focus:ring-2 focus:ring-gold/70"
      }
    >
      <MessageCircle size={18} aria-hidden />
      {children}
    </a>
  );
}

export async function Hero() {
  const t = await getTranslations("hero");
  const tCommon = await getTranslations("common");
  const tBooking = await getTranslations("booking");

  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden">
      <Image
        src="/images/hero-banner.jpg"
        alt="Fire-cooked smoked brisket at Ofer's Atelier"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,6,5,0.94)_0%,rgba(7,6,5,0.76)_42%,rgba(7,6,5,0.3)_72%,rgba(7,6,5,0.66)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8">
        <HeroMotion className="max-w-3xl">
          <HeroItem>
            <h1 className="font-serif text-[clamp(4.2rem,12vw,9.5rem)] leading-[0.82] text-cream">
              {t("title")}
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="mt-7 max-w-2xl font-serif text-3xl leading-tight text-cream/92 md:text-4xl">
              {t("subtitle")}
            </p>
          </HeroItem>
          <HeroItem>
            <p className="mt-7 max-w-xl text-base leading-8 text-cream/85 md:text-lg">
              {t("description")}
            </p>
          </HeroItem>
          <HeroItem>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-[8px] bg-copper px-6 text-sm font-semibold text-obsidian shadow-[0_16px_40px_rgba(176,111,56,0.25)] transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold/70"
              >
                {tCommon("bookAnExperience")}
              </Link>
              <WhatsAppButton variant="outline" bookingMsg={tBooking("message")}>
                {tCommon("whatsAppOfer")}
              </WhatsAppButton>
            </div>
          </HeroItem>
        </HeroMotion>
      </div>
    </section>
  );
}

export async function IntroBand() {
  const t = await getTranslations("introBand");
  const tCommon = await getTranslations("common");

  return (
    <section className="bg-terracotta px-5 py-28 text-center sm:px-8 md:py-36">
      <div className="mx-auto max-w-4xl">
        <FadeIn>
          <h2 className="font-serif text-5xl leading-[1.0] text-cream md:text-7xl lg:text-8xl">
            {t("heading")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="mx-auto mt-8 max-w-xl text-base leading-8 text-cream/82 md:text-lg">
            {t("body")}
          </p>
        </FadeIn>
        <FadeIn delay={0.22}>
          <Link
            href="/about"
            className="mt-9 inline-flex items-center gap-2 text-sm font-semibold text-cream underline underline-offset-4 hover:text-cream/70"
          >
            {tCommon("learnMoreAboutChef")} <ArrowUpRight size={16} aria-hidden />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  text,
  align = "left",
  theme = "light",
}: {
  title: string;
  text?: string;
  align?: "left" | "center";
  theme?: "dark" | "light";
}) {
  const headingColor = theme === "dark" ? "text-cream" : "text-bark";
  const bodyColor = theme === "dark" ? "text-cream/80" : "text-bark/70";
  return (
    <div className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}>
      <h2 className={`font-serif text-5xl leading-[0.92] md:text-7xl ${headingColor}`}>{title}</h2>
      {text ? <p className={`mt-6 text-base leading-8 ${bodyColor}`}>{text}</p> : null}
    </div>
  );
}

export async function ExperiencesGrid({
  limit,
  theme = "light",
}: {
  limit?: number;
  theme?: "light" | "dark";
}) {
  const t = await getTranslations("experiences");
  const tCommon = await getTranslations("common");
  const tBooking = await getTranslations("booking");

  const textPrimary = theme === "dark" ? "text-cream" : "text-bark";
  const textSecondary = theme === "dark" ? "text-cream/68" : "text-bark/70";
  const textMuted = theme === "dark" ? "text-cream/32" : "text-bark/32";
  const borderColor = theme === "dark" ? "border-cream/10" : "border-bark/10";
  const priceColor = theme === "dark" ? "text-gold" : "text-copper";
  const linkClasses =
    theme === "dark"
      ? "text-gold hover:text-cream transition"
      : "text-copper hover:text-bark transition";

  const items = typeof limit === "number" ? experiences.slice(0, limit) : experiences;

  return (
    <div>
      {items.map((experience, index) => {
        const title = t(`${experience.slug}.title`);
        const description = t(`${experience.slug}.description`);
        const duration = t(`${experience.slug}.duration`);
        const bookingMsg = tBooking("messageWithExperience", { experience: title });

        return (
          <FadeIn key={experience.slug} delay={index * 0.05}>
            <article
              id={experience.slug}
              className={`group border-t ${borderColor} py-10 md:py-14`}
            >
              <div className="grid gap-6 md:grid-cols-[48px_1fr_200px] md:gap-10 lg:grid-cols-[56px_1fr_240px] lg:gap-14">

                {/* Index */}
                <span className={`pt-2 text-xs font-semibold tracking-[0.22em] tabular-nums ${textMuted}`}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Text content */}
                <div>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                    <h3 className={`font-serif text-3xl leading-tight md:text-4xl ${textPrimary}`}>
                      {title}
                    </h3>
                    <span className={`text-base font-semibold ${priceColor}`}>
                      {experience.price}
                    </span>
                  </div>
                  <p className={`mt-4 max-w-xl text-sm leading-7 ${textSecondary}`}>
                    {description}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                    <span className={`flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] ${textMuted}`}>
                      <Clock size={12} aria-hidden />
                      {duration}
                    </span>
                    <a
                      href={`https://wa.me/66800215170?text=${encodeURIComponent(bookingMsg)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 text-sm font-semibold ${linkClasses}`}
                    >
                      {tCommon("bookViaWhatsApp")}
                      <ArrowUpRight size={14} aria-hidden />
                    </a>
                  </div>
                </div>

                {/* Image — sharp, no radius */}
                <div className="hidden md:block">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <Image
                      src={experience.image}
                      alt={title}
                      fill
                      loading="lazy"
                      sizes="240px"
                      className="object-cover transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
              </div>
            </article>
          </FadeIn>
        );
      })}
      <div className={`border-t ${borderColor}`} />
    </div>
  );
}

export async function FeaturedExperiences() {
  const t = await getTranslations("featuredExperiences");
  const tCommon = await getTranslations("common");

  return (
    <section className="bg-linen px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading title={t("title")} text={t("text")} />
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-gold"
          >
            {tCommon("viewAllExperiences")} <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
        <ExperiencesGrid limit={6} />
      </div>
    </section>
  );
}

export async function AboutPreview() {
  const t = await getTranslations("aboutPreview");
  const tCommon = await getTranslations("common");

  return (
    <section className="border-y border-bark/8 bg-linen px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <FadeIn>
          <div className="relative overflow-hidden">
            <Image
              src="/images/chef-ofer-real.jpg"
              alt="Chef Ofer Aviv"
              width={1400}
              height={950}
              loading="eager"
              className="aspect-[4/5] object-cover object-[54%_42%] lg:aspect-[5/4]"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionHeading title={t("title")} />
          <p className="mt-7 text-lg leading-9 text-bark/72">{t("body1")}</p>
          <p className="mt-5 text-base leading-8 text-bark/70">{t("body2")}</p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-gold"
          >
            {tCommon("learnMoreAboutChef")} <ArrowUpRight size={16} aria-hidden />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export async function GalleryStrip() {
  const t = await getTranslations("gallery");
  const tCommon = await getTranslations("common");
  const galleryItems = t.raw("items") as Array<{ alt: string; label: string }>;

  return (
    <section className="bg-linen px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading title={t("title")} text={t("text")} />
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-gold"
          >
            {tCommon("viewGallery")} <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {gallery.map((item, index) => (
            <FadeIn
              key={item.src}
              delay={index * 0.04}
              className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-[8px] border border-bark/10">
                <Image
                  src={item.src}
                  alt={galleryItems[index]?.alt ?? item.src}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1024px) 17vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 text-sm text-cream">
                  {galleryItems[index]?.label ?? ""}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function Testimonials() {
  const t = await getTranslations("testimonials");
  const items = t.raw("items") as Array<{ quote: string; name: string }>;
  const [featured, ...secondary] = items;

  return (
    <section className="bg-obsidian px-5 py-32 sm:px-8">
      <div className="mx-auto max-w-5xl">
        {/* Featured hero quote */}
        <FadeIn>
          <blockquote>
            <p className="font-serif text-4xl italic leading-[1.18] text-cream md:text-5xl lg:text-6xl">
              &ldquo;{featured.quote}&rdquo;
            </p>
            <footer className="mt-10 flex items-center gap-5">
              <span className="h-px w-10 bg-copper" aria-hidden />
              <cite className="not-italic text-xs font-semibold uppercase tracking-[0.22em] text-copper">
                {featured.name}
              </cite>
            </footer>
          </blockquote>
        </FadeIn>

        {/* Secondary quotes */}
        {secondary.length > 0 && (
          <div className="mt-20 grid gap-10 border-t border-cream/10 pt-16 sm:grid-cols-2">
            {secondary.map((testimonial) => (
              <FadeIn key={testimonial.name}>
                <blockquote>
                  <p className="text-base italic leading-8 text-cream/60">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <footer className="mt-5 flex items-center gap-3">
                    <span className="h-px w-6 bg-copper/40" aria-hidden />
                    <cite className="not-italic text-xs font-semibold uppercase tracking-[0.15em] text-cream/38">
                      {testimonial.name}
                    </cite>
                  </footer>
                </blockquote>
              </FadeIn>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export async function FAQSection() {
  const t = await getTranslations("faq");
  const items = t.raw("items") as Array<{ question: string; answer: string }>;

  return (
    <section className="border-y border-bark/8 bg-linen px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading title={t("title")} text={t("text")} />
        <div>
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group border-b border-bark/10 py-6 first:border-t first:border-t-bark/10"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-bark">
                {faq.question}
                <span
                  className="shrink-0 text-lg text-copper transition-transform duration-[260ms] group-open:rotate-45"
                  aria-hidden
                >
                  +
                </span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-bark/72">
                <span>{faq.answer}</span>
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function ContactSection() {
  const t = await getTranslations("contact");
  const tCommon = await getTranslations("common");
  const tBooking = await getTranslations("booking");

  return (
    <section className="bg-linen px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading title={t("title")} text={t("text")} />
          <div className="mt-9 grid gap-4 text-bark/68">
            <a
              href={`tel:${contact.phone}`}
              className="flex gap-3 hover:text-copper"
            >
              <Phone className="text-copper" size={18} aria-hidden /> {contact.phoneDisplay}
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton bookingMsg={tBooking("message")}>{tCommon("whatsAppOfer")}</WhatsAppButton>
            <a
              href={contact.instagram}
              className="inline-flex h-12 items-center justify-center rounded-[8px] border border-bark/20 px-5 text-sm font-semibold text-bark transition hover:border-copper hover:text-copper"
            >
              {t("instagram")}
            </a>
          </div>
        </div>
        <div className="min-h-[420px] overflow-hidden rounded-[8px]">
          <div className="flex h-full min-h-[420px] flex-col justify-between bg-terracotta p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-cream/80">
                {t("locationLabel")}
              </p>
              <h3 className="mt-5 font-serif text-4xl text-cream">{t("locationTitle")}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-cream/85">{t("locationText")}</p>
            </div>
            <div className="grid gap-4 text-sm text-cream/80">
              <div className="h-px bg-cream/20" />
              <div className="grid gap-1">
                <span className="text-cream/90">{t("address1")}</span>
                <span>{t("address2")}</span>
                <span>{t("address3")}</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chai+Sathan+Saraphi+Chiang+Mai+Thailand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-[6px] border border-cream/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-cream transition hover:border-cream hover:bg-cream/10"
              >
                <MapPin size={13} aria-hidden />
                {tCommon("getDirections")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="relative overflow-hidden bg-charcoal px-5 pb-20 pt-36 sm:px-8">
      <div className="absolute inset-0 opacity-50">
        <Image
          src="/images/chef-ofer-real.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[58%_35%]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070605_0%,rgba(7,6,5,0.86)_48%,rgba(7,6,5,0.45)_100%)]" />
      </div>
      <div className="relative mx-auto max-w-7xl">
        <HeroMotion>
          <HeroItem>
            <h1 className="max-w-4xl font-serif text-6xl leading-[0.92] text-cream md:text-8xl">
              {title}
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-cream/72">{text}</p>
          </HeroItem>
        </HeroMotion>
      </div>
    </section>
  );
}

export async function FieldNotes() {
  const { getLatestPost, getAllPosts } = await import("@/content/journal");
  const latest = getLatestPost();
  const archive = getAllPosts().slice(1);

  return (
    <section className="bg-linen px-5 pb-24 pt-20 sm:px-8" aria-label="Field Notes">
      <div className="mx-auto max-w-3xl">

        {/* Section label */}
        <p className="text-xs uppercase tracking-[0.28em] text-muted mb-14">
          Field Notes — This Week at the Atelier
        </p>

        {/* Featured latest post */}
        <article className="mb-20">
          <div className="relative w-full aspect-[3/2] overflow-hidden mb-9">
            <Image
              src={latest.image}
              alt={latest.imageAlt}
              fill
              sizes="(min-width: 768px) 720px, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex items-baseline justify-between mb-4">
            <span className="text-xs uppercase tracking-[0.24em] text-copper">
              {latest.category}
            </span>
            <time className="text-xs tracking-wide text-muted" dateTime={latest.dateISO}>
              {latest.date}
            </time>
          </div>

          <h2 className="font-serif text-[clamp(1.6rem,4vw,2.4rem)] leading-[1.28] text-bark mb-7 max-w-xl">
            {latest.title}
          </h2>

          <p className="text-base leading-[2.0] text-bark/75 tracking-[0.005em]">
            {latest.body}
          </p>
        </article>

        {/* Archive grid */}
        {archive.length > 0 && (
          <>
            <hr className="border-t border-bark/12 mb-14" />
            <div className="grid gap-12 sm:grid-cols-2">
              {archive.map((post) => (
                <article key={post.slug} className="group">
                  <div className="relative w-full aspect-[3/2] overflow-hidden mb-5">
                    <Image
                      src={post.image}
                      alt={post.imageAlt}
                      fill
                      loading="lazy"
                      sizes="(min-width: 640px) 340px, 100vw"
                      className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex items-baseline justify-between mb-2">
                    <span className="text-xs uppercase tracking-[0.24em] text-copper">
                      {post.category}
                    </span>
                    <time className="text-xs text-muted" dateTime={post.dateISO}>
                      {post.date}
                    </time>
                  </div>
                  <h3 className="font-serif text-xl leading-[1.4] text-bark mb-3">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-[1.9] text-bark/68 line-clamp-4">
                    {post.body}
                  </p>
                </article>
              ))}
            </div>
          </>
        )}

        {/* Link to full archive */}
        <div className="mt-16 pt-8 border-t border-bark/12">
          <Link
            href="/journal"
            className="inline-flex items-center gap-2 text-sm font-medium tracking-wide text-copper hover:text-bark transition"
          >
            All field notes <ArrowUpRight size={14} aria-hidden />
          </Link>
        </div>
      </div>
    </section>
  );
}

export async function PrivateEventsContent() {
  const t = await getTranslations("pages.privateEvents");
  const tBooking = await getTranslations("booking");

  const features = t.raw("features") as string[];

  return (
    <section className="bg-linen px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading title={t("sectionTitle")} />
          <p className="mt-7 text-lg leading-9 text-bark/68">{t("body")}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {features.map((item) => (
              <div key={item} className="rounded-[8px] border border-bark/10 bg-white/60 p-4">
                <Flame className="text-copper" size={20} aria-hidden />
                <p className="mt-3 text-sm font-semibold text-bark">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <WhatsAppButton bookingMsg={tBooking("message")}>{t("cta")}</WhatsAppButton>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-bark/10 lg:aspect-[5/4]">
          <Image
            src="/images/gallery/feast-experience.jpg"
            alt="Private feast experience"
            fill
            loading="eager"
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}

export async function ConsultingContent() {
  const t = await getTranslations("pages.consulting");
  const tBooking = await getTranslations("booking");
  const services = t.raw("services") as string[];

  return (
    <section className="bg-linen px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading title={t("sectionTitle")} text={t("sectionText")} />
          <div className="mt-8">
            <WhatsAppButton bookingMsg={tBooking("message")}>{t("cta")}</WhatsAppButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((item) => (
            <div
              key={item}
              className="rounded-[8px] border border-bark/10 bg-white/60 p-6"
            >
              <h3 className="font-serif text-2xl text-bark">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
