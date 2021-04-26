
const startBtn = document.getElementById('start');
const resetBtn = document.getElementById('reset');

let h = document.getElementById('hour');
let m = document.getElementById('minute');
let s = document.getElementById('sec');
let finish = new Audio;
finish.src = './score.mp3';
let startTimer = null;

function stopTimer() {
    clearInterval(startTimer);
}

function timerValue() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        stopTimer();
        finish.play();
    } else if (s.value != 0) {
        s.value--;
    } else if (m.value != 0 && s.value == 0) {
        s.value = 59;
        m.value--;
    } else if (h.value != 0 && m.value == 0) {
        m.value = 60;
        h.value--;
    }
}
function countDown() {
    startTimer = setInterval(function () {
        timerValue();
    }, 1000);
}
startBtn.addEventListener('click', countDown);

function resetTimer() {
    h.value = 0;
    m.value = 0;
    s.value = 0;
    stopTimer();
};
resetBtn.addEventListener('click', resetTimer);
