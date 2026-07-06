import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const input = path.join(__dirname, '../public/hero.webp');
const output = path.join(__dirname, '../public/hero.webp');

const BG_TARGETS = [
  { r: 255, g: 255, b: 255 },
  { r: 243, g: 244, b: 246 }, // gray-100
  { r: 250, g: 250, b: 248 }, // off-white
  { r: 248, g: 249, b: 250 },
];

function colorDistance(r, g, b, target) {
  return Math.sqrt((r - target.r) ** 2 + (g - target.g) ** 2 + (b - target.b) ** 2);
}

function minBgDistance(r, g, b) {
  return Math.min(...BG_TARGETS.map((t) => colorDistance(r, g, b, t)));
}

const { data, info } = await sharp(input).ensureAlpha().raw().toBuffer({ resolveWithObject: true });

const pixels = data;
const threshold = 42;
const softness = 18;

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  const spread = Math.max(r, g, b) - Math.min(r, g, b);
  const isNeutral = spread < 28;
  const isLight = r > 185 && g > 185 && b > 185;
  const dist = minBgDistance(r, g, b);

  if (isNeutral && isLight && dist < threshold + softness) {
    if (dist <= threshold) {
      pixels[i + 3] = 0;
    } else {
      const fade = (dist - threshold) / softness;
      pixels[i + 3] = Math.round(pixels[i + 3] * fade);
    }
  }
}

await sharp(pixels, {
  raw: { width: info.width, height: info.height, channels: 4 },
})
  .webp({ quality: 92, alphaQuality: 100, effort: 6 })
  .toFile(output);

console.log(`Wrote transparent hero: ${output} (${info.width}x${info.height})`);
