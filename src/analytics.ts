import TelemetryDeck from '@telemetrydeck/sdk';

// Cookieless page analytics. Only initialised when a TelemetryDeck app ID is
// configured at build time (VITE_TELEMETRYDECK_APP_ID on Netlify); without it
// nothing loads and nothing is sent. The client user is a random per-session
// value that never touches storage, so no visitor can be recognised across visits.
const appID = import.meta.env.VITE_TELEMETRYDECK_APP_ID as string | undefined;

let td: TelemetryDeck | null = null;

function sessionUser(): string {
  const bytes = new Uint8Array(16);
  crypto.getRandomValues(bytes);
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join('');
}

export function initAnalytics(): void {
  if (!appID || td) return;
  td = new TelemetryDeck({ appID, clientUser: sessionUser() });
}

export function trackPageView(path: string): void {
  if (!td) return;
  void td.signal('pageview', {
    path,
    referrer: document.referrer ? new URL(document.referrer).hostname : '',
  });
}

export function trackOutbound(target: string): void {
  if (!td) return;
  void td.signal('outbound', { target });
}
