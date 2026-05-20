import Image from "next/image";
import { getTranslations } from "next-intl/server";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
  Star,
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
            <p className="mt-7 max-w-xl text-base leading-8 text-cream/74 md:text-lg">
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
    <section className="bg-terracotta px-5 py-24 text-center sm:px-8">
      <div className="mx-auto max-w-lg">
        <FadeIn>
          <div className="relative mx-auto mb-10 aspect-[3/4] w-36 overflow-hidden rounded-[4px] border-2 border-cream/20">
            <Image
              src="/images/chef-ofer-real.jpg"
              alt="Chef Ofer Aviv"
              fill
              sizes="144px"
              className="object-cover object-[54%_15%]"
            />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
            {t("heading")}
          </h2>
        </FadeIn>
        <FadeIn delay={0.18}>
          <p className="mt-6 text-base leading-8 text-cream/78">{t("body")}</p>
        </FadeIn>
        <FadeIn delay={0.25}>
          <Link
            href="/about"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-cream underline underline-offset-4 hover:text-cream/70"
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
  const bodyColor = theme === "dark" ? "text-cream/68" : "text-bark/60";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className={`font-serif text-4xl leading-tight md:text-6xl ${headingColor}`}>{title}</h2>
      {text ? <p className={`mt-5 text-base leading-8 ${bodyColor}`}>{text}</p> : null}
    </div>
  );
}

export async function ExperiencesGrid({ limit }: { limit?: number }) {
  const t = await getTranslations("experiences");
  const tCommon = await getTranslations("common");
  const tBooking = await getTranslations("booking");

  const items = typeof limit === "number" ? experiences.slice(0, limit) : experiences;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((experience, index) => {
        const title = t(`${experience.slug}.title`);
        const description = t(`${experience.slug}.description`);
        const duration = t(`${experience.slug}.duration`);
        const bookingMsg = tBooking("messageWithExperience", { experience: title });

        return (
          <FadeIn key={experience.slug} delay={index * 0.04}>
            <article
              id={experience.slug}
              className="group h-full overflow-hidden rounded-[8px] border border-bark/10 bg-white/70"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={experience.image}
                  alt={title}
                  fill
                  loading="eager"
                  sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian/60 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl leading-tight text-bark">{title}</h3>
                  <span className="shrink-0 text-sm font-semibold text-copper">
                    {experience.price}
                  </span>
                </div>
                <p className="mt-4 min-h-20 text-sm leading-7 text-bark/60">{description}</p>
                <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-bark/40">
                  <Clock size={14} aria-hidden />
                  {duration}
                </div>
                <div className="mt-6">
                  <WhatsAppButton bookingMsg={bookingMsg}>
                    {tCommon("bookViaWhatsApp")}
                  </WhatsAppButton>
                </div>
              </div>
            </article>
          </FadeIn>
        );
      })}
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
          <div className="relative overflow-hidden rounded-[8px] border border-bark/10">
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
          <p className="mt-5 text-base leading-8 text-bark/58">{t("body2")}</p>
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
                  loading="eager"
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

  return (
    <section className="bg-linen px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t("title")} />
        <div className="mt-12 divide-y divide-bark/10">
          {items.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.05}>
              <div className="grid gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-12">
                <div className="flex flex-col gap-1">
                  <p className="font-semibold text-bark">{testimonial.name}</p>
                  <div className="flex gap-1 text-copper">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" aria-hidden />
                    ))}
                  </div>
                </div>
                <blockquote className="text-base leading-8 text-bark/64">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
              </div>
            </FadeIn>
          ))}
        </div>
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
        <div className="grid gap-3">
          {items.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[8px] border border-bark/12 bg-white/60 p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-bark">
                {faq.question}
                <span className="text-copper transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-bark/60">{faq.answer}</p>
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
              href={`tel:+66${contact.phone.replace(/^0/, "")}`}
              className="flex gap-3 hover:text-copper"
            >
              <Phone className="text-copper" size={18} aria-hidden /> {contact.phone}
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
              <p className="text-xs uppercase tracking-[0.22em] text-cream/70">
                {t("locationLabel")}
              </p>
              <h3 className="mt-5 font-serif text-4xl text-cream">{t("locationTitle")}</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-cream/70">{t("locationText")}</p>
            </div>
            <div className="grid gap-4 text-sm text-cream/70">
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

export async function JournalPreview() {
  const t = await getTranslations("journal");
  const items = t.raw("items") as Array<{ title: string; date: string; excerpt: string }>;

  return (
    <section className="bg-linen px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title={t("title")} text={t("text")} />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {items.map((post) => (
            <article
              key={post.title}
              className="rounded-[8px] border border-bark/10 bg-white/60 p-6"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-copper">
                <CalendarDays size={14} aria-hidden />
                {post.date}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-bark">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-bark/60">{post.excerpt}</p>
            </article>
          ))}
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
