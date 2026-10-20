/**
 * MK Publicity Privacy-Compliant Analytics & Conversion Dispatcher
 * Aligned with Section 8.3 & AC-10 of Developer Implementation Report
 * Ensures NO Personally Identifiable Information (PII) is passed to analytics
 */

export const trackConversionEvent = (eventName, params = {}) => {
  try {
    // Sanitize parameters: remove any accidental PII (email, phone, name)
    const sanitizedParams = { ...params };
    delete sanitizedParams.name;
    delete sanitizedParams.email;
    delete sanitizedParams.phone;
    delete sanitizedParams.contact;
    delete sanitizedParams.message;

    // 1. Google Analytics 4 (gtag.js) if present
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', eventName, sanitizedParams);
    }

    // 2. Meta Pixel (fbq) if present
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      if (eventName === 'form_submit_success') {
        window.fbq('track', 'Lead', sanitizedParams);
      } else if (eventName === 'whatsapp_click' || eventName === 'phone_click') {
        window.fbq('track', 'Contact', sanitizedParams);
      } else {
        window.fbq('trackCustom', eventName, sanitizedParams);
      }
    }

    // 3. Custom DOM Event for internal telemetry / debugging
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('mk_analytics_event', {
        detail: { eventName, params: sanitizedParams, timestamp: new Date().toISOString() }
      }));
    }

    if (import.meta.env.DEV) {
      console.log(`[MK Analytics Event] ${eventName}:`, sanitizedParams);
    }
  } catch (err) {
    console.warn('[MK Analytics Error]', err);
  }
};

export const trackEvent = trackConversionEvent;

export default trackConversionEvent;
