import fs from 'fs';

const fileContent = fs.readFileSync('public/analytics-performance.json', 'utf8');
const lottie = JSON.parse(fileContent);

let modifiedCount = 0;

function processObject(obj: any) {
  if (!obj || typeof obj !== 'object') return;

  // In Lottie, color properties typically look like { "a": 0, "k": [r, g, b, a], "ix": ... }
  // We check if "k" is an array of numbers representing a color
  if (obj.k !== undefined && Array.isArray(obj.k)) {
    const isColor = (obj.k.length === 3 || obj.k.length === 4) &&
                    obj.k.every((v: any) => typeof v === 'number' && v >= 0 && v <= 1);
    
    if (isColor) {
      const r = obj.k[0];
      const g = obj.k[1];
      const b = obj.k[2];
      
      // If the color is blue-dominant (blue is higher than red, and it's not a grayscale black/white)
      if (b > r && b > 0.15) {
        const newR = b;
        const newG = b * 0.48 + Math.max(0, g - r) * 0.3; // Gold-orange mix
        const newB = r * 0.12; // Lower blue channel for high saturation orange
        
        obj.k[0] = Number(newR.toFixed(4));
        obj.k[1] = Number(newG.toFixed(4));
        obj.k[2] = Number(newB.toFixed(4));
        modifiedCount++;
      }
    }
  }

  for (const key in obj) {
    processObject(obj[key]);
  }
}

processObject(lottie);

fs.writeFileSync('public/analytics-performance.json', JSON.stringify(lottie, null, 2), 'utf8');
console.log(`Recolored ${modifiedCount} colors to orange/gold theme in public/analytics-performance.json`);
