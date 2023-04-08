export const navigate = (to, replace = false) => {
    const event = new CustomEvent("routerchange", {
        detail: {
            to,
            replace: true
        }
    });
    dispatchEvent(event);
}