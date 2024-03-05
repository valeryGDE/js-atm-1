import HomePage from "./home.page.js";
import SearchResultPage from "./searchresult.page.js";

function pages(name) {
    const items = {
        home: new HomePage(),
        search: new SearchResultPage()
    }
    return items[name.toLowerCase()]
}

export { HomePage, SearchResultPage };
export default pages;