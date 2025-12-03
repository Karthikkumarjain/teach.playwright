import { test } from '@playwright/test';



test('Keyboard actions @Keyboard', async ({ page }) => {

    await page.goto('https://www.google.in/');
    await page.waitForLoadState('networkidle');
    const consent = await page.getByText('Not interested').isVisible();
    if (consent) {
        await await page.getByText('Not interested').click();
    }
    await page.locator('.gLFyf').nth(0).click();
    await page.locator('input[name="q"]');
    await page.keyboard.type('Playwright Automation');
    await page.waitForTimeout(3000);
    await page.keyboard.press('Backspace');
    await page.waitForTimeout(3000);
    await page.keyboard.press('Shift+N');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Delete');
    await page.keyboard.type('Playwright Automation with TypeScript');
    await page.keyboard.down('Shift');
    for ( let i = 0; i < 5; i++) {
                
        await page.keyboard.press('ArrowLeft');

    }
    await page.keyboard.up('Shift');
    await page.keyboard.press('Delete');
    await page.close();

});