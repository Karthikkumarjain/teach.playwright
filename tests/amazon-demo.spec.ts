import { test, expect } from '@playwright/test';

test('test @CodegenDemo', async ({ page }) => {
  await page.goto('https://www.amazon.in/');
  await page.getByRole('link', { name: 'MX Player' }).click();
  await expect(page.getByTestId('list_Trending-Top-10').getByRole('heading')).toContainText('Trending Top 10');
});