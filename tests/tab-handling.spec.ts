import { test, expect } from '@playwright/test';

test('Single tab handling @TabHandling', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Windows.html');

    const [newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'click' }).click()

    ]);
    await newTab.waitForLoadState('networkidle');
    expect(await newTab.title()).toBe('Selenium');


})

test.only('Multiple tab handling @TabHandling', async ({ page }) => {

    await page.goto('https://demo.automationtesting.in/Windows.html');
    await page.getByRole('link', { name: 'Open Seperate Multiple Windows' }).click();
    const [multipleTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('button', { name: 'click' }).click()
    ]);
    await multipleTab.waitForLoadState('networkidle');
    const differentTabs = multipleTab.context().pages();
    await differentTabs[1].waitForLoadState('networkidle');
    await differentTabs[2].waitForLoadState('networkidle');
    await differentTabs[1].bringToFront();
    await differentTabs[1].locator('#email').fill('abc@gmail.com');
    await differentTabs[2].bringToFront();
    expect(await differentTabs[2].title()).toBe('Selenium');
    await differentTabs[1].close();
    await differentTabs[2].close();


});