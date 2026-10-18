import { test, expect } from "@playwright/test";

test.describe("móvil sin JavaScript", () => {
  test.use({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  test("no se muestra un botón de menú que no funciona", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator(".nav__toggle")).toBeHidden();
  });
});

test("el selector de idioma lleva a la sección que se está viendo", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" }); // scroll instantáneo: el suave seguiría animándose
  await page.goto("/en/");
  await page.locator('#nav-menu a[href="#experience"]').evaluate((a: HTMLElement) => a.click());
  await expect(page).toHaveURL(/#experience$/);
  await page.mouse.move(200, 400);
  await page.mouse.wheel(0, 20000); // scroll del usuario hasta el final (Contact)
  await expect.poll(() => page.evaluate(() => scrollY + innerHeight >= document.documentElement.scrollHeight - 2)).toBe(true);
  // click() de Playwright desplaza la página para "mostrar" el enlace de la barra fija; un toque real no lo hace.
  await page.getByRole("link", { name: "ES", exact: true }).evaluate((a: HTMLElement) => a.click());
  await expect(page).toHaveURL(/\/#contacto$/);
});

test("arriba del todo, el cambio de idioma va al inicio", async ({ page }) => {
  await page.goto("/en/");
  await page.getByRole("link", { name: "ES", exact: true }).click();
  await expect(page).toHaveURL(/\/$/);
});

test("Escape cierra el menú y devuelve el foco al botón", async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== "mobile", "solo móvil");
  await page.goto("/");
  const toggle = page.locator(".nav__toggle");
  await toggle.click();
  await page.locator("#nav-menu a").first().focus();
  await page.keyboard.press("Escape");
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
  await expect(toggle).toBeFocused();
});

test("el diagrama refleja la arquitectura real", async ({ page }) => {
  await page.goto("/");
  const svg = page.locator("#beerfinder svg");
  for (const label of ["App móvil", "Web y paneles", "API Laravel 13", "MySQL", "Cloudflare R2", "Expo Push"]) {
    await expect(svg).toContainText(label);
  }
  await expect(svg).not.toContainText("Redis");
});

test("la terminal no lleva un aria-label sin rol", async ({ page }) => {
  await page.goto("/");
  const terminal = page.locator("#contacto .terminal");
  const [label, role] = await terminal.evaluate((el) => [el.getAttribute("aria-label"), el.getAttribute("role") ?? el.tagName.toLowerCase()]);
  expect(label === null || role !== "div").toBe(true);
});

test("iconos para navegadores antiguos e iOS", async ({ page, request }) => {
  await page.goto("/");
  const touch = await page.locator('link[rel="apple-touch-icon"]').getAttribute("href");
  expect(touch).toBeTruthy();
  for (const href of ["/favicon.ico", touch!]) {
    const res = await request.get(href);
    expect(res.status(), href).toBe(200);
  }
});
