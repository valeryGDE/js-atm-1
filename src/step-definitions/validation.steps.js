import { Then } from "@wdio/cucumber-framework";
import { expect } from "@wdio/globals";


Then('Page title should be equal to {string}', async function (actualTitle) {
    return await expect(browser).toHaveTitle(actualTitle)
});
