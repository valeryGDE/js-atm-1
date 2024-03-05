import BaseComponent from "./base.component.js";

class HamburgerMenuComponent extends BaseComponent {
    constructor() {
        super('div.hamburger-menu__dropdown-section')
    }

    item(param) {
        const selectors = {
            about: 'li[gradient-text="About"]',
            services: 'li[gradient-text="Services"]'
        }
        return this.rootElement.$(selectors[param.toLowerCase()])
    }

    menuItemsList() {
        return this.rootElement.$$('li[gradient-text]')
    }

    itemArrow(param) {
        return this.item(param).$('div[role="button"]')
    }

    itemSublist(param) {
        return this.item(param).$$('li[class*= "collapsed"]')
    }
}

export default HamburgerMenuComponent