import { test, expect } from "@playwright/test";

test("SAES con 4 bloques desplegables", async ({ page }) => {
  await page.goto("/");
  const jobs = page.locator("#experiencia .job");
  await expect(jobs).toHaveCount(2);
  const saes = jobs.first();
  await expect(saes).toContainText("SAES");
  await expect(saes).toContainText("mar 2025");
  const details = saes.locator("details");
  await expect(details).toHaveCount(4);
  for (const d of await details.all()) await expect(d).not.toHaveAttribute("open");
  await saes.locator("summary").first().click();
  await expect(details.first()).toHaveAttribute("open", "");
  await expect(details.first().locator("li", { hasText: "Docker Swarm" })).toBeVisible();
});
