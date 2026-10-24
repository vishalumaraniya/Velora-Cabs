/**
 * Schema.org runtime guard utilities
 * Strictly conforms to Section 4 of the SEO Master Prompt.
 */

import { SiteConfig } from '@/lib/site';

export interface AggregateRatingSchema {
  '@type': 'AggregateRating';
  ratingValue: number;
  reviewCount: number;
  bestRating: 5;
  worstRating: 1;
}

/**
 * Returns an AggregateRating object ONLY if rating is verified with a positive integer count
 * and value is strictly between 1 and 5. Otherwise returns undefined.
 * By default, this is NOT attached to the business's own local schema to prevent Google manual actions.
 */
export function buildAggregateRating(
  rating?: SiteConfig['rating']
): AggregateRatingSchema | undefined {
  if (!rating) return undefined;
  const { value, count } = rating;
  if (
    typeof value === 'number' &&
    typeof count === 'number' &&
    Number.isInteger(count) &&
    count > 0 &&
    value >= 1 &&
    value <= 5
  ) {
    return {
      '@type': 'AggregateRating',
      ratingValue: value,
      reviewCount: count,
      bestRating: 5,
      worstRating: 1,
    };
  }
  return undefined;
}
