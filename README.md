# Ofer's Atelier

Luxury culinary brand website for Chef Ofer Aviv in Chiang Mai.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Vercel-ready static pages with SEO metadata and schema

## Local Development

```bash
npm install
npm run dev
```

## Photo Workflow

Production images live in `public/images`.

- Main portrait: `public/images/chef-ofer-real.jpg`
- Experience photos: `public/images/gallery/`
- Add approved Wix, Facebook, Instagram, or professional photos to `public/images/gallery/`
- Update image references in `src/lib/brand.ts`

## Booking

WhatsApp booking links use this prefilled message:

```text
Hi Ofer, I’m interested in booking an experience at Ofer’s Atelier. Can you send me available dates and details?
```

Update phone, email, address, social links, services, pricing, and gallery content in `src/lib/brand.ts`.
