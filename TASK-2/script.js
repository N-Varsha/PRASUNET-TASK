let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let interval;
let running = false;
let lapCounter = 1;

const displayHours = document.getElementById('hours');
const displayMinutes = document.getElementById('minutes');
const displaySeconds = document.getElementById('seconds');
const displayMilliseconds = document.getElementById('milliseconds');
const lapList = document.getElementById('lap-list');

document.getElementById('start').addEventListener('click', startStopwatch);
document.getElementById('pause').addEventListener('click', pauseStopwatch);
document.getElementById('reset').addEventListener('click', resetStopwatch);
document.getElementById('lap').addEventListener('click', recordLap);

function startStopwatch() {
    if (!running) {
        interval = setInterval(updateTime, 10);
        running = true;
        toggleButtonState('start');
    }
}

function pauseStopwatch() {
    clearInterval(interval);
    running = false;
    toggleButtonState('pause');
}

function resetStopwatch() {
    clearInterval(interval);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
    lapList.innerHTML = '';
    lapCounter = 1;
    toggleButtonState('reset');
}

function recordLap() {
    if (running) {
        const lapTime = `${formatNumber(hours)}:${formatNumber(minutes)}:${formatNumber(seconds)}:${formatNumber(milliseconds)}`;
        const lapItem = document.createElement('li');
        lapItem.textContent = `Lap ${lapCounter++}: ${lapTime}`;
        lapList.appendChild(lapItem);
        toggleButtonState('lap');
    }
}

function updateTime() {
    milliseconds++;
    if (milliseconds >= 100) {
        milliseconds = 0;
        seconds++;
    }
    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes >= 60) {
        minutes = 0;
        hours++;
    }
    updateDisplay();
}

function updateDisplay() {
    displayHours.textContent = formatNumber(hours);
    displayMinutes.textContent = formatNumber(minutes);
    displaySeconds.textContent = formatNumber(seconds);
    displayMilliseconds.textContent = formatNumber(milliseconds);
}

function formatNumber(number) {
    return number < 10 ? `0${number}` : number;
}

function toggleButtonState(buttonId) {
    const buttons = document.querySelectorAll('.control-btn');
    buttons.forEach(button => {
        if (button.id === buttonId) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}
