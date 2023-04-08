function NotFound(element) {
    const render = () => {
        element.innerHTML = `<div>페이지를 찾을 수 없습니다.</div>`;
    };
    render();
}

export default NotFound;