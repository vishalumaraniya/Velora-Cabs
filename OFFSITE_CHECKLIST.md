# Off-Site Checklist & External Actions (Velora Cabs)

> **Important Notice for Site Owner / Human Operator:**  
> These actions require account access to third-party platforms, domain registrars, and hosting consoles. Per the SEO Master Prompt rules, Antigravity does **NOT** have access to these accounts and cannot execute them autonomously. Each item is documented below with exact step-by-step instructions.

---

## 1. Domain & DNS 301 Redirects (Edge Layer)
**Status:** `NOT RUN / ACTION REQUIRED BY OWNER`

Configure all domain redirects strictly at the hosting/edge level (Vercel Domains or Cloudflare Rules). Only **ONE** layer may handle each redirect to prevent redirect loops.
- **Apex to www Redirect:**
  - Add `veloracabs.in` and `www.veloracabs.in` to Vercel Project → Settings → Domains.
  - Set `www.veloracabs.in` as the Primary domain.
  - Vercel will automatically issue a 301 permanent redirect from `https://veloracabs.in` to `https://www.veloracabs.in`.
- **Alternate Domain Redirect (if client owns veloracabs.com):**
  - Add `veloracabs.com` and `www.veloracabs.com` to the domain configuration.
  - Set them to 301 redirect all paths to the corresponding path on `www.veloracabs.in`.
- **Force HTTPS:**
  - Ensure SSL is provisioned and "Always Use HTTPS" is active.

---

## 2. Google Business Profile (GBP) Optimization
**Status:** `NOT RUN / ACTION REQUIRED BY OWNER`

1. **Category:** Set Primary Category to `Taxi service`. Add secondary categories: `Car rental`, `Airport shuttle service`.
2. **Business Name:** Use exactly `Velora Cabs` (avoid keyword stuffing such as "Velora Cabs Bhavnagar Taxi Best Cab").
3. **Service Areas:** Select the 14 service cities:
   - Bhavnagar, Ahmedabad, Vadodara, Surat, Bharuch, Dahej, Vapi, Daman, Dholera, Mumbai, Bhuj, Gandhidham, Amreli, Palitana.
4. **Physical Address:** If operating with a customer-facing physical office, verify the exact street address and postal code. If operating strictly on dispatch/service-area basis, hide the street address and specify service areas only.
5. **Website URL:** Set to `https://www.veloracabs.in`.
6. **Phone Number:** Set to `+91 87803 11279`.
7. **Operating Hours:** Set to `Open 24 hours` (upon business confirmation).
8. **Business Description (750 chars):** Highlight reliable AC cab service in Bhavnagar, airport transfers to Ahmedabad & Mumbai, outstation rides across Gujarat, clean sedans and family MUVs.
9. **Visual Assets:** Upload 10+ authentic photos of clean cabs (showing Dzire, Ertiga, Tempo Traveller), real drivers in uniform, and office premises.
10. **Review Management:** Generate a short Google Review link/QR code for customers and post replies to all reviews weekly.

---

## 3. Google Search Console & Bing Webmaster Tools
**Status:** `NOT RUN / ACTION REQUIRED BY OWNER`

1. **Google Search Console (GSC):**
   - Add a Domain property for `veloracabs.in` via DNS TXT record verification.
   - Alternatively, add the HTML verification token in `src/lib/site.ts` (`gscVerification`).
   - Submit sitemap: `https://www.veloracabs.in/sitemap.xml`.
   - Use URL Inspection tool on the live production site to request indexing for `/`, key service pages, and confirmed city/route pages.
   - Monitor Core Web Vitals and Search Console Coverage reports.
2. **Bing Webmaster Tools:**
   - Import the verified property from Google Search Console and confirm sitemap submission.

---

## 4. Google Analytics 4 (GA4) Setup
**Status:** `NOT RUN / ACTION REQUIRED BY OWNER`

1. Create a GA4 property for `www.veloracabs.in`.
2. Provide the Measurement ID (format: `G-XXXXXXXXXX`).
3. Add `NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"` to the Vercel Production Environment Variables.
4. Code is already configured to automatically load GA4 and fire custom events:
   - `click_call`
   - `click_whatsapp`
   - `submit_booking_form`

---

## 5. Local Citations & Directory Listings (Consistent NAP)
**Status:** `NOT RUN / ACTION REQUIRED BY OWNER`

Create listings with **identical Name, Address, and Phone (NAP)** matching `src/lib/site.ts`:
- **Name:** Velora Cabs
- **Phone:** +91 87803 11279
- **Website:** https://www.veloracabs.in
- **Platforms:**
  - Justdial (Bhavnagar cab & taxi service)
  - Sulekha
  - IndiaMART
  - TripAdvisor (Things to do / transportation)
  - Local Bhavnagar trade & business directories
  - Facebook Business Page (`https://www.facebook.com/...`)
  - YouTube Channel

---

## 6. Real Review Collection & Backlinks
**Status:** `NOT RUN / ACTION REQUIRED BY OWNER`

1. Send automated WhatsApp thank-you messages to completed rides with the direct Google review link.
2. Establish local tie-ups with hotels, corporate travel desks, and industrial contacts in Bhavnagar, Dahej, and Ankleshwar for natural local referral links.
