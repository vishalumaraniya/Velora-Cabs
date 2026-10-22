// Google Analytics 4 event tracking helper
// Safely checks for window.gtag before calling

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void;
  }
}

export type EventLocation =
  | 'header'
  | 'hero'
  | 'footer'
  | 'route_page'
  | 'city_page'
  | 'contact'
  | 'about'
  | 'floating_button'
  | 'services'
  | 'fleet'
  | 'faq'
  | 'blog'
  | 'cta_band';

export function trackEvent(
  eventName: 'call_click' | 'whatsapp_click' | 'form_submit' | 'instagram_click',
  params?: { location?: EventLocation; [key: string]: unknown }
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch {
      // Ignore analytics failures silently
    }
  }
}
