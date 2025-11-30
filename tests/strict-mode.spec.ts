import {  test } from '@playwright/test';


test('strict mode demo @StrictMode', async ({ page }) => {

    await page.goto('https://demoqa.com/');
    //text locator
    await page.locator('text=Elements').click();
    await page.locator('text=Text Box').click();
        await page.locator('text=Text Box').nth(1).isEditable();
//
});


// // 1) [chromium] › tests\strict-mode.spec.ts:4:5 › strict mode demo @StrictMode ─────────────────────

//     Error: locator.isEditable: Error: strict mode violation: locator('text=Text Box') resolved to 2 elements:   
//         1) <span class="text">Text Box</span> aka getByRole('list').getByText('Text Box')
//         2) <h1 class="text-center">Text Box</h1> aka getByRole('heading', { name: 'Text Box' })

//     Call log:
//       - waiting for locator('text=Text Box')



