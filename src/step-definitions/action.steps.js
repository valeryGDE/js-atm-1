import { When } from "@wdio/cucumber-framework";
import pages from "../po/pages/index.js";


When('I open {string} page', async function (pageName) {
    return pages(pageName).open()
});

When('I click {string} tab', async function (tabName) {
    await pages('home').header.tab(tabName).click();
});