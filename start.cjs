// start.cjs - CommonJS wrapper to force NODE_ENV before ESM loads
process.env.NODE_ENV = 'production';

// Now launch the actual server
import('./.output/server/index.mjs').catch(err => {
  console.error('Failed to start:', err);
  process.exit(1);
});