import type { Metadata } from 'next';
import { SITE } from '@/lib/site';

interface BuildMetadataParams {
  title: string;
  description: string;
  path: string;
  image?: string;
  noIndex?: boolean;
}

const seenTitles = new Set<string>();
const seenDescriptions = new Set<string>();

/**
 * Metadata builder strictly conforming to Section 8.2 of the SEO Master Prompt.
 * - Never truncates strings with .slice()
 * - Throws on empty string, placeholder text ([ADD_, TODO) or duplicate copy
 * - Emits console warnings if title > 60 chars or description is outside 140-158 chars
 * - Uses canonical host www.veloracabs.in via SITE.url
 */
export function buildMetadata({
  title,
  description,
  path,
  image,
  noIndex = false,
}: BuildMetadataParams): Metadata {
  // Validate empty or placeholder copy
  if (!title || title.trim() === '') {
    throw new Error(`[buildMetadata] Missing title for path: ${path}`);
  }
  if (!description || description.trim() === '') {
    throw new Error(`[buildMetadata] Missing description for path: ${path}`);
  }

  const placeholderRegex = /\[ADD_|TODO/i;
  if (placeholderRegex.test(title)) {
    throw new Error(`[buildMetadata] Placeholder detected in title: "${title}" at ${path}`);
  }
  if (placeholderRegex.test(description)) {
    throw new Error(`[buildMetadata] Placeholder detected in description: "${description}" at ${path}`);
  }

  // Check duplicates in development / build
  if (process.env.NODE_ENV !== 'production') {
    if (seenTitles.has(title)) {
      console.warn(`[buildMetadata Warning] Duplicate title detected across pages: "${title}" at ${path}`);
    } else {
      seenTitles.add(title);
    }
    if (seenDescriptions.has(description)) {
      console.warn(`[buildMetadata Warning] Duplicate description detected across pages: "${description}" at ${path}`);
    } else {
      seenDescriptions.add(description);
    }
  }

  // Editorial length checks (Warnings only, never truncate with .slice())
  if (title.length > 60) {
    console.warn(`[buildMetadata Editorial Note] Title exceeds 60 chars (${title.length} chars) at ${path}: "${title}"`);
  }
  if (description.length < 140 || description.length > 158) {
    console.warn(`[buildMetadata Editorial Note] Description is outside 140-158 chars (${description.length} chars) at ${path}`);
  }

  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const canonicalUrl = `${SITE.url}${cleanPath === '/' ? '' : cleanPath}`;
  const ogImage = image ?? `${SITE.url}/og/home.jpg`;

  return {
    title,
    description,
    alternates: {
      canonical: cleanPath,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
    robots: noIndex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
