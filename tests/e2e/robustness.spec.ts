import { test, expect } from "@playwright/test";

test.describe("sin JavaScript", () => {
  test.use({ javaScriptEnabled: false });
  test("todo se ve", async ({ page }) => {
    await page.goto("/");
    const sections = page.locator("main section");
    await expect(sections).toHaveCount(6);
    for (const s of await sections.all()) {
      await s.scrollIntoViewIfNeeded();
      await expect(s).toBeVisible();
      expect(await s.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
    }
  });
});

test.describe("con JavaScript", () => {
  test("las secciones aparecen al hacer scroll", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("html")).toHaveClass(/js-reveal/);
    const last = page.locator("main section").last();
    await last.scrollIntoViewIfNeeded();
    await expect(last).toHaveClass(/is-visible/);
    await expect.poll(() => last.evaluate((el) => getComputedStyle(el).opacity)).toBe("1");
  });
});

test.describe("pantalla de 320 px", () => {
  test.use({ viewport: { width: 320, height: 640 } });
  for (const path of ["/", "/en/"]) {
    test(`sin scroll horizontal (${path})`, async ({ page }) => {
      await page.goto(path);
      const [scroll, client] = await page.evaluate(() => [document.documentElement.scrollWidth, document.documentElement.clientWidth]);
      expect(scroll).toBeLessThanOrEqual(client);
    });
  }
});

test.describe("reduced motion", () => {
  test.use({ reducedMotion: "reduce" });
  test("sin transiciones en las secciones", async ({ page }) => {
    await page.goto("/");
    for (const s of await page.locator("main section").all()) {
      expect(await s.evaluate((el) => getComputedStyle(el).transitionDuration)).toMatch(/^0s(, 0s)*$/);
    }
  });
});
