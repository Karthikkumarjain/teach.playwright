import { test } from '@playwright/test';



test.use({actionTimeout:5000});

test('auto wait example @Autowait', async ({ browser }) => {
    //Browser context


    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.amazon.in/');
    await page.locator('text=aksdjabkdjan').click({timeout:6000});

    //default--30 seconds -->timeout exception -->30000milliseconds

});