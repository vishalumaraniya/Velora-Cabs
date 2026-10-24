/**
 * Verified, permissioned customer reviews
 * Strictly conforms to Section 5.3 of the SEO Master Prompt.
 * Default is empty array [] until Dharmeshbhai B. Kava / Business Owner
 * provides real, permissioned customer reviews with accurate attribution.
 */

export interface CustomerReview {
  id: string;
  name: string;
  location: string;
  rating: number; // 1 to 5
  date: string;
  comment: string;
  route?: string;
  source?: 'google' | 'direct';
}

// Default: empty array per Section 5.3 rule
export const REVIEWS: CustomerReview[] = [];
