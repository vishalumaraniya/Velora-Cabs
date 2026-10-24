# Private Owner Confirmation Checklist & Implementation Backlog

> **Document Status:** Active Tracking  
> **Rule:** Antigravity must never guess these facts or publish unverified placeholders. All fields below remain `undefined` in `src/lib/site.ts` and suppressed in public schemas and UI until confirmed by Dharmeshbhai B. Kava / Business Owner.

---

## Appendix C: 12 Owner Confirmation Inquiries

| # | Item to Confirm | Current Status | Code Impact / Action |
|---|---|---|---|
| 1 | **Confirmed Service Cities & Routes** | Partially Confirmed (Bhavnagar HQ + Priority routes) | Candidate city and route pages have `serviceConfirmed: false` except Bhavnagar and confirmed priority routes (Bhavnagar–Ahmedabad, Vadodara, Surat, Mumbai, Palitana). |
| 2 | **24x7 Round-The-Clock Service** | Pending Confirmation | `SITE.open24x7` set to `undefined`. `openingHoursSpecification` in JSON-LD is omitted until verified. |
| 3 | **Fares & Inclusions/Exclusions** | Pending Confirmation | Per-km rates are not displayed. CTAs route to "Request a quote on WhatsApp". Toll, parking, state tax, and night charge policies must be supplied before listing prices. |
| 4 | **Cancellation & Waiting Policy** | Pending Confirmation | Legal policy pages (`/privacy-policy`, `/terms-and-conditions`) kept in draft mode (`noindex`, omitted from sitemap). Neutral customer copy used: "please confirm before booking". |
| 5 | **Public Business Address & Map** | Pending Confirmation | Street address and postal code omitted from `SITE.address`. Schema emits locality "Bhavnagar", "Gujarat", "IN" without fake street names. |
| 6 | **Google Review URL & Rating Count** | Pending Confirmation | Live GBP rating and count needed. If live GBP confirms 4.2, visible text links to Google profile. `SITE.googleReviewUrl` is pending. |
| 7 | **Customer Testimonials & Permission** | Pending Confirmation | Fake names and stock photos removed. `src/lib/reviews.ts` initialized to empty array `[]`. Testimonials section renders Google reviews link or is suppressed. |
| 8 | **Trip Count & Marketing Claims Proof** | Pending Confirmation | Replaced "15,000+ Happy Commuters" with defensible "Trusted by thousands of travellers across Gujarat". "Zero Delay" softened to "On-time pickup focus". |
| 9 | **Vehicle Seating & Luggage Capacity** | Pending Confirmation | Dzire (4 pass), Ertiga (6-7 pass), Tempo Traveller (12-17 pass) need final seating and boot capacity verification. |
| 10 | **Domain Primary & Ownership** | Defaulted to `www.veloracabs.in` | Confirmation needed if `veloracabs.com` is owned to ensure external 301 is configured in registrar. |
| 11 | **GA4 ID & Search Console Access** | Pending Access | `SITE.gaId` and `SITE.gscVerification` left `undefined`. Verification tags not emitted. |
| 12 | **Legal Policy Approvals** | Pending Review | Privacy Policy, Terms & Conditions drafted in plain language; will be published only after owner review. |

---

## Log of Omitted & Guarded Fields in `src/lib/site.ts`
- `SITE.address.street`: Omitted (`undefined`)
- `SITE.address.postalCode`: Omitted (`undefined`)
- `SITE.geo`: Omitted (`undefined`)
- `SITE.googleBusinessUrl`: Omitted (`undefined`)
- `SITE.googleReviewUrl`: Omitted (`undefined`)
- `SITE.rating`: Omitted (`undefined`)
- `SITE.open24x7`: Omitted (`undefined`)
- `SITE.gaId`: Omitted (available via env `NEXT_PUBLIC_GA_ID`)
- `SITE.gscVerification`: Omitted (`undefined`)
- `SITE.social.facebook`: Omitted (`undefined`)
- `SITE.social.youtube`: Omitted (`undefined`)
- `SITE.claimsConfirmed`: `false`
- `SITE.stats.trips`: Omitted (`undefined`)
