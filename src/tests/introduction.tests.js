import { expect, assert } from "chai";


describe('WebdriverIO Introduction', () => {
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

    it('navigation to services tab', async () => {
        const servicesTab = await $("span>a[href='/services']");
        await servicesTab.click();
        const title = await browser.getTitle()
        expect(title).to.be.equal('Services | EPAM')
    });

    it('navigation to insights tab', async () => {
        const insightsTab = await $('//span/a[text()="Insights"]');
        await insightsTab.click();
        const title = await browser.getTitle()
        assert.equal(title, 'Discover our Latest Insights | EPAM');
    });

    it('color changes on hovering tab', async () => {
        const aboutTab = await $("span>a[href='/about']");
        const colorBeforeHover = await aboutTab.getCSSProperty('color');
        await aboutTab.moveTo();
        await browser.pause(500);
        const colorAfterHover = await aboutTab.getCSSProperty('color');
        expect(colorBeforeHover.parsed.hex).not.to.equal(colorAfterHover.parsed.hex);
    });

    it('navigation to main page via logo', async () => {
        const logo = await $("a[class*= 'desktop-logo']");
        await logo.click();
        const title = await browser.getTitle()
        assert.equal(title, 'EPAM | Software Engineering & Product Development Services');
    });
});
