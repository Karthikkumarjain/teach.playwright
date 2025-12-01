import {expect, test} from '@playwright/test';

test('Frame Handling @Iframes',async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo');
    await page.waitForTimeout(3000);
    const frameLocator = page.frameLocator('#iFrame1');
    await frameLocator.locator('div.rsw-ce').fill('Karthik');
    expect(await frameLocator.locator('div.rsw-ce').textContent()).toEqual('Karthik');

});

test('Frame Handling with frame@Iframes',async({page})=>{

    await page.goto('https://www.lambdatest.com/selenium-playground/iframe-demo');
    await page.waitForTimeout(3000);
    const frame = page.frame({url:'https://www.lambdatest.com/selenium-playground/iframe-demo/contant'});//full url +
    await frame?.locator('div.rsw-ce').fill('Karthik');
    expect(await frame?.locator('div.rsw-ce').textContent()).toEqual('Karthik');

});



test.only('Nested Frame Handling @Iframes',async({page})=>{

   await page.goto('https://ui.vision/demo/webtest/frames/');
  const frames=  page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'});
  await page.waitForTimeout(3000);
const childframes =frames?.childFrames();
await childframes[0].locator('div[aria-label="General Web Automation"]').check();


});