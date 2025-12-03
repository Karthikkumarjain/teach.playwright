import { test } from "@playwright/test";
import moment from "moment";

test("Calendar demo using fill function @DatePicker", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");
    const date = "2025-12-25"

    await page.locator('xpath=//input[@id="birthday"]').fill(date);
    await page.pause();


    //document.getElementById("birthday").value
})




test("Calendar demo using moment - With Functions @DatePicker", async ({ page }) => {

    const dateToSelect = "December 2017";
    const date = 14;
    await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-date-picker-demo");

    await page.locator("//input[@placeholder='Start date']").click();

    const mmYY = page.locator("(//table[@class='table-condensed']//th[@class='datepicker-switch'])[1]");
    const prev = page.locator("(//table[@class='table-condensed']//th[@class='prev'])[1]");
    const next = page.locator("(//table[@class='table-condensed']//th[@class='next'])[1]");

    const thisMonth = moment(dateToSelect, "MMMM YYYY").isBefore();
    console.log("this month? " + thisMonth);
    while (await mmYY.textContent() != dateToSelect) {
        if (thisMonth) {
            await prev.click();
        } else {
            await next.click();
        }
    }

   
    await page.locator(`//td[@class='day'][text()='${date}']`).click();
}


);