// Google Analytics 4 event tracking helper
// Safely checks for window.gtag before calling
// Strictly conforms to Section 2.14 of SEO Master Prompt

declare global {
  interface Window {
    gtag?: (
      command: 'event',
      eventName: string,
      eventParams?: Record<string, unknown>
    ) => void;
  }
}

export type AnalyticsEventName =
  | 'click_call'
  | 'click_whatsapp'
  | 'submit_booking_form'
  | 'call_click'      // legacy alias
  | 'whatsapp_click'  // legacy alias
  | 'form_submit';    // legacy alias

export function trackEvent(
  eventName: AnalyticsEventName,
  params?: Record<string, unknown>
) {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    try {
      window.gtag('event', eventName, params);
    } catch {
      // Ignore analytics failures silently
    }
  }
}

export function trackCallClick(location: string = 'general') {
  trackEvent('click_call', { event_category: 'engagement', location });
  trackEvent('call_click', { location });
}

export function trackWhatsAppClick(location: string = 'general', details?: Record<string, unknown>) {
  trackEvent('click_whatsapp', { event_category: 'engagement', location, ...details });
  trackEvent('whatsapp_click', { location, ...details });
}

export function trackBookingSubmit(details: {
  trip_type?: string;
  route?: string;
  vehicle?: string;
  [key: string]: unknown;
}) {
  trackEvent('submit_booking_form', {
    event_category: 'conversion',
    trip_type: details.trip_type,
    route: details.route,
    vehicle: details.vehicle,
  });
  trackEvent('form_submit', { location: 'booking_form' });
}
