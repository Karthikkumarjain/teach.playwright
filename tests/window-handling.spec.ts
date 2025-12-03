import { test, expect } from '@playwright/test';
import { diff } from 'util';

test.only('Single Window handling @WindhowHandling', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');


    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        page.getByRole('link', { name: 'Like us On Facebook' }).click()
    ]);

    await newWindow.waitForLoadState('networkidle');

    await newWindow.locator('xpath=//div[@aria-label="Close"]').click();
    expect(await newWindow.title()).toBe('LambdaTest123 | Facebook');
    await newWindow.close();
    await page.close();

});

test('Multiple window handling @WindhowHandling', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

    const [multipleWindow] = await Promise.all([
        page.waitForEvent('popup'),
        await page.getByTitle('Follow @Lambdatesting').nth(5).click()
    ]);
    await multipleWindow.waitForLoadState('networkidle');


    const differentWindows = multipleWindow.context().pages();
    differentWindows[1].waitForLoadState('networkidle');
    differentWindows[2].waitForLoadState('networkidle');

    differentWindows[1].bringToFront();
    expect(await differentWindows[1].title()).toBe('LambdaTest|Facebook');

    differentWindows[2].bringToFront();

    expect(await differentWindows[1].title()).toBe('X');
    await differentWindows[1].close();
    await differentWindows[2].close();
    await page.close();



});

