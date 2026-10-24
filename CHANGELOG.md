# Changelog - Velora Cabs SEO & Website Master Execution

All notable changes to this project are documented in this file in reverse chronological order.

## [2026-10-23] - Master SEO Implementation (Sections 0–15 Complete)

### Added
- **Automated SEO Validator (`scripts/validate-seo.ts`):** Pre-build script verifying zero rogue domains (`veloracabs.com`), zero public placeholders (`[ADD_`, `TODO: owner`), strict canonical verification, layout configurations, slug referential integrity, and intro word counts (120+ words for cities, 150+ words for routes).
- **Section 8 & 8.1 Candidate City Pages (`src/data/cities.ts` & `src/app/taxi-service/[city]/page.tsx`):**
  - Typed `City` schema covering all 14 candidate cities with audience differentiation ("business", "industrial", "pilgrimage-leisure").
  - Rich, unique 130–150 word intros, 5 unique FAQs with schema, and local landmark hooks.
  - Anti-doorway enforcement: only pages with both `published: true` and `serviceConfirmed: true` are rendered, linked, and indexed; unconfirmed routes return 404.
- **Section 8.2 & 9 Priority Route Pages (`src/data/routes.ts` & `src/app/routes/[route]/page.tsx`):**
  - Typed `Route` schema covering 12 candidate routes with reverse slug relations, vehicle tips (Dzire, Ertiga, Tempo Traveller), inclusions/exclusions transparency, and 4 unique FAQs.
  - Replaced rejected 215 km distance with verified "approx. 170–200 km depending on route and road conditions" and "about 3.5–4.5 hours".
  - Anti-doorway enforcement returning 404 on unconfirmed routes.
- **Section 10 Blog Starter Posts (`src/data/blog.ts` & `src/app/blog/[slug]/page.tsx`):**
  - 3 comprehensive 700+ word guides:
    1. *Bhavnagar to Ahmedabad by Taxi: Distance, Time & Best Route*
    2. *Palitana Shatrunjaya Yatra Guide: Taxi & Tempo Traveller Tips*
    3. *One-Way vs Round-Trip Outstation Cab: Which Is Cheaper?*
  - Complete with `Article` schema, author, date, explicit image dimensions, and internal links to `/routes/*` and `/services/*`.
- **Core Site Configuration & Helpers:**
  - `src/lib/site.ts`: Typed single source of truth using `https://www.veloracabs.in` with safe omission of unconfirmed facts (`undefined`).
  - `src/lib/metadata.ts`: `buildMetadata` helper enforcing Next.js canonical metadata standards without string slicing.
  - `src/components/JsonLd.tsx`: Appendix A server component with recursive `compact()`, HTML character escaping, and strict exclusion of self-serving ratings.
  - `src/lib/analytics.ts`: GA4 client event tracking for `click_call`, `click_whatsapp`, and `submit_booking_form`.
- **Documentation & Tracking Artifacts:**
  - `OFFSITE_CHECKLIST.md`: External action plan covering Vercel 301 edge redirects, Google Business Profile, GSC/Bing, GA4, and local citations.
  - `IMPLEMENTATION_TODO.md`: Private tracking backlog of owner-confirmation items (Appendix C).
  - `SEO_AUDIT_REPORT.md`: Full claims audit table, Section 14 verification checks (all PASS), and Lighthouse Core Web Vitals audit.

### Changed & Migrated
- **Site Architecture & 301 Redirects (`next.config.ts`):**
  - Permanent 301 redirects configured for legacy paths to canonical Section 6 URLs:
    - `/cab-service/:city` → `/taxi-service/:city`
    - `/cab-service` → `/#cities`
    - `/taxi/:slug` → `/routes/:slug`
    - `/taxi` → `/#routes`
    - `/outstation-taxi` → `/services/outstation-taxi`
    - `/airport-taxi` → `/services/airport-taxi-transfer`
    - `/local-city-rides` → `/services/local-city-cab`
    - `/taxi-24x7` → `/services/24x7-cab-service`
- **Dynamic XML Sitemap (`src/app/sitemap.ts`):**
  - Aligned with Section 6 architecture, dynamically filtering only confirmed, published pages (`getConfirmedCities()`, `getConfirmedRoutes()`, `/services/*`, `/blog/*`).
  - Draft legal policies (`/privacy-policy`, `/terms`, `/cancellation-policy`) strictly excluded and kept `noindex`.
- **Navigation & Internal Linking (`src/components/Navbar.tsx` & `src/components/Footer.tsx`):**
  - Updated all menu items and footer links to use `/taxi-service/*`, `/routes/*`, and `/services/*`.
- **Content Claims & Brand Hygiene:**
  - Standardized canonical host `www.veloracabs.in` across the entire codebase (zero occurrences of `veloracabs.com`).
  - Corrected spelling of `Ahemdabad` to `Ahmedabad` in `src/lib/distance.ts`.
  - Softened unverified claims ("Zero Delay Guarantee", "100% Safety Verified", "Police Verified Drivers", "pan-India").
  - Replaced unverified 4.9 rating with verified 4.2 rating badge or neutral Google Review links.
