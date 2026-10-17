import { test, expect } from "@playwright/test";

test("secciones finales", async ({ page }) => {
  await page.goto("/");
  const groups = page.locator("#stack .stack__group");
  await expect(groups).toHaveCount(2);
  await expect(groups.first()).toContainText("Docker");
  await expect(page.locator("#formacion")).toContainText("Docker Certified Associate");
  await expect(page.locator("#formacion")).toContainText("Cambridge B2");
  await expect(page.locator('#contacto a[href="mailto:pedrodavidg88@gmail.com"]')).toHaveCount(1);
  await expect(page.locator("#contacto .terminal")).toContainText(/commit (local|[0-9a-f]{7}) · \d{4}-\d{2}-\d{2}/);
});
