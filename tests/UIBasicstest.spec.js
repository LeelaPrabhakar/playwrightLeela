const {test} = require('@playwright/test');
const { expect } = require('@playwright/test');
test.only('Frist Playwright test',async ({browser})=>
{
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://lkmdemoaut.accenture.com/TestMeApp/login.htm");
  await expect(page).toHaveTitle("Login");
  await page.locator('#userName').type('leela');
  await page.locator('[name="password"]').type('leela27');
  await page.locator('[value="Login"]').click();
  await expect(page).toHaveTitle("Home");

});

test('page playewright test', async({page})=>{
  await page.goto("https://google.com");
  await expect(page).toHaveTitle("Google");
});

