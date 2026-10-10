const sharp = require("sharp");
const path = require("path");

const ASSETS = path.join(__dirname, "..", "assets");

const GOLD = "#F59E0B";
const CYAN = "#38BDF8";
const CORE_BLACK = "#05070B";
const DEEP_SPACE = "#080B10";
const MIDNIGHT = "#0B1020";

// Concentric "ORYNEXA" mark: gold ring, cyan ring, gold core with glow.
function markSvg({ size, mono = false }) {
  const c = size / 2;
  const outerR = size * 0.34;
  const innerR = size * 0.225;
  const dotR = size * 0.085;
  const glowR = size * 0.16;

  const outerColor = mono ? "#FFFFFF" : GOLD;
  const innerColor = mono ? "#FFFFFF" : CYAN;
  const dotColor = mono ? "#FFFFFF" : GOLD;
  const outerOpacity = mono ? 0.9 : 0.85;
  const innerOpacity = mono ? 0.55 : 0.5;
  const glowOpacity = mono ? 0.25 : 0.35;

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${c}" cy="${c}" r="${glowR}" fill="${dotColor}" opacity="${glowOpacity}" />
      <circle cx="${c}" cy="${c}" r="${outerR}" fill="none" stroke="${outerColor}" stroke-width="${size * 0.028}" opacity="${outerOpacity}" />
      <circle cx="${c}" cy="${c}" r="${innerR}" fill="none" stroke="${innerColor}" stroke-width="${size * 0.018}" opacity="${innerOpacity}" />
      <circle cx="${c}" cy="${c}" r="${dotR}" fill="${dotColor}" />
    </svg>
  `;
}

function backgroundSvg(size) {
  return `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="g1" cx="73%" cy="14%" r="40%">
          <stop offset="0%" stop-color="${GOLD}" stop-opacity="0.22" />
          <stop offset="100%" stop-color="${GOLD}" stop-opacity="0" />
        </radialGradient>
        <radialGradient id="g2" cx="20%" cy="32%" r="45%">
          <stop offset="0%" stop-color="#10B981" stop-opacity="0.20" />
          <stop offset="100%" stop-color="#10B981" stop-opacity="0" />
        </radialGradient>
        <linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="${CORE_BLACK}" />
          <stop offset="42%" stop-color="${DEEP_SPACE}" />
          <stop offset="100%" stop-color="${MIDNIGHT}" />
        </linearGradient>
      </defs>
      <rect width="${size}" height="${size}" fill="url(#g3)" />
      <rect width="${size}" height="${size}" fill="url(#g2)" />
      <rect width="${size}" height="${size}" fill="url(#g1)" />
    </svg>
  `;
}

async function run() {
  // Main app icon: background + mark
  await sharp(Buffer.from(backgroundSvg(1024)))
    .composite([{ input: Buffer.from(markSvg({ size: 1024 })) }])
    .png()
    .toFile(path.join(ASSETS, "icon.png"));

  // Android adaptive icon background (no mark, fills the canvas)
  await sharp(Buffer.from(backgroundSvg(1024)))
    .png()
    .toFile(path.join(ASSETS, "android-icon-background.png"));

  // Android adaptive icon foreground (mark only, transparent, sized for safe zone)
  await sharp({
    create: { width: 1024, height: 1024, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: Buffer.from(markSvg({ size: 700 })), left: 162, top: 162 }])
    .png()
    .toFile(path.join(ASSETS, "android-icon-foreground.png"));

  // Android monochrome icon (white mark, transparent)
  await sharp({
    create: { width: 1024, height: 1024, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: Buffer.from(markSvg({ size: 700, mono: true })), left: 162, top: 162 }])
    .png()
    .toFile(path.join(ASSETS, "android-icon-monochrome.png"));

  // Splash icon (mark only, transparent)
  await sharp({
    create: { width: 1024, height: 1024, channels: 4, background: { r: 0, g: 0, b: 0, alpha: 0 } },
  })
    .composite([{ input: Buffer.from(markSvg({ size: 1024 })) }])
    .png()
    .toFile(path.join(ASSETS, "splash-icon.png"));

  // Favicon
  await sharp(Buffer.from(backgroundSvg(256)))
    .composite([{ input: Buffer.from(markSvg({ size: 256 })) }])
    .png()
    .toFile(path.join(ASSETS, "favicon.png"));

  console.log("Generated ORYNEXA app icons in", ASSETS);
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
