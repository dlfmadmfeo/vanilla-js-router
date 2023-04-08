function Home(element) {
    const render = () => {
        element.innerHTML = `
        <div>
            <hr style="margin-top: 0.5em;"/>
            <div style="background-color: gainsboro; height: 90vh; display: flex; align-items: center; justify-content: center;">홈</div>
        </div>
        `
    };
    render();
}

export default Home;