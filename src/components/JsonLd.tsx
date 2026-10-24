// components/JsonLd.tsx
// Server component (no "use client"). Emits JSON-LD only for facts that exist in SITE
// and are visible/accurate on the page. Unknown optional fields are omitted, never guessed.
// Reference: Appendix A of SEO Master Prompt

import React from "react";
import { SITE } from "@/lib/site";

type Json = Record<string, unknown>;
export type FaqItem = { q: string; a: string };
export type Crumb = { name: string; path: string };

type Props =
  | { type: "root" }
  // areaServed must contain ONLY cities with serviceConfirmed: true
  | { type: "business"; areaServed?: string[] }
  | { type: "service"; serviceType: string; path: string; areaServed?: string[] }
  // Question/answer text must match the visible FAQ text exactly
  | { type: "faq"; items: FaqItem[] }
  | { type: "breadcrumb"; crumbs: Crumb[] }
  | { data: Record<string, unknown> };

const abs = (path: string) => `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;

// Recursively drop undefined, null, empty strings, empty arrays and empty objects.
function compact<T>(value: T): T | undefined {
  if (Array.isArray(value)) {
    const arr = value.map((v) => compact(v)).filter((v) => v !== undefined);
    return (arr.length ? arr : undefined) as T | undefined;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value as Json)
      .map(([k, v]) => [k, compact(v)] as const)
      .filter(([, v]) => v !== undefined);
    return (entries.length ? Object.fromEntries(entries) : undefined) as T | undefined;
  }
  if (value === null || value === undefined || value === "") return undefined;
  return value;
}

const cities = (names?: string[]) =>
  names?.map((name) => ({ "@type": "City", name }));

function build(props: Props): Json | undefined {
  if ('data' in props) return props.data as Json;

  const BIZ_ID = `${SITE.url}/#business`;
  const ORG_ID = `${SITE.url}/#organization`;

  switch (props.type) {
    case "root":
      return {
        "@context": "https://schema.org",
        "@graph": [
          { "@type": "WebSite", "@id": `${SITE.url}/#website`, name: SITE.name, url: SITE.url },
          {
            "@type": "Organization",
            "@id": ORG_ID,
            name: SITE.name,
            url: SITE.url,
            logo: SITE.logo,
            telephone: SITE.phone,
            email: SITE.email,
            sameAs: [
              ...Object.values(SITE.social ?? {}),
              SITE.googleBusinessUrl,
            ].filter(Boolean),
          },
        ],
      };
    case "business": {
      const sameAsList = [
        ...Object.values(SITE.social ?? {}),
        SITE.googleBusinessUrl,
      ].filter(Boolean);

      // LocalBusiness is the business entity; TaxiService is the service it provides.
      return {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LocalBusiness",
            "@id": BIZ_ID,
            name: SITE.name,
            url: SITE.url,
            telephone: SITE.phone,
            email: SITE.email,
            image: SITE.image,
            sameAs: sameAsList.length ? sameAsList : undefined,
            address: SITE.address && {
              "@type": "PostalAddress",
              streetAddress: SITE.address.street,
              addressLocality: SITE.address.city,
              addressRegion: SITE.address.state,
              postalCode: SITE.address.postalCode,
              addressCountry: SITE.address.country,
            },
            geo: SITE.geo && {
              "@type": "GeoCoordinates",
              latitude: SITE.geo.lat,
              longitude: SITE.geo.lng,
            },
            hasMap: SITE.googleBusinessUrl,
            openingHoursSpecification: SITE.open24x7
              ? {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday", "Tuesday", "Wednesday", "Thursday",
                    "Friday", "Saturday", "Sunday",
                  ],
                  opens: "00:00",
                  closes: "23:59",
                }
              : undefined,
            areaServed: cities(props.areaServed),
            // Deliberately NO priceRange, aggregateRating or review (unverified / self-serving).
          },
          {
            "@type": "TaxiService",
            "@id": `${SITE.url}/#taxi-service`,
            name: `${SITE.name} taxi service`,
            serviceType: "Taxi and cab service",
            provider: { "@id": BIZ_ID },
            areaServed: cities(props.areaServed),
            sameAs: sameAsList.length ? sameAsList : undefined,
          },
        ],
      };
    }
    case "service":
      return {
        "@context": "https://schema.org",
        "@type": "Service",
        serviceType: props.serviceType,
        url: abs(props.path),
        provider: { "@id": BIZ_ID },
        areaServed: cities(props.areaServed),
        // Deliberately NO offers / prices: quotes are given on request.
      };
    case "faq":
      return props.items.length
        ? {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: props.items.map(({ q, a }) => ({
              "@type": "Question",
              name: q,
              acceptedAnswer: { "@type": "Answer", text: a },
            })),
          }
        : undefined;
    case "breadcrumb":
      return props.crumbs.length
        ? {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: props.crumbs.map((c, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: c.name,
              item: abs(c.path),
            })),
          }
        : undefined;
  }
}

export default function JsonLd(props: Props) {
  const schema = compact(build(props));
  if (!schema) return null;
  // Escape "<" so content can never close the script tag.
  const json = JSON.stringify(schema).replace(/</g, "\\u003c");
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
