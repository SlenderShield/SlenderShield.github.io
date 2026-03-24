/**
 * Google Analytics utility module
 * Handles initialization and tracking of page views and events
 */

/**
 * Initialize Google Analytics
 * Should be called once on app startup
 */
export function initializeGA() {
  // Only initialize in production
  if (import.meta.env.MODE !== 'production') {
    console.log('[GA] Skipping initialization in development mode');
    return;
  }

  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  if (!measurementId) {
    console.warn('[GA] Measurement ID not configured. Set VITE_GA_MEASUREMENT_ID env variable.');
    return;
  }

  // Install gtag script dynamically
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    (window.dataLayer as unknown[]).push(args);
  }
  (window as unknown as Record<string, unknown>).gtag = gtag;
  gtag('js', new Date());
  gtag('config', measurementId, {
    page_path: window.location.pathname,
  });

  console.log(`[GA] Initialized with measurement ID: ${measurementId}`);
}

/**
 * Track a page view
 * Called when route changes in SPA
 */
export function trackPageView(path: string) {
  if (import.meta.env.MODE !== 'production') {
    console.log(`[GA] Page view (dev): ${path}`);
    return;
  }

  if (typeof window === 'undefined' || !(window as unknown as Record<string, unknown>).gtag) {
    return;
  }

  const gtag = (window as unknown as Record<string, unknown>).gtag as (...args: unknown[]) => void;
  gtag('event', 'page_view', {
    page_path: path,
    page_title: document.title,
  });
}

/**
 * Track a custom event
 */
export function trackEvent(eventName: string, eventData?: Record<string, unknown>) {
  if (import.meta.env.MODE !== 'production') {
    console.log(`[GA] Event (dev): ${eventName}`, eventData);
    return;
  }

  if (typeof window === 'undefined' || !(window as unknown as Record<string, unknown>).gtag) {
    return;
  }

  const gtag = (window as unknown as Record<string, unknown>).gtag as (...args: unknown[]) => void;
  gtag('event', eventName, eventData);
}

/**
 * TypeScript declaration for gtag global
 */
declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
