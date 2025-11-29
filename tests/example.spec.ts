import {test} from '@playwright/test';

test('Text locator',async({browser})=>{
const browser1 =await browser.newContext();
const page =await browser1.newPage();
await page.goto('https://example.com');


const auxBrowser =await browser.newContext();
const auxPage =await auxBrowser.newPage();
await auxPage.goto('https://example.com');

})