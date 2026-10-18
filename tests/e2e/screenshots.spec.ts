import { test } from "@playwright/test";

// No asserta nada: deja capturas de página completa para la revisión visual.
for (const path of ["/", "/en/"]) {
  test(`captura ${path}`, async ({ page }, testInfo) => {
    await page.goto(path);
    for (const s of await page.locator("main section").all()) await s.scrollIntoViewIfNeeded();
    await page.waitForTimeout(700);
    const name = `${testInfo.project.name}-${path === "/" ? "es" : "en"}.png`;
    await page.screenshot({ path: `test-results/screenshots/${name}`, fullPage: true });
  });
}
