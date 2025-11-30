import{test} from '@playwright/test';



test('Browser context example @Sanity',async({browser})=>{
//Browser context


const context = await browser.newContext();
const page =await context.newPage();
await page.goto('https://www.amazon.in/');

//Another context
const anotherContext = await browser.newContext();
const pageAnotehr =await context.newPage();
await pageAnotehr.goto('https://www.google.in/');
  
})

test('Page  example',async({page})=>{
//Skip browser context by using page
await page.goto('https://www.google.in/');
  
})

