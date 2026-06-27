# RamRock Coatings — Website Task List

> The real, project-specific build & polish tracker for ramrockcoatings.com.
>
> **Last Updated:** 2026-06-27
> **Stack:** Next.js 16 (App Router) · TypeScript · Tailwind v4 · Framer Motion · Lucide · Vercel
> **Repo:** `obsidiangit/ramrockcoatings`

---

## Status Legend

- `[x]` Done and in good shape
- `[~]` Built but needs polish / rework (functional, not final)
- `[ ]` Not started / remaining

---

## Where the project stands

The site is **launch-ready for preview/production deploy**. All 27 pages exist with real copy, schema markup, contact form API, and a refined design system. Recent passes fixed hero quality, mobile services grid, SEO metadata, lint/build health, footer social icons, and navbar keyboard support.

**Remaining work is mostly QA, client integrations, and real photography — not plumbing.**

---

## Phase 1: Design System & Foundation — *done*

### 1.1 Design tokens (`src/app/globals.css`)
- [x] Color system in `@theme` (warm stone neutrals + amber accent)
- [x] Font wiring: **Inter** (body) + **Archivo** (display/stats) + **Oswald** (logo)
- [x] Spacing, radius, shadow scales
- [x] Utility classes (`.heading-display`, `.eyebrow`, `.section-padding`, card/hero/photo-card styles)
- [x] **`STYLE_GUIDE.md`** with anti-patterns list

### 1.2 Global components
- [x] Navbar — sticky, scroll shadow, services dropdown, mobile menu, phone + Free Estimate CTA
- [x] Navbar keyboard/focus — services menu (Arrow keys, Escape, focus on open, click-outside close)
- [x] Footer — 4-column, services, quick links, contact, service-area pills, social, legal links
- [x] Footer Yelp — icon treatment matching Facebook/Instagram
- [x] MobileCTA — sticky mobile call/estimate bar
- [x] Logo component (type-based wordmark, light/dark variants)

### 1.3 Assets
- [x] `public/images/` structure (hero, gallery, work, page-heroes, locations, logo-options)
- [x] Favicon + apple-touch-icon via `layout.tsx` metadata (`/images/logo.png`)
- [x] OG/Twitter image + `metadataBase` in root layout
- [~] **Photography is AI placeholder** — centralized in `src/lib/images.ts` for drop-in replacement
- [ ] Finalize logo selection from `logo-options/` (type wordmark is live for now)

---

## Phase 2: Pages & Functionality — *done*

### 2.1 Homepage (`/`)
- [x] Hero — static interior photo, location pill, trust badges, dual CTA
- [x] StatsBar — dark stone card below hero (no overlap)
- [x] ServicesBento — featured cards + 6-tile finish grid (mobile hole fixed)
- [x] ProcessSection, AboutSection, MeetSection, InterestRouter, WhyChooseSection, TestimonialsSection
- [x] Service-area pills + CTA banner
- [x] LocalBusiness JSON-LD schema

### 2.2 Services
- [x] Services hub + 8 dynamic service pages with long-form content, FAQ, CTA
- [x] Service JSON-LD schema per page

### 2.3 Our Work (`/our-work`)
- [x] Gallery hub + category pages (residential, commercial, before-after)
- [~] Before/after interaction polish; lightbox/viewer pass

### 2.4 Locations
- [x] Locations hub + 8 city pages
- [x] Unique copy per city (`CITY_CONTENT` in `[city]/page.tsx`)

### 2.5 Support pages
- [x] About, Contact, FAQ, Testimonials, Privacy Policy, Terms
- [x] Contact form with success/error states + `/api/contact` route
- [ ] Configure `CRM_WEBHOOK_URL` in Vercel env + test end-to-end submission

---

## Phase 3: Aesthetic Elevation & Polish — *mostly done*

### 3.1 Typography & editorial voice
- [x] Locked type system: Archivo + Inter + Oswald (logo)
- [x] `max-w-prose` on about story, legal pages, service process copy
- [~] Section header rhythm audit (eyebrow → heading → subtext) — spot-check as pages evolve

### 3.2 Kill the AI tells (iconography overhaul)
- [x] Removed empty colored-square icons
- [x] Services icon plates refined; Lucide icons standardized
- [x] Hero/bento orange overload reduced — white CTAs, dark stats bar, neutral card links

### 3.3 Real photography — *deferred*
- [~] AI placeholders in place until client provides real job photos
- [ ] *(When photos arrive)* Replace hero/gallery/service imagery
- [ ] *(When photos arrive)* Real before/after pairs
- [ ] *(When photos arrive)* Owner/crew portrait for MeetSection / About
- [ ] Convert to WebP, audit `sizes` and `priority`

### 3.4 Section & layout polish
- [x] Unified dark/photo page heroes across subpages
- [x] Homepage hero pass (single sharp slide, lighter scrim, stats decoupled)
- [ ] Establish intentional background cadence (alternating light/warm bands) site-wide
- [ ] Refine hover/motion consistency + full `prefers-reduced-motion` audit
- [ ] Unify CTA bands and shadows to two elevation levels

### 3.5 Trust & proof layer
- [~] Testimonials + stats kept as-is per client direction
- [ ] Wire to real Google review data when volume grows
- [ ] Don't add fabricated proof going forward

---

## Phase 4: SEO, Performance & Accessibility — *partial*

### 4.1 SEO & meta
- [x] Per-page `<title>` + `<meta description>`
- [x] `sitemap.ts` (includes legal pages) + `robots.ts`
- [x] LocalBusiness / Service / FAQPage schema
- [x] Global OG image + `metadataBase`
- [ ] Per-page OG/Twitter overrides on key landing pages
- [ ] Canonical URL audit

### 4.2 Performance
- [ ] Lighthouse pass (target 90+)
- [ ] WebP conversion pass
- [ ] Font loading / CLS check

### 4.3 Accessibility (WCAG AA)
- [x] Skip-to-content, reduced-motion on hero carousel (now static), aria on nav/accordion
- [x] Navbar services dropdown keyboard support
- [ ] Full site keyboard/focus audit
- [ ] Color-contrast check on amber accent
- [ ] Decorative `aria-hidden` + alt text audit

---

## Phase 5: Pre-Launch QA & Deploy

- [x] Production build passes (35 routes)
- [x] ESLint clean
- [x] Git repo created — `obsidiangit/ramrockcoatings`
- [ ] Cross-browser test
- [ ] Mobile audit on real devices
- [ ] Internal link validation
- [ ] End-to-end CRM form test (production env)
- [ ] Final copy proofread
- [ ] Vercel production deploy + custom domain (`ramrockcoatings.com`)
- [ ] Post-launch: Search Console, sitemap submit, GBP link

---

## Deferred (post-launch)

- [ ] Blog section
- [ ] Additional location pages
- [ ] Google Reviews API integration
