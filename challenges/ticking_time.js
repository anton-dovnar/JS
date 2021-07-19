const clock = () => {
    const clockNode = document.querySelector('#clock');
    return setInterval(() => {
        const date = new Date();
        const tick = date.toLocaleTimeString();
        clockNode.textContent = tick;
    }, 1000);
};

clock();
