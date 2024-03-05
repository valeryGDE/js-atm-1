import BaseComponent from "./base.component.js";

class SearchComponent extends BaseComponent {
    constructor() {
        super('form[action = "/search"]')
    }

    frequentSearchList() {
        return this.rootElement.$$('ul[class*= "frequent-searches"] li')
    }

    get findButton() {
        return this.rootElement.$('div[class*= "action-section"] button')
    }

    searchListItem(param) {
        const selectors = {
            contact: '//li[text() = "Contact"]',
            automation: '//li[text() = "Automation"]'
        }
        return this.rootElement.$(selectors[param.toLowerCase()])
    }
}

export default SearchComponent