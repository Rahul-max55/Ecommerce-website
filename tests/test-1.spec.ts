import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Accessories Accessories' }).click();
  await page.locator('div').filter({ hasText: /^1$/ }).locator('path').nth(1).click();
  await page.getByRole('link', { name: 'CONTINUE SHOPPING' }).click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByRole('button', { name: 'CLEAR CART' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
});