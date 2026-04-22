# Gardenors Landing-Page Clone Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement Tasks 4–7 in parallel (independent component groups). Execute Tasks 1–3 and 8–10 inline.

**Goal:** Build an original React/Vite/Tailwind clone of a gardening/landscaping marketing site (Gardenors-genre) with 11 section components on a single `Home` route.

**Architecture:** One-page marketing site. `Home.jsx` stacks 11 section components; each component is self-contained and imports only shared design tokens from Tailwind. No state management, no data fetching — everything is static content defined inline in each component.

**Tech Stack:** React 19, Vite 8, Tailwind CSS v4 (CSS-first config via `@theme`), React Router v7 (already installed for existing routes), no Framer Motion unless a subtle Intersection-Observer reveal is needed.

**Content/IP note:** Copy and data arrays are original for this project. Imagery uses `https://images.unsplash.com/...` garden/landscape stock via URL params. No trademarked assets from the reference theme are reproduced.

**Design tokens:**
- Primary green: `#4a7c2e` (deep garden)
- Accent green: `#8bc34a` (leaf)
- Cream bg: `#f5f1e8`
- Dark: `#1a2e1a`
- Body: `#4b5563`
- Radius: `rounded-2xl` cards, `rounded-full` pills
- Shadow: `shadow-[0_8px_30px_rgba(0,0,0,0.06)]`
- Type: headings `font-serif` (Playfair Display via Google Fonts CSS), body `font-sans` (Inter)

---

## Task 1: Reset existing scaffolding

**Files:**
- Delete: `src/pages/About.jsx` (old placeholder)
- Modify: `src/App.jsx` (drop About route, single-page for now)
- Modify: `src/index.css`, `src/App.css` (replace with Tailwind-compatible base)

- [ ] Remove `src/pages/About.jsx`
- [ ] Rewrite `src/App.jsx` to import one `Home` page from `src/pages/Home.jsx`
- [ ] Empty `src/App.css` (Tailwind handles utilities)

## Task 2: Install Tailwind CSS v4

**Files:**
- Modify: `package.json`
- Modify: `vite.config.js`
- Modify: `src/index.css`

- [ ] Run `npm i -D tailwindcss @tailwindcss/vite`
- [ ] Add `tailwindcss()` to Vite plugins
- [ ] Replace `src/index.css` with:
  ```css
  @import 'tailwindcss';

  @theme {
    --color-primary: #4a7c2e;
    --color-primary-dark: #365a1f;
    --color-accent: #8bc34a;
    --color-cream: #f5f1e8;
    --color-ink: #1a2e1a;
    --font-serif: 'Playfair Display', 'Georgia', serif;
    --font-sans: 'Inter', system-ui, sans-serif;
  }
  ```
- [ ] Add Google Fonts `<link>` for Playfair Display + Inter in `index.html`
- [ ] Run `npm run build` to confirm Tailwind compiles

## Task 3: Create component skeleton files

All components receive no props; content arrays live inside each file.

- [ ] Create empty exported components for: `Header`, `Hero`, `Services`, `About`, `Features`, `Projects`, `Process`, `Testimonials`, `BlogSection`, `ContactSection`, `Footer`
- [ ] Create `src/pages/Home.jsx` that stacks all of them

## Task 4: Header, Hero, Footer (group A)

**Header** — sticky, white/translucent bg, shadow on scroll, logo "Gardenors" + leaf icon, nav links (Home / About / Services / Projects / Blog / Contact), "Get a Quote" pill CTA, hamburger on `md:hidden`.

**Hero** — full-bleed section, Unsplash landscape garden bg image, dark overlay, left-aligned content column: eyebrow pill ("Premium Landscaping"), serif `h1` ~64px, paragraph, two CTAs (filled primary + ghost), stats strip (projects / clients / years).

**Footer** — dark green (`bg-ink` or `bg-primary-dark`), 4-column grid: brand+blurb+socials / Quick Links / Services / Contact (phone, email, address), bottom bar with copyright + legal links.

## Task 5: Services, About, Features (group B)

**Services** — section with small eyebrow + big heading + subtitle, 3-column grid (md:grid-cols-3) of 6 cards: icon pill, title, short body, "Learn more →" link, hover lifts card with primary border.

**About** — 2-column layout (image collage on left, content on right), stacked images w/ overlapping accent shape, badge ("25+ Years Experience") on image, heading, paragraph, bulleted feature list (check icons), CTA.

**Features** (Why Choose Us) — cream bg, 4-card grid with big numbered icons, title, description. Centered header.

## Task 6: Projects, Process, Testimonials (group C)

**Projects** — filter pills (All, Residential, Commercial, Design), 3x2 image grid, hover overlay: dark gradient + title + category + arrow icon.

**Process** — horizontal 4-step layout with dashed connector line between circles, each step = numbered circle + title + paragraph.

**Testimonials** — 3 cards in a row, quote icon at top, paragraph quote, avatar + name + role, 5-star rating. Cream-tone bg.

## Task 7: BlogSection, ContactSection (group D)

**BlogSection** — 3 blog cards with image (rounded top), category badge, date, title, excerpt, author row. "View All Articles" button below.

**ContactSection** — 2-column: left = contact info (phone/email/address icons), map placeholder iframe (OpenStreetMap embed); right = form (name, email, phone, service select, message, submit). Green card bg.

## Task 8: Wire up Home page

- [ ] `Home.jsx` imports and renders all 11 components in order: Header, Hero, Services, About, Features, Projects, Process, Testimonials, BlogSection, ContactSection, Footer
- [ ] `App.jsx` has `<Route path="/" element={<Home />} />` and `<Route path="*" element={<Home />} />` (fallback-to-home on this single-page site)

## Task 9: Verify build + local preview

- [ ] Run `npm run build` — must pass with no errors
- [ ] Spot-check `dist/index.html` + asset sizes are reasonable

## Task 10: Commit and push

- [ ] Stage `src/`, `package.json`, `package-lock.json`, `index.html`, `vite.config.js`, `docs/`
- [ ] Commit with message describing the 11-section landing page
- [ ] `git push origin main`

---

## Self-Review checklist

- Every section listed in the user spec → a component exists (Header ✓, Hero ✓, Services ✓, About ✓, Features ✓, Projects ✓, Process ✓, Testimonials ✓, Blog ✓, Contact ✓, Footer ✓).
- No Bootstrap, no Framer Motion.
- Only Tailwind utility classes and one CSS file for `@theme`.
- Components are pure/stateless except Header (mobile menu toggle) and ContactSection (form state).
- Mobile: nav collapses, grids collapse to 1 col, hero stacks.
