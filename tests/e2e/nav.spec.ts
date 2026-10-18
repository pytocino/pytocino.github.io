import { test, expect } from "@playwright/test";

test("la portada muestra titular, CTAs y 4 cifras", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toContainText("despliega");
  const hero = page.locator("#inicio");
  await expect(hero.getByRole("link", { name: "Descargar CV" })).toHaveAttribute("href", "/cv/CV-PedroDavidGarcia-ES.pdf");
  await expect(hero.getByRole("link", { name: "LinkedIn" })).toHaveAttribute("href", "https://www.linkedin.com/in/pedrodavidgarcialopez");
  await expect(hero.getByRole("link", { name: "GitHub" })).toHaveAttribute("href", "https://github.com/pytocino");
  await expect(page.locator(".bento > *")).toHaveCount(4);
});

test("el selector conserva la sección", async ({ page }) => {
  await page.goto("/en/#experience");
  await page.getByRole("link", { name: "ES", exact: true }).click();
  await expect(page).toHaveURL(/\/#experiencia$/);
});

test("menú móvil", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "solo móvil");
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Menú" });
  await toggle.click();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await page.locator("#nav-menu").getByRole("link", { name: "Stack" }).click();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/#stack$/);
});
