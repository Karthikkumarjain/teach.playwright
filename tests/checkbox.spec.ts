import { test } from '@playwright/test';


test('Test checkbox @Checkbox', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');

    await page.locator('.rct-checkbox').check();
    await page.locator('.rct-checkbox').click();

   await page.waitForTimeout(3000);


});