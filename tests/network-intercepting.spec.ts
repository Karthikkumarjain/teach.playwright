//Playwright allows you to take control of network requests made by the browser.

//Mocking means you intercept a request and return a fake response instead of letting it hit the real server.

// Why use it?

// Backend not ready

// Reduce flaky tests

// Test error scenarios easily

// Speed up test execution

import { test, expect } from "@playwright/test"

test('Routing and mocking response @MockResponse', async ({ page }) => {
    await page.goto('https://accounts.saucelabs.com/am/XUI/#login/');
    await page.locator('#idToken1').fill('');//replace with ur username
    await page.locator('#idToken2').fill('');//replace with ur pass
    page.on('request', req => {
        console.log(`>> ${req.method()} ${req.resourceType()} ${req.url()}`);
    });

    page.on('response', res => {
        console.log(`<< ${res.status()} ${res.url()}`);
    });



    await page.route(
        'https://accounts.saucelabs.com/am/json/realms/root/realms/authtree/authenticate',
        async (route, request) => {

            // Read the request body (POST payload)
            const postData = request.postDataJSON?.() || {};

            console.log("Request payload received:", postData);

            // Mocked 401 response
            await route.fulfill({
                status: 401,
                contentType: 'application/json',
                body: JSON.stringify({
                    code: 401,
                    reason: "Unauthorized",
                    message: "Login failure",
                    detail: {
                        failureUrl: "",
                    }
                })
            });
        }
    );

    await page.locator('#loginButton_0').click();
    expect(await page.locator('//span[@class="message"]').textContent()).toContain('User name/password combination is invalid.');

});


test.only('Blocking resources @MockResponse', async ({ page }) => {
    await page.route('**/*', route => {
        const url = route.request().url();
        if (url.endsWith('.png') || url.endsWith('.jpg')) {
            return route.abort(); // block images
        }
        route.continue();
    });

    await page.goto('https://www.amazon.in');

})
