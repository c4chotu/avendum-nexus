// Force production mode before anything loads
process.env.NODE_ENV = process.env.NODE_ENV || 'production';

import { existsSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('NODE_ENV:', process.env.NODE_ENV); // should now say production

const serverEntry = resolve(__dirname, '.output/server/index.mjs');

if (!existsSync(serverEntry)) {
  console.error('ERROR: .output/server/index.mjs not found!');
  process.exit(1);
}

(async () => {
  try {
    await import('./.output/server/index.mjs');
    console.log('Server started successfully');
  } catch (error) {
    console.error('Failed to start:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
})();