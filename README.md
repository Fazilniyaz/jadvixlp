# Jadvix Website

Production marketing site for **jadvix.uk** — Next.js 14 (App Router) + Tailwind CSS + TypeScript.
Design system: deep navy `#00253e`, teal `#006591`, coral `#ff7c39` on a Bricolage Grotesque / Hanken Grotesk / Space Grotesk type system.

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all pages fully static)
npm start        # serve the production build
```

## Pages

| Route       | Purpose                                                        |
| ----------- | -------------------------------------------------------------- |
| `/`         | Home — hero, services bento, about split, stats, testimonials  |
| `/services` | Tabbed service pillars (Develop / Digital / Marketing / Consult / Education) |
| `/products` | Jadvix Shop, Jadvix Academy, RotaPay, PayRoto                   |
| `/ideas`    | How Jadvix Works timeline + innovation bento                    |
| `/about`    | Vision, foundations, journey                                    |
| `/faq`      | Searchable accordion + FAQPage JSON-LD                          |
| `/contact`  | Form (mailto-based, no backend needed) + real UK/India offices  |

## SEO / Performance

- Per-page `metadata` (title, description, canonical, Open Graph, Twitter)
- JSON-LD: `Organization` + `WebSite` (layout), `FAQPage` (/faq)
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest`, `og.png`, favicon
- Self-hosted font via `next/font` (no external requests at all)
- Zero raster images except `og.png`; icons are inline SVG
- All pages statically prerendered; first-load JS ≈ 87–100 kB
- Semantic HTML, skip-link, aria labels, `prefers-reduced-motion` support

## Notes

- **Logo**: `components/Logo.tsx` is an inline SVG placeholder echoing the brand mark — swap in the official asset when ready.
- **Contact form**: opens the visitor's mail client pre-filled (`mailto:contact@jadvix.uk`). Wire it to an API route or form service for silent submission.
- Site constants (addresses, phones, email, nav) live in `lib/site.ts`.
