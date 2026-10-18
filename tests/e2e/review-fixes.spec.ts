import { test, expect } from "@playwright/test";

test("al imprimir se ven todas las secciones", async ({ page }) => {
  await page.goto("/");
  await page.emulateMedia({ media: "print" });
  for (const s of await page.locator("main section").all()) {
    expect(await s.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
  }
});

test("la portada no hace fundido al cargar", async ({ page }) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  expect(await page.locator("#inicio").evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
});

test("titular en inglés coherente", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.locator("h1")).toHaveText("DevOps & developer. I ship what I build.");
});

test("etiquetas del diagrama legibles en móvil", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const sizes = await page.locator("#beerfinder svg").evaluate((svg) => {
    const scale = svg.getBoundingClientRect().width / (svg as SVGSVGElement).viewBox.baseVal.width;
    return [...svg.querySelectorAll("text")].map((t) => parseFloat(getComputedStyle(t).fontSize) * scale);
  });
  expect(Math.min(...sizes)).toBeGreaterThanOrEqual(11);
});
