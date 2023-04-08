import App from "./src/app";
import './style.css';

window.addEventListener("DOMContentLoaded", () => {
    const app = document.getElementById("app");
    new App(app);
});