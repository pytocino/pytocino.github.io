// Genera los CV en PDF y las imágenes Open Graph a partir de las páginas /print/,
// y los iconos (favicon.ico y apple-touch-icon.png) a partir de public/favicon.svg.
// Uso: npm run assets  (compila, sirve dist/ y escribe en public/cv y public/og).
import { spawn } from "node:child_process";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { chromium } from "playwright";

const port = 4399;
const server = spawn(process.execPath, ["tools/serve-dist.mjs"], { env: { ...process.env, PORT: String(port) }, stdio: "inherit" });
await new Promise((r) => setTimeout(r, 600));

const browser = await chromium.launch();
try {
  await mkdir("public/cv", { recursive: true });
  await mkdir("public/og", { recursive: true });
  for (const lang of ["es", "en"]) {
    const page = await browser.newPage();
    await page.goto(`http://localhost:${port}/print/cv/${lang}/`, { waitUntil: "networkidle" });
    await page.pdf({ path: `public/cv/CV-PedroDavidGarcia-${lang.toUpperCase()}.pdf`, format: "A4", printBackground: true, preferCSSPageSize: true });
    await page.setViewportSize({ width: 1200, height: 630 });
    await page.goto(`http://localhost:${port}/print/og/${lang}/`, { waitUntil: "networkidle" });
    await page.screenshot({ path: `public/og/og-${lang}.png`, clip: { x: 0, y: 0, width: 1200, height: 630 } });
    await page.close();
    console.log(`✔ ${lang}: CV y OG`);
  }
  await writeIcons(browser);
  console.log("✔ iconos");
} finally {
  await browser.close();
  server.kill();
}

/** Renderiza el SVG del favicon a PNG del tamaño pedido. */
async function renderIcon(browser, size, padded) {
  const svg = await readFile("public/favicon.svg", "utf8");
  const page = await browser.newPage({ viewport: { width: size, height: size } });
  const inner = padded ? `<div style="width:100%;height:100%;background:#161616;display:grid;place-items:center"><div style="width:78%;height:78%">${svg}</div></div>` : svg;
  await page.setContent(`<style>html,body{margin:0}svg{width:100%;height:100%;display:block}</style>${inner}`);
  const png = await page.screenshot({ omitBackground: !padded });
  await page.close();
  return png;
}

/** ICO con una sola imagen PNG de 32×32 (formato admitido desde Windows Vista). */
function pngToIco(png) {
  const header = Buffer.alloc(22);
  header.writeUInt16LE(0, 0); header.writeUInt16LE(1, 2); header.writeUInt16LE(1, 4);
  header.writeUInt8(32, 6); header.writeUInt8(32, 7); header.writeUInt8(0, 8); header.writeUInt8(0, 9);
  header.writeUInt16LE(1, 10); header.writeUInt16LE(32, 12);
  header.writeUInt32LE(png.length, 14); header.writeUInt32LE(22, 18);
  return Buffer.concat([header, png]);
}

async function writeIcons(browser) {
  await writeFile("public/apple-touch-icon.png", await renderIcon(browser, 180, true));
  await writeFile("public/favicon.ico", pngToIco(await renderIcon(browser, 32, false)));
}
