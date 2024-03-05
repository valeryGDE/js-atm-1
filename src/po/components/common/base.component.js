class BaseComponent {
    constructor(rootSelector) {
        this.rootSelector = rootSelector
    }

    get rootElement() {
        return $(this.rootSelector)
    }
}

export default BaseComponent