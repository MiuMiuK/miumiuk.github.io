const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN;
const plausibleSrc =
  import.meta.env.VITE_PLAUSIBLE_SRC ||
  'https://plausible.io/js/script.file-downloads.hash.outbound-links.pageview-props.tagged-events.js';

let analyticsInitialized = false;

export function initializeAnalytics() {
  if (
    analyticsInitialized ||
    !plausibleDomain ||
    typeof document === 'undefined'
  ) {
    return;
  }

  if (document.querySelector('script[data-analytics-provider="plausible"]')) {
    analyticsInitialized = true;
    return;
  }

  const script = document.createElement('script');
  script.defer = true;
  script.dataset.analyticsProvider = 'plausible';
  script.dataset.domain = plausibleDomain;
  script.src = plausibleSrc;
  document.head.appendChild(script);
  analyticsInitialized = true;
}

export function trackPageview(url) {
  if (
    !plausibleDomain ||
    typeof window === 'undefined' ||
    typeof window.plausible !== 'function'
  ) {
    return;
  }

  window.plausible('pageview', { u: url });
}
