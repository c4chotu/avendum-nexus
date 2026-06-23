import fs from 'fs';

const fileContent = fs.readFileSync('public/analytics-performance.json', 'utf8');
const lottie = JSON.parse(fileContent);

const colors = new Set<string>();

function traverse(obj: any) {
  if (!obj || typeof obj !== 'object') return;

  // In Lottie, color properties typically look like { "a": 0, "k": [r, g, b, a], "ix": ... }
  // or { "a": 1, "k": [keyframe, keyframe, ...] }
  // We look for objects with "c" property, or properties with arrays of 4 numbers between 0 and 1
  if (obj.k !== undefined && Array.isArray(obj.k)) {
    if (obj.k.length === 4 && obj.k.every((v: any) => typeof v === 'number' && v >= 0 && v <= 1)) {
      colors.add(JSON.stringify(obj.k.map((n: number) => Math.round(n * 255))));
    } else if (obj.k.length === 3 && obj.k.every((v: any) => typeof v === 'number' && v >= 0 && v <= 1)) {
      colors.add(JSON.stringify(obj.k.map((n: number) => Math.round(n * 255))));
    }
  }

  for (const key in obj) {
    traverse(obj[key]);
  }
}

traverse(lottie);

console.log("Found unique colors (in RGB 0-255 scale):");
console.log(Array.from(colors));
