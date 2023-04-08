import Bbs from "./pages/Bbs";
import Home from "./pages/Home";
import User from "./pages/User";

export const routes = [{
        path: "/",
        name: "home",
        element: Home
    },
    {
        path: "/bbs",
        name: "bbs",
        element: Bbs
    },
    {
        path: "/user",
        name: "user",
        element: User
    },
];