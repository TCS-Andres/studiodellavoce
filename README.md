# Studio della Voce

Marketing website for **Studio della Voce** — voice restoration and vocal transformation with Dr. Marcella Amoruso.

Built with **Next.js 16** (App Router) + **React 19** + **Tailwind CSS v4**, with Poppins/Inter typography and the brand's signature gradient design system.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (all routes prerender as static)
```

## Pages

| Route | Status |
| --- | --- |
| `/` (Home) | Built |
| `/about` | Built |
| `/vocal-lessons/individual` | Built |
| `/digital-course` | Built |
| `/contact` | Built (form is front-end only) |
| `/vocal-lessons/group` | Stub (hero + CTA) |
| `/vocal-lessons/ministerial-choir` | Stub (hero + CTA) |
| `/online-resources` | Stub (hero + CTA) |

## Project structure

- `app/` — routes (App Router)
- `components/` — `site/` (navbar, footer, logo), `ui/` (primitives), `sections/` (reusable sections), `home/`, `course/`, `contact/`
- `lib/site.ts` — nav config, contact details, external links
- `app/globals.css` — Tailwind v4 `@theme` brand tokens + the `--brand-gradient`
- `public/brand/` — optimized brand gradient asset

## Notes for handoff

- **Photography is placeholder.** `components/ui/media.tsx` renders branded gradient stand-ins; pass a `src` (files under `/public/photos`) to swap in real photos.
- **Contact form is front-end only.** Validation + success state work; wire a submit handler (Resend / Formspree / route handler) in `components/contact/contact-form.tsx`.
- Copy lives in `Studio della Voce - Web Info.md`. Group / Ministerial Choir / Online Resources pages are stubbed and ready to flesh out using the same ping-pong template as Individual Lessons.
