import pages from "../po/pages/index.js";


browser.addCommand('waitForVisibleAndClick', async function () {
    await browser.waitUntil(
        async () => this.isDisplayedInViewport(),
        {
            timeout: 3000,
            timeoutMsg: 'element is not displayed in viewport after 3s'
        }
    );
    await browser.execute(function (el) {
        el.style.border = '3px solid red';
    }, this);
    await this.click();
}, true);


describe('WebdriverIO Commands', () => {
    before(async () => {
        await pages('home').open();
        await pages('home').acceptCookiesButton().waitForVisibleAndClick();
    });

    beforeEach(async () => {
        await pages('home').header.logo().click();
        await browser.pause(500)
    });

    it('navigation to services tab', async () => {
        await pages('home').header.tab('services').click();
        await expect(browser).toHaveTitle('Services | EPAM')
    });

    it('navigation to insights tab', async () => {
        await pages('home').header.tab('insights').click();
        await expect(browser).toHaveTitle('Discover our Latest Insights | EPAM')
    });

    it('color changes on hovering tab', async () => {
        const aboutTab = await pages('home').header.tab('about')
        const colorBeforeHover = await aboutTab.getCSSProperty('color')
        await aboutTab.moveTo();
        await browser.pause(100);
        const colorAfterHover = await aboutTab.getCSSProperty('color')
        await expect(colorBeforeHover.parsed.hex).not.toEqual(colorAfterHover.parsed.hex);
    });

    it('navigation to main page via logo', async () => {
        await pages('home').header.logo().click();
        await expect(browser).toHaveTitle('EPAM | Software Engineering & Product Development Services')
    });

    it('frequent searches list has 8 results', async () => {
        await pages('home').header.searchIcon().click()
        const searchesList = await pages('home').search.frequentSearchList()
        await searchesList[searchesList.length - 1].waitForDisplayed()
        await expect(searchesList).toHaveLength(8)
        for (let i = 0; i < searchesList.length; i++) {
            await expect($(searchesList[i])).toBeDisplayedInViewport()
        }
    });

    it('navigation to contacts via search', async () => {
        await pages('home').header.searchIcon().click()
        const contactListItem = await pages('home').search.searchListItem('contact')
        await contactListItem.waitForVisibleAndClick()
        await pages('home').search.findButton.click()
        const resultsCounter = await pages('search').resultsCounter
        await resultsCounter.waitForDisplayed()
        const actualText = await resultsCounter.getText();
        await expect(actualText.toLowerCase()).toContain('contact')
    });

    it('hamburger menu has 5 items', async () => {
        await pages('home').header.hamburgerButton().click()
        const menuListItems = await pages('home').hamburger.menuItemsList()
        await browser.waitUntil(
            async () => await menuListItems[0].isDisplayedInViewport(),
            { timeout: 3000, interval: 500, timeoutMsg: "element is not displayed in viewport after 3s" }
        );
        await expect(menuListItems).toHaveLength(5)
        for (let i = 0; i < menuListItems.length; i++) {
            await expect($(menuListItems[i])).toBeDisplayedInViewport()
        }
    });

    it('about section in hamburger menu has 3 elements in dropdown menu', async () => {
        await pages('home').header.hamburgerButton().click()
        await browser.pause(500)
        await pages('home').hamburger.itemArrow('about').click()
        const sublistItems = await pages('home').hamburger.itemSublist('about')
        await browser.waitUntil(
            async () => await sublistItems[0].isDisplayedInViewport(),
            { timeout: 3000, interval: 500, timeoutMsg: "element is not displayed in viewport after 3s" }
        );
        await expect(sublistItems).toHaveLength(3)
        for (let i = 0; i < sublistItems.length; i++) {
            await expect($(sublistItems[i])).toBeDisplayedInViewport()
        }
    });

    it('navigation to automation via search', async () => {
        await pages('home').header.searchIcon().click()
        const automationListItem = await pages('home').search.searchListItem('automation')
        await automationListItem.waitForVisibleAndClick()
        await pages('home').search.findButton.click()
        const resultsCounter = await pages('search').resultsCounter
        await resultsCounter.waitForDisplayed()
        const actualText = await resultsCounter.getText();
        await expect(actualText.toLowerCase()).toContain('automation')
    });

    it('color changes on hovering contact us button', async () => {
        const contactUsButton = await pages('home').header.contactUsButton()
        const colorBeforeHover = await contactUsButton.getCSSProperty('color')
        await contactUsButton.moveTo()
        await browser.pause(1000)
        const colorAfterHover = await contactUsButton.getCSSProperty('color')
        await expect(colorBeforeHover.parsed.hex).not.toEqual(colorAfterHover.parsed.hex)
    });

    it('accept cookies button appears when cookies are deleted', async () => {
        await browser.deleteCookies();
        await browser.refresh();
        await expect(pages('home').acceptCookiesButton()).toBeDisplayedInViewport()
    });
});