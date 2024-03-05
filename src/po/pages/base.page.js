import { HamburgerMenuComponent, HeaderComponent, SearchComponent } from '../components/index.js';


class BasePage {
    constructor(url) {
        this.url = url
        this.header = new HeaderComponent
        this.search = new SearchComponent
        this.hamburger = new HamburgerMenuComponent
    }

    open() {
        return browser.url(this.url)
    }

    acceptCookiesButton() {
        return $('button[id*="onetrust-accept"]')
    }
}

export default BasePage