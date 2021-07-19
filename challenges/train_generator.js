function* getStop() {
    yield 'Poughkeepsie';
    yield 'Newburgh';
    yield 'Peekskill';
    yield 'Yonkers';
    yield 'Bronx';
    yield 'Grand Central';
}

const nycTrainline = getStop();
const nextStopButton = document.querySelector('#next-stop');
const display = document.querySelector('#info');
nextStopButton.addEventListener('click', () => {
    const currStop = nycTrainline.next();
    if (currStop.done) {
        display.textContent = 'We made it!';
        nextStopButton.setAttribute('disabled', true);
    } else {
        display.textContent = currStop.value;
    }
});
