import type { Metadata } from "next";

export const siteUrl = "https://ofersatelier.com";

export const contact = {
  phone: "0800 215 170",
  email: "Vulcan.tiles@gmail.com",
  address:
    "99/99, M.5, Moo Baan Perfect Home, Chai Sathan, Saraphi, Chiang Mai, Thailand",
  instagram: "https://www.instagram.com/ofersatelier",
  facebook: "https://www.facebook.com/ofersatelier",
};

export const bookingMessage =
  "Hi Ofer, I’m interested in booking an experience at Ofer’s Atelier. Can you send me available dates and details?";

export const whatsappUrl = `https://wa.me/66800215170?text=${encodeURIComponent(
  bookingMessage,
)}`;

export const keywords = [
  "Ofer’s Atelier",
  "Chef Ofer Aviv",
  "Chiang Mai cooking experience",
  "smoked meat Chiang Mai",

  "fire cooking Thailand",
  "chef table Chiang Mai",
  "culinary workshop Chiang Mai",
  "restaurant consulting Thailand",
];

export const experiences = [
  {
    title: "Chef Consulting",
    slug: "chef-consulting",
    price: "฿8,000",
    duration: "Consultation scope tailored to project",
    image: "/images/gallery/chef-consulting.jpg",
    description:
      "Strategic menu, smoke program, kitchen flow, and concept guidance for restaurants and culinary operators.",
  },
  {
    title: "Smoked Pork Ribs",
    slug: "smoked-pork-ribs",
    price: "฿350",
    duration: "Pre-order availability varies",
    image: "/images/gallery/smoked-pork-ribs.jpg",
    description:
      "Slow-smoked pork ribs prepared with Ofer’s fire-led technique and deep, balanced seasoning.",
  },
  {
    title: "Preserving Techniques Workshop",
    slug: "preserving-techniques-workshop",
    price: "฿1,500",
    duration: "Approx. 3 hours",
    image: "/images/gallery/preserving-workshop.jpg",
    description:
      "Explore curing, preserving, and flavor-building techniques used to extend texture, aroma, and depth.",
  },
  {
    title: "Outdoor Fire Cooking Class & Feast",
    slug: "outdoor-fire-cooking-class",
    price: "฿1,800",
    duration: "Approx. 3-4 hours",
    image: "/images/gallery/fire-cooking.jpg",
    description:
      "Learn to cook with live fire, smoke, ember heat, and instinct before sitting down to a generous feast.",
  },
  {
    title: "Feast Experience",
    slug: "feast-experience",
    price: "฿1,800",
    duration: "Evening feast",
    image: "/images/gallery/feast-experience.jpg",
    description:
      "An intimate chef-table gathering shaped by smoke, fire, global fusion flavors, and warm hospitality.",
  },
];

export const gallery = [
  {
    src: "/images/chef-ofer-real.jpg",
    alt: "Chef Ofer Aviv presenting smoked meat in Chiang Mai",
    label: "Chef Ofer",
  },
  {
    src: "/images/gallery/smoked-pork-ribs.jpg",
    alt: "Smoked pork ribs from Ofer's Atelier",
    label: "Smoked Meat",
  },
  {
    src: "/images/gallery/fire-cooking.jpg",
    alt: "Outdoor fire cooking class in Chiang Mai",
    label: "Fire Cooking",
  },
  {
    src: "/images/gallery/chef-consulting.jpg",
    alt: "Guests dining with Chef Ofer",
    label: "Chef Table",
  },
  {
    src: "/images/gallery/feast-experience.jpg",
    alt: "Feast experience at Ofer's Atelier",
    label: "Feasts",
  },
];

export const faqs = [
  {
    question: "Where are you located?",
    answer:
      "Ofer’s Atelier is located in Chai Sathan, Saraphi, Chiang Mai, Thailand.",
  },
  {
    question: "How do I book?",
    answer:
      "The fastest way is to send Ofer a WhatsApp message with your preferred experience, date, group size, and any dietary notes.",
  },
  {
    question: "Are private groups available?",
    answer:
      "Yes. Private chef-table dinners, fire cooking gatherings, and workshop formats can be arranged for small groups.",
  },
  {
    question: "Do you offer consulting?",
    answer:
      "Yes. Ofer provides restaurant consulting for menu direction, smoked meat programs, kitchen operations, and hospitality concepts.",
  },
  {
    question: "Are beginners welcome?",
    answer:
      "Absolutely. Workshops are chef-led and approachable, while still offering depth for experienced cooks.",
  },
  {
    question: "What is included in the experience?",
    answer:
      "Each experience includes chef instruction or hosting, prepared food, shared dining, and the relevant hands-on elements for the chosen format.",
  },
  {
    question: "What languages are available?",
    answer:
      "Experiences are available in English. Additional language support may be discussed when booking.",
  },
  {
    question: "Do I need to pay deposit?",
    answer:
      "A deposit may be requested to secure private dates or limited workshop seats. Ofer will confirm details during booking.",
  },
];

export const testimonials = [
  {
    quote:
      "A beautifully personal evening. The food was generous, smoky, and full of detail, but the real magic was the story behind every dish.",
    name: "Daniel K.",
  },
  {
    quote:
      "Chef Ofer makes fire cooking feel both refined and deeply human. We left full, inspired, and already planning another visit.",
    name: "Maya R.",
  },
  {
    quote:
      "The workshop was hands-on without feeling rushed. It felt like being invited into a serious chef’s private atelier.",
    name: "James & Claire",
  },
];

export const journalPosts = [
  {
    title: "Why Smoke Is More Than Flavor",
    date: "Atelier Notes",
    excerpt:
      "A chef’s reflection on patience, heat, hardwood, and the quiet discipline behind memorable smoked meat.",
  },
  {
    title: "Preserving as Culinary Memory",
    date: "Technique",
    excerpt:
      "Curing and preserving are not shortcuts. They are ways of concentrating time, place, and intention.",
  },
  {
    title: "Building a Menu Around Fire",
    date: "Consulting",
    excerpt:
      "How live fire can shape restaurant identity, kitchen rhythm, and a guest’s emotional memory of a meal.",
  },
];

export function pageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "Ofer’s Atelier",
      images: [
        {
          url: `${siteUrl}/images/chef-ofer-real.jpg`,
          width: 1200,
          height: 800,
          alt: "Chef Ofer Aviv with smoked meat at Ofer's Atelier",
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${siteUrl}/images/chef-ofer-real.jpg`],
    },
  };
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ofer’s Atelier",
  image: `${siteUrl}/images/chef-ofer-real.jpg`,
  url: siteUrl,
  telephone: contact.phone,
  email: contact.email,
  priceRange: "฿฿",
  address: {
    "@type": "PostalAddress",
    streetAddress: "99/99, M.5, Moo Baan Perfect Home",
    addressLocality: "Chai Sathan, Saraphi",
    addressRegion: "Chiang Mai",
    addressCountry: "TH",
  },
  sameAs: [contact.instagram, contact.facebook],
  description:
    "Premium chef-led culinary experiences in Chiang Mai focused on smoked meat, fire cooking, preserving techniques, private feasts, and restaurant consulting.",
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Chef Ofer Aviv",
  jobTitle: "Chef and Culinary Consultant",
  image: `${siteUrl}/images/chef-ofer-real.jpg`,
  worksFor: {
    "@type": "Organization",
    name: "Ofer’s Atelier",
  },
  description:
    "Ofer Aviv is a chef with around 15 years of culinary experience specializing in smoked meat, fire cooking, restaurant consulting, and global fusion cuisine.",
};

export const serviceSchemas = experiences.map((experience) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: experience.title,
  description: experience.description,
  provider: {
    "@type": "LocalBusiness",
    name: "Ofer’s Atelier",
  },
  areaServed: "Chiang Mai, Thailand",
  offers: {
    "@type": "Offer",
    priceCurrency: "THB",
    price: experience.price.replace(/[฿,]/g, ""),
    url: `${siteUrl}/experiences#${experience.slug}`,
  },
}));
