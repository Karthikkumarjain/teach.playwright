import { test, expect } from '@playwright/test';

//https://playwright.dev/docs/test-assertions
test('Test checkbox @Checkbox', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');

    await page.locator('.rct-checkbox').check();
    const expectedText = await page.locator('text=You have selected :');

    await expect(expectedText).toContainText('You have selectedsadjndbajbnd :');
    await page.waitForTimeout(3000);


});