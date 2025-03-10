import test, { expect } from "@playwright/test";

test("navigation menu button", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  const navigation = await page.getByText("home"); // case insensitive test
  await expect(navigation).toBeVisible();
});

test("navigation menu button Click", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByText("home").click();
});

test("hero section", async ({ page }) => {
  await page.goto("http://localhost:3000/");
  await page.getByRole('heading', { name: 'We Provide Best Quality and' })
});
