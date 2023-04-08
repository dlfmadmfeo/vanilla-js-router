import Router from "./router";
import { navigate } from "./utils/navigate";

const BASE_URL = "http://localhost:5173";

function App(element) {
    const init = () => {
        const navBarElem = document.querySelector(".navbar");
        navBarElem.addEventListener("click", (e) => {
            const aElem = e.target.closest('a');
            if (!(aElem instanceof HTMLAnchorElement)) return;
            e.preventDefault();
            const targetLink = aElem.href.replace(BASE_URL, "");
            navigate(targetLink);
        });
    };
    init();
    new Router(element);
}

export default App;