// app.js - GoDaddy / Phusion Passenger Entry Point
import { existsSync, readdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

console.log('=== APP STARTUP DEBUG ===');
console.log('Node version:', process.version);
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('CWD:', process.cwd());
console.log('__dirname:', __dirname);

// Check .output folder exists
const outputPath = resolve(__dirname, '.output');
const serverEntry = resolve(__dirname, '.output/server/index.mjs');

console.log('.output exists:', existsSync(outputPath));
console.log('.output/server/index.mjs exists:', existsSync(serverEntry));

// List .output contents
if (existsSync(outputPath)) {
  console.log('.output contents:', readdirSync(outputPath));
} else {
  console.error('ERROR: .output folder missing! Build was not uploaded.');
  process.exit(1);
}

// Check for jsx-dev-runtime in bundle (dev build indicator)
import { readFileSync } from 'fs';
if (existsSync(serverEntry)) {
  const content = readFileSync(serverEntry, 'utf8').slice(0, 500);
  const hasJsxDev = content.includes('jsx-dev-runtime') || readFileSync(serverEntry, 'utf8').includes('jsxDEV');
  console.log('Bundle contains jsxDEV (dev build):', hasJsxDev);
}

// Check React version being loaded
try {
  const reactPkg = resolve(__dirname, 'node_modules/react/package.json');
  if (existsSync(reactPkg)) {
    const pkg = JSON.parse(readFileSync(reactPkg, 'utf8'));
    console.log('React version in node_modules:', pkg.version);
  } else {
    console.log('React not found in node_modules (expected for self-contained Nitro build)');
  }
} catch (e) {
  console.log('Could not read React version:', e.message);
}

console.log('=== STARTING SERVER ===');

(async () => {
  try {
    await import('./.output/server/index.mjs');
    console.log('Server started successfully');
  } catch (error) {
    console.error('=== SERVER START FAILED ===');
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error stack:', error.stack);
    process.exit(1);
  }
})();