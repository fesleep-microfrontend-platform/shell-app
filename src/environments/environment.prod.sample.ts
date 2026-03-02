/**
 * Production federation config.
 * Copy this file to environment.prod.ts and set your real remote URLs.
 * environment.prod.ts is gitignored so your URLs are not committed.
 *
 *   cp src/environments/environment.prod.sample.ts src/environments/environment.prod.ts
 */
export const environment = {
  production: true,
  federation: {
    contact: 'https://your-contact-remote-url/remoteEntry.json',
    dashboard: 'https://your-dashboard-remote-url/remoteEntry.json',
  },
} as const;
