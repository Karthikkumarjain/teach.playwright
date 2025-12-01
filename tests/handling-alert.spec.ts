import { test, expect } from '@playwright/test';

test.describe('Handling Alerts @Alert', () => {
    //Simple alert
    //confirmation alert
    //alert with text box

    test('Simple Alert', async ({ page }) => {

        await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

        //handle alert
        page.on('dialog', async (alertBox) => {
            const expectedMessage = await alertBox.message();
            expect(expectedMessage).toBe('I am an alert box!');
            await alertBox.accept();

        })

        //message(),accept(),dismiss();



        await page.getByRole('button', { name: 'Click Me' }).nth(0).click();


    });

    test('Confirmation Alert - Approve @Alert', async ({ page }) => {

      
        await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

        //handle alert
        page.on('dialog', async (alertBox) => {
            const expectedMessage = await alertBox.message();
            expect(expectedMessage).toBe('Press a button!');
            await alertBox.accept();

        })

     



        await page.getByRole('button', { name: 'Click Me' }).nth(1).click();


    });

    test('Confirmation Alert-Reject @Alert', async ({ page }) => {
       await page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

        //handle alert
        page.on('dialog', async (alertBox) => {
            const expectedMessage = await alertBox.message();
            expect(expectedMessage).toBe('Press a button!');
            await alertBox.dismiss();

        })

     



        await page.getByRole('button', { name: 'Click Me' }).nth(1).click();


    });

    test('Prompt Alert - Input Text @Alert', async ({ page }) => {
        page.goto('https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo');

        //handle prompt alert
        page.on('dialog', async (alert) => {

            const expectedMessage = await alert.message();
            expect(expectedMessage).toBe('Please enter your name');
            await alert.accept('Karthik');
            await expect(page.locator('#prompt-demo')).toHaveText('You have entered Karthik !');


        })
        await page.getByRole('button', { name: 'Click Me' }).nth(2).click();


    });


});


