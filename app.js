// app.js - GoDaddy / Phusion Passenger Entry Point
// This file dynamically loads the built production Nitro/TanStack Start server.

(async () => {
  try {
    await import('./.output/server/index.mjs');
  } catch (error) {
    console.error('Failed to start application:', error);
  }
})();
