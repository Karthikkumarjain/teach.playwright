import { expect, test } from '@playwright/test';

test('Single static Dropdown handling @Dropdown', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#select-demo', { value: 'Monday' });
    await page.waitForTimeout(2000);
    await page.selectOption('#select-demo', { label: 'Tuesday' });
    await page.waitForTimeout(3000);
    await page.selectOption('#select-demo', { index: 4 });


});

test('Multi static Dropdown handling @Dropdown', async ({ page }) => {
    await page.goto('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    await page.selectOption('#multi-select', ['Florida', 'Texas', 'New York']);

    //await page.selectOption('#multi-select',[{label:'Florida'},{value:'Texas'},{index:6}]);

});

test('Dynmaic static Dropdown handling with searching @Dropdown', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    await page.locator('.select2-selection--single').nth(0).click();
    await page.locator('.select2-search__field').nth(1).fill('India');
    await page.getByText('India').nth(2).click();
    //ul#select2-country-results>li
    await expect(page.locator('#select2-country-container')).toHaveText('India');


});


test('Dynmaic static Dropdown handling @Dropdown', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo');
    await page.getByPlaceholder('Select state(s)').click();
    //chaining of locator--> to go from ul to li
    await page.locator('ul.select2-results__options').locator('li', { hasText: 'Alaska' }).click();
    await expect(page.locator('.select2-selection__choice')).toContainText('Alaska');



});