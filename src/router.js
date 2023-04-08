import NotFound from "./pages/NotFound";
import { routes } from "./variables";

function Router(element) {
    const init = () => {
        window.addEventListener("routerchange", ({ detail }) => {
            const { to, replace } = detail;
            if (replace || to === location.pathname) {
                window.history.replaceState("", "", to);
            } else {
                window.history.pushState("", "", to);
            }
            route(to);
        });
        window.addEventListener("popstate", () => {
            window.history.replaceState("", "", to);
        })
    };

    const route = (to) => {
        const currtRoute = routes.find(route => route.path === to);
        const CurrPage = currtRoute ? currtRoute.element : NotFound;
        new CurrPage(element);
    }

    init();
    route(location.pathname);
}

export default Router;