import { test, expect } from '@playwright/test';

//  Comparing UI appearance against a known baseline image.

// Purpose:

// Catch unexpected UI changes.

// Validate layouts, colors, spacing, alignment.

// Catch CSS regressions that functional tests won’t detect.

// Where it is useful:

// Branding consistency (logos, theme)

// Responsive design

// Ensuring layout isn’t broken after deployments




//screenshot
//compare with baseline image
//if different test will fail--diff handling--view diff in report

test.only('Visual comparison whole page @Visual', async ({ page }) => {

    page.goto('https://github.com/login');

    await expect(page).toHaveScreenshot('github-login-page.png');
    page.close();

});

test.only('Visual comparison element @Visual', async ({ page }) => {

    page.goto('https://github.com/login');

const signInButton =await page.locator('xpath=//input[@type="submit"]');
    await expect(signInButton).toHaveScreenshot('sign-in.png');
});




