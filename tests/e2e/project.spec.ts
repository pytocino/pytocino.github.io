import { test, expect } from "@playwright/test";

for (const { path, id, banned } of [
  { path: "/", id: "beerfinder", banned: "usuarios" },
  { path: "/en/", id: "beerfinder", banned: "users" },
]) {
  test(`BeerFinder con capturas, tiendas y diagrama (${path})`, async ({ page }) => {
    await page.goto(path);
    const section = page.locator(`#${id}`);
    const imgs = section.locator("img");
    await expect(imgs).toHaveCount(4);
    for (const img of await imgs.all()) {
      expect((await img.getAttribute("alt"))?.trim()).toBeTruthy();
      expect(await img.getAttribute("src")).toMatch(/\.(webp|avif)$/);
    }
    for (const href of [
      "https://apps.apple.com/es/app/beerfinder/id6793606688",
      "https://play.google.com/store/apps/details?id=es.beerfinder.app",
      "https://beerfinder.es",
    ]) {
      await expect(section.locator(`a[href="${href}"]`)).toHaveCount(1);
    }
    const svg = section.locator('svg[role="img"]');
    await expect(svg).toHaveCount(1);
    await expect(svg.locator("title")).toHaveCount(1);
    expect((await section.innerText()).toLowerCase()).not.toContain(banned);
  });
}
