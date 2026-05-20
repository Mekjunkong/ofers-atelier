import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Clock,
  Flame,
  MapPin,
  MessageCircle,
  Phone,
  Quote,
  Star,
} from "lucide-react";
import {
  bookingMessage,
  contact,
  experiences,
  faqs,
  gallery,
  journalPosts,
  testimonials,
  whatsappUrl,
} from "@/lib/brand";
import { FadeIn, HeroItem, HeroMotion } from "@/components/motion";

export function WhatsAppButton({
  children = "Book via WhatsApp",
  variant = "solid",
  experience,
}: {
  children?: React.ReactNode;
  variant?: "solid" | "outline";
  experience?: string;
}) {
  const base = whatsappUrl.split("?")[0];
  const msg = experience
    ? `Hi Ofer, I'm interested in booking the ${experience} at Ofer's Atelier. Can you send me available dates and details?`
    : bookingMessage;
  const href = `${base}?text=${encodeURIComponent(msg)}`;

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

export function Hero() {
  return (
    <section className="relative isolate min-h-[92svh] overflow-hidden">
      <Image
        src="/images/chef-ofer-real.jpg"
        alt="Chef Ofer Aviv presenting smoked meat"
        fill
        priority
        sizes="100vw"
        className="object-cover object-[58%_42%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,6,5,0.94)_0%,rgba(7,6,5,0.76)_42%,rgba(7,6,5,0.3)_72%,rgba(7,6,5,0.66)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-obsidian to-transparent" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8">
        <HeroMotion className="max-w-3xl">
          <HeroItem>
            <h1 className="font-serif text-[clamp(4.2rem,12vw,9.5rem)] leading-[0.82] text-cream">
              Ofer&apos;s Atelier
            </h1>
          </HeroItem>
          <HeroItem>
            <p className="mt-7 max-w-2xl font-serif text-3xl leading-tight text-cream/92 md:text-4xl">
              Fire, Smoke &amp; Culinary Craftsmanship in Chiang Mai
            </p>
          </HeroItem>
          <HeroItem>
            <p className="mt-7 max-w-xl text-base leading-8 text-cream/74 md:text-lg">
              A premium chef-led atelier where guests gather around fire,
              smoke, and handcrafted food experiences.
            </p>
          </HeroItem>
          <HeroItem>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center justify-center rounded-[8px] bg-copper px-6 text-sm font-semibold text-obsidian shadow-[0_16px_40px_rgba(176,111,56,0.25)] transition hover:bg-gold focus:outline-none focus:ring-2 focus:ring-gold/70"
              >
                Book an Experience
              </Link>
              <WhatsAppButton variant="outline">WhatsApp Ofer</WhatsAppButton>
            </div>
          </HeroItem>
        </HeroMotion>
      </div>
    </section>
  );
}

export function IntroBand() {
  return (
    <section className="border-y border-white/10 bg-umber/35 px-5 py-16 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
        <FadeIn>
          <h2 className="font-serif text-4xl leading-tight text-cream md:text-5xl">
            A Chiang Mai culinary atelier shaped by smoke, flame, and human
            connection.
          </h2>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="max-w-2xl text-base leading-8 text-cream/70">
            Ofer&apos;s Atelier brings guests into an intimate chef-led world of
            smoked meat, preserving techniques, fire cooking,
            private feasts, and thoughtful culinary consulting. Every gathering
            is designed to feel personal, handcrafted, and memorable.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}

export function SectionHeading({
  title,
  text,
  align = "left",
}: {
  title: string;
  text?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="font-serif text-4xl leading-tight text-cream md:text-6xl">
        {title}
      </h2>
      {text ? <p className="mt-5 text-base leading-8 text-cream/68">{text}</p> : null}
    </div>
  );
}

export function ExperiencesGrid({ limit }: { limit?: number }) {
  const items = typeof limit === "number" ? experiences.slice(0, limit) : experiences;

  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      {items.map((experience, index) => (
        <FadeIn key={experience.slug} delay={index * 0.04}>
          <article
            id={experience.slug}
            className="group h-full overflow-hidden rounded-[8px] border border-white/10 bg-[rgba(255,247,230,0.035)]"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={experience.image}
                alt={experience.title}
                fill
                loading="eager"
                sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                className="object-cover transition duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/80 to-transparent" />
            </div>
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-serif text-2xl leading-tight text-cream">
                  {experience.title}
                </h3>
                <span className="shrink-0 text-sm font-semibold text-copper">
                  {experience.price}
                </span>
              </div>
              <p className="mt-4 min-h-20 text-sm leading-7 text-cream/66">
                {experience.description}
              </p>
              <div className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-cream/48">
                <Clock size={14} aria-hidden />
                {experience.duration}
              </div>
              <div className="mt-6">
                <WhatsAppButton experience={experience.title}>Book via WhatsApp</WhatsAppButton>
              </div>
            </div>
          </article>
        </FadeIn>
      ))}
    </div>
  );
}

export function FeaturedExperiences() {
  return (
    <section className="bg-obsidian px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            title="Featured Experiences"
            text="Hands-on workshops, slow-smoked specialties, private feasts, and consulting shaped by Chef Ofer Aviv."
          />
          <Link
            href="/experiences"
            className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-gold"
          >
            View all experiences <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
        <ExperiencesGrid limit={6} />
      </div>
    </section>
  );
}

export function AboutPreview() {
  return (
    <section className="bg-charcoal px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <FadeIn>
          <div className="relative overflow-hidden rounded-[8px] border border-white/10">
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
          <SectionHeading title="About Chef Ofer" />
          <p className="mt-7 text-lg leading-9 text-cream/74">
            Chef Ofer Aviv brings around 15 years of culinary experience to an
            atelier built on smoke, live fire, restaurant craft, and global
            fusion cuisine. His work is refined but never distant: every table
            is an invitation into story, technique, generosity, and connection.
          </p>
          <p className="mt-5 text-base leading-8 text-cream/62">
            For Ofer, dining is not only the serving of food. It is the ritual
            of gathering, the memory carried by aroma, and the rare pleasure of
            being hosted with intention.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-gold"
          >
            Learn more about Chef Ofer <ArrowUpRight size={16} aria-hidden />
          </Link>
        </FadeIn>
      </div>
    </section>
  );
}

export function GalleryStrip() {
  return (
    <section className="bg-obsidian px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            title="Gallery"
            text="A visual taste of Chef Ofer, smoked meat, workshops, fire cooking, guests dining, and food closeups."
          />
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-semibold text-copper hover:text-gold"
          >
            View gallery <ArrowUpRight size={16} aria-hidden />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
          {gallery.map((item, index) => (
            <FadeIn
              key={item.src}
              delay={index * 0.04}
              className={index === 0 ? "sm:col-span-2 lg:col-span-2" : ""}
            >
              <figure className="group relative aspect-[4/5] overflow-hidden rounded-[8px] border border-white/10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  loading="eager"
                  sizes="(min-width: 1024px) 17vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4 text-sm text-cream">
                  {item.label}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials() {
  return (
    <section className="bg-charcoal px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading title="Guest Impressions" align="center" />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.05}>
              <figure className="h-full rounded-[8px] border border-white/10 bg-cream/[0.035] p-6">
                <Quote className="text-copper" size={24} aria-hidden />
                <div className="mt-5 flex gap-1 text-gold">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={15} fill="currentColor" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-5 text-sm leading-7 text-cream/70">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6 text-sm font-semibold text-cream">
                  {testimonial.name}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  return (
    <section className="bg-obsidian px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.75fr_1.25fr]">
        <SectionHeading
          title="FAQ"
          text="The essentials before booking a workshop, feast, private event, or consulting conversation."
        />
        <div className="grid gap-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-[8px] border border-white/10 bg-cream/[0.035] p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-serif text-xl text-cream">
                {faq.question}
                <span className="text-copper transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-4 text-sm leading-7 text-cream/66">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection() {
  return (
    <section className="bg-charcoal px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            title="Contact / Booking"
            text="For availability, private groups, consulting, or workshop seats, send Ofer a WhatsApp message with your preferred date and experience."
          />
          <div className="mt-9 grid gap-4 text-cream/72">
            <a href={`tel:+66${contact.phone.replace(/^0/, "")}`} className="flex gap-3 hover:text-copper">
              <Phone className="text-copper" size={18} aria-hidden /> {contact.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton>WhatsApp Ofer</WhatsAppButton>
            <a
              href={contact.instagram}
              className="inline-flex h-12 items-center justify-center rounded-[8px] border border-white/15 px-5 text-sm font-semibold text-cream transition hover:border-copper hover:text-copper"
            >
              Instagram @ofersatelier
            </a>
          </div>
        </div>
        <div className="min-h-[420px] overflow-hidden rounded-[8px] border border-white/10 bg-cream/[0.035]">
          <div className="flex h-full min-h-[420px] flex-col justify-between bg-[radial-gradient(circle_at_35%_25%,rgba(192,124,62,0.22),transparent_32%),linear-gradient(135deg,#17100d,#080706)] p-8">
            <div>
              <p className="text-xs uppercase tracking-[0.22em] text-copper">
                Location
              </p>
              <h3 className="mt-5 font-serif text-4xl text-cream">
                Chai Sathan, Saraphi
              </h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-cream/64">
                A private atelier on the outskirts of Chiang Mai, nestled in a
                quiet neighbourhood away from the tourist circuit. Exact
                directions sent on booking confirmation.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-cream/64">
              <div className="h-px bg-white/10" />
              <div className="grid gap-1">
                <span className="text-cream/80">99/99, M.5, Moo Baan Perfect Home</span>
                <span>Chai Sathan Sub-district, Saraphi District</span>
                <span>Chiang Mai 50140, Thailand</span>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Chai+Sathan+Saraphi+Chiang+Mai+Thailand"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-fit items-center gap-2 rounded-[6px] border border-copper/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-copper transition hover:border-copper hover:bg-copper/10"
              >
                <MapPin size={13} aria-hidden />
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function PageHero({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
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

export function JournalPreview() {
  return (
    <section className="bg-obsidian px-5 py-24 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          title="Journal"
          text="Notes on smoke, fire, preserving, hospitality, and restaurant craft."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {journalPosts.map((post) => (
            <article
              key={post.title}
              className="rounded-[8px] border border-white/10 bg-cream/[0.035] p-6"
            >
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-copper">
                <CalendarDays size={14} aria-hidden />
                {post.date}
              </div>
              <h3 className="mt-6 font-serif text-2xl text-cream">{post.title}</h3>
              <p className="mt-4 text-sm leading-7 text-cream/64">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PrivateEventsContent() {
  return (
    <section className="bg-obsidian px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading title="Private gatherings around the table" />
          <p className="mt-7 text-lg leading-9 text-cream/70">
            Ofer designs intimate chef-table dinners, outdoor fire feasts, and
            workshop-led celebrations for private groups. The format can be
            shaped around smoked meat, global fusion courses, hands-on cooking,
            or a relaxed shared feast.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {["Chef-hosted", "Small groups", "Custom menus"].map((item) => (
              <div key={item} className="rounded-[8px] border border-white/10 p-4">
                <Flame className="text-copper" size={20} aria-hidden />
                <p className="mt-3 text-sm font-semibold text-cream">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <WhatsAppButton>Plan a Private Event</WhatsAppButton>
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden rounded-[8px] border border-white/10 lg:aspect-[5/4]">
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

export function ConsultingContent() {
  return (
    <section className="bg-obsidian px-5 py-24 sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            title="Restaurant consulting with a chef’s eye"
            text="For restaurants, hospitality teams, and culinary operators who need sharper food direction and a stronger guest experience."
          />
          <div className="mt-8">
            <WhatsAppButton>Discuss Consulting</WhatsAppButton>
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          {[
            "Menu development and concept refinement",
            "Smoked meat and live-fire program design",
            "Kitchen workflow and prep systems",
            "Guest experience and chef-table strategy",
          ].map((item) => (
            <div key={item} className="rounded-[8px] border border-white/10 bg-cream/[0.035] p-6">
              <h3 className="font-serif text-2xl text-cream">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
