import { expect, test } from '@playwright/test';


test('Demonstrate locators @Locator', async ({ page }) => {

    await page.goto('https://demoqa.com/');
    //text locator
    await page.locator('text=Elements').click();
    await page.locator('text=Text Box').click();
    //id locator
    await page.locator('#userName').fill('John Doe');
    //placeholder locator
    await page.getByPlaceholder('name@example.com').fill("akdsjan@gmail.com");
    //class and nth locator
    await page.locator('.form-control').nth(2).fill('1234567890');

    //xpath locator
    await page.locator('xpath=//textarea[@id="permanentAddress"]').fill('This is permanent address');

    //css locator
    //  await page.locator('css=button[id="submit"]').click();

    //role locator
    await page.getByRole('button', { name: 'Submit' }).click();
    //await page.getByRole('radio',{name:'yesRadio'}).click();

    //getbytext --text
    await page.getByText('Elements').isVisible();

    //getBylabel - label's text

    await page.getByLabel('Yes').isVisible();

    //getByPlaceHolder
    await page.getByPlaceholder('Full Name').isVisible();

    //getByAltText

    await page.getByAltText('Build PlayWright tests with AI').isVisible();
    //getbytitle
    await page.getByTitle('DEMOQA').isVisible();
    await expect(page.getByTitle('DEMOQA')).toHaveValue('DEMOQA');

    //GET BY TEST ID

    await page.getByTestId('add-to-cart').click();




});


