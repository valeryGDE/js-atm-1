import { expect, assert } from "chai";


browser.addCommand('waitForVisibleAndClick', async function () {
    await this.waitForDisplayed(3000);
    await browser.execute(function (el) {
        el.style.border = '3px solid red';
    }, this);
    await this.click();
}, true);


describe('WebdriverIO Commands', () => {
    before(async () => {
        await browser.url('/');
        const acceptCookies = await $("button[id*='onetrust-accept']");
        await acceptCookies.click();
    });

    beforeEach(async () => {
        const logo = await $("a[class*= 'desktop-logo']");
        await logo.click();
        await browser.pause(500)
    });

    it('frequent searches list has 8 results', async () => {
        const searchIcon = await $("span[class*= 'search-icon']");
        await searchIcon.click()
        const searchesList = await $$("ul[class*= 'frequent-searches'] li")
        expect(searchesList).to.have.lengthOf(8)
    });

    it('navigation to contacts via search', async () => {
        const searchIcon = await $("span[class*= 'search-icon']");
        await searchIcon.click()
        const contactListItem = await $("ul[class*= 'frequent-searches'] li:last-child")
        await contactListItem.waitForVisibleAndClick()
        const findButton = await $("div[class*= 'action-section'] button")
        await findButton.click()
        const resultHeader = await $("//h2[contains(text(), 'Contact')]")
        await resultHeader.waitForDisplayed()
        const isVisible = await resultHeader.isDisplayed()
        expect(isVisible).to.be.true
    });

    it('hamburger menu has 5 items', async () => {
        const hamburgerMenuButton = await $("button[class*= 'hamburger']");
        await hamburgerMenuButton.click()
        const menuListItems = await $$("ul[class*= 'hamburger-menu__list'] li[gradient-text]")
        expect(menuListItems).to.have.lengthOf(5)
    });

    it('about section in hamburger menu has 3 elements in dropdown menu', async () => {
        const hamburgerMenuButton = await $("button[class*= 'hamburger']");
        await hamburgerMenuButton.click()
        const aboutSection = await $("ul[class*= 'hamburger-menu__list'] li[gradient-text='About']")
        await aboutSection.waitForVisibleAndClick()
        const sublistItems = await aboutSection.$$("li[class*= 'collapsed']")
        expect(sublistItems).to.have.lengthOf(3)
    });

    it('navigation to automation via search', async () => {
        const searchIcon = await $("span[class*= 'search-icon']");
        await searchIcon.click()
        const automationListItem = await $("//div[@class='frequent-searches-ui-23']//li[text()= 'Automation']")
        await browser.waitUntil(
            async () => automationListItem.isDisplayed(),
            { timeout: 5000, interval: 600, timeoutMsg: "element not displayed" }
        );
        await automationListItem.click()
        const findButton = await $("div[class*= 'action-section'] button")
        await findButton.click()
        const resultHeader = await $("//h2[contains(text(), 'Automation')]")
        await resultHeader.waitForDisplayed()
        const isVisible = await resultHeader.isDisplayed()
        expect(isVisible).to.be.true
    });

    it('color changes on hovering contact us button', async () => {
        const contactUsButton = await $("nav[aria-label='Main navigation']+a");
        const colorBeforeHover = await contactUsButton.getCSSProperty('color');
        await contactUsButton.moveTo();
        await browser.pause(500);
        const colorAfterHover = await contactUsButton.getCSSProperty('color');
        expect(colorBeforeHover.parsed.hex).not.to.equal(colorAfterHover.parsed.hex);
    });

    it('no cookies', async () => {
        await browser.deleteCookies();
        await browser.refresh();
        const acceptCookies = await $("button[id*='onetrust-accept']");
        const isVisible = await acceptCookies.isDisplayed()
        expect(isVisible).to.be.true
    });
});