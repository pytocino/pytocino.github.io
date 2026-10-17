import { test, expect } from "@playwright/test";

for (const path of ["/", "/en/"]) {
  test(`metadatos (${path})`, async ({ page }) => {
    await page.goto(path);
    await expect(page).toHaveTitle(/Pedro David García/);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", /.{60,}/);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `https://pytocino.github.io${path}`);
    for (const lang of ["es", "en", "x-default"]) {
      await expect(page.locator(`link[rel="alternate"][hreflang="${lang}"]`)).toHaveCount(1);
    }
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", /^https:\/\/pytocino\.github\.io\/og\/og-(es|en)\.png$/);
    const ld = JSON.parse((await page.locator('script[type="application/ld+json"]').textContent()) ?? "{}");
    expect(ld["@type"]).toBe("Person");
    expect(ld.sameAs).toEqual(expect.arrayContaining(["https://www.linkedin.com/in/pedrodavidgarcialopez", "https://github.com/pytocino"]));
  });
}

test("sin enlaces internos rotos", async ({ page, request }) => {
  const hrefs = new Set<string>();
  for (const path of ["/", "/en/"]) {
    await page.goto(path);
    for (const a of await page.locator('a[href^="/"]').all()) {
      hrefs.add((await a.getAttribute("href"))!.split("#")[0]!);
    }
  }
  expect(hrefs.size).toBeGreaterThan(2);
  for (const href of hrefs) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});

test("los CV son PDF", async ({ request }) => {
  for (const href of ["/cv/CV-PedroDavidGarcia-ES.pdf", "/cv/CV-PedroDavidGarcia-EN.pdf"]) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
    expect((await res.body()).subarray(0, 5).toString()).toBe("%PDF-");
  }
});

test("sitemap y robots", async ({ request }) => {
  expect((await request.get("/sitemap-index.xml")).status()).toBe(200);
  const sitemap = await (await request.get("/sitemap-0.xml")).text();
  expect(sitemap).toContain("https://pytocino.github.io/en/");
  expect(sitemap).not.toContain("/print/");
  expect(await (await request.get("/robots.txt")).text()).toContain("Sitemap: https://pytocino.github.io/sitemap-index.xml");
});
