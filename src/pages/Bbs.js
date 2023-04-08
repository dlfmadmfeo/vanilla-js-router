function Bbs(element) {
    const render = () => {
        element.innerHTML = `
        <div>
            <hr style="margin-top: 0.5em;"/>
            <div style="background-color: rgba(255, 166, 0, 0.417); height: 90vh; display: flex; align-items: center; justify-content: center;">게시판</div>
        </div>
        `
    };
    render();
}

export default Bbs;