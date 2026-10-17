// Genera los CV en PDF y las imágenes Open Graph a partir de las páginas /print/.
// Uso: npm run assets  (compila, sirve dist/ y escribe en public/cv y public/og).
import { spawn } from "node:child_process";
import { mkdir } from "node:fs/promises";
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
} finally {
  await browser.close();
  server.kill();
}
