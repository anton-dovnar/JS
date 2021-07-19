const changeColor = (color) => {
    document.body.style.background = color;
};

document.querySelector('#blue')
    .addEventListener('click', () => changeColor('blue'));

document.querySelector('#pink')
    .addEventListener('click', () => changeColor('pink'));

document.querySelector('#green')
    .addEventListener('click', () => changeColor('green'));
