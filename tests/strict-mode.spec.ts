import {  test } from '@playwright/test';


test('strict mode demo @StrictMode', async ({ page }) => {

    await page.goto('https://demoqa.com/');
    //text locator
    await page.locator('text=Elements').click();
    await page.locator('text=Text Box').click();
        await page.locator('text=Text Box').nth(1).isEditable();

});