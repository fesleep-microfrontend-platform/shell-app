export const environment = {
  production: false,
  apiBaseUrl: 'http://localhost:8080',
  federation: {
    contact: 'http://localhost:4201/remoteEntry.json',
    dashboard: 'http://localhost:4202/remoteEntry.json',
    auth: 'http://localhost:4203/remoteEntry.json',
    catalog: 'http://localhost:4204/remoteEntry.json',
    orders: 'http://localhost:4205/remoteEntry.json',
  },
} as const;
