function User(element) {
    const render = () => {
        element.innerHTML = `
        <div>
            <hr style="margin-top: 0.5em;"/>
            <div style="background-color: rgba(0, 128, 0, 0.462); height: 90vh; display: flex; align-items: center; justify-content: center;">유저 정보</div>
        </div>
        `
    };
    render();
}

export default User;