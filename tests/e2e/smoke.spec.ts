import { test, expect } from "@playwright/test";

test("/ y /en/ responden con el idioma correcto", async ({ page }) => {
  const es = await page.goto("/");
  expect(es?.status()).toBe(200);
  await expect(page.locator("html")).toHaveAttribute("lang", "es");

  const en = await page.goto("/en/");
  expect(en?.status()).toBe(200);
  await expect(page.locator("html")).toHaveAttribute("lang", "en");

  const noSlash = await page.goto("/en");
  expect(noSlash?.status()).toBe(200);
});
