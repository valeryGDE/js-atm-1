import BaseComponent from "./base.component.js";

class HeaderComponent extends BaseComponent {
    constructor() {
        super('div.header__content')
    }

    tab(param) {
        const selectors = {
            insights: 'span>a[href="/insights"]',
            about: 'span>a[href="/about"]',
            services: 'span>a[href="/services"]'
        }
        return this.rootElement.$(selectors[param.toLowerCase()])
    }

    logo() {
        return this.rootElement.$('a[class*= "desktop-logo"]')
    }

    hamburgerButton() {
        return this.rootElement.$('button[class*= "hamburger"]')
    }

    searchIcon() {
        return this.rootElement.$('span[class*= "search-icon"]')
    }

    contactUsButton() {
        return this.rootElement.$('nav[aria-label="Main navigation"]+a')
    }
}

export default HeaderComponent