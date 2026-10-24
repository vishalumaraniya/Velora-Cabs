'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * ScrollToTop ensures that when navigating between pages (e.g. from home to a route or city),
 * the window scroll position is immediately and reliably reset to the top (0, 0),
 * avoiding carrying over scroll offsets from the previous page.
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // Only reset if navigating without a hash (e.g. #inquiry or #routes)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
