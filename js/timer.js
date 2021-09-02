let userTime
let countDown
let timeDisp = document.getElementById('time-display');


const timerForm = document.getElementById('timer-form');
const timerInput = document.getElementById('timer-input');
const enterBtn = document.getElementById('enter-btn');
const startBtn = document.getElementById('start-btn');
const stopBtn = document.getElementById('stop-btn');
const errorTxt = document.getElementById('error-text');



timeDisp.innerHTML = '0'


timerForm.addEventListener('submit', (event) => {
    event.preventDefault();

    userTime = timerInput.value

    timeDisp.innerHTML = userTime
});

startBtn.addEventListener('click', startCountDown);
stopBtn.addEventListener('click', stopCountDown);

function startCountDown(event) {
    event.preventDefault()
    countDown = setInterval(() => {
        userTime--;
        timeDisp.innerHTML = userTime
        if (userTime < 1) {
            clearInterval(countDown)
        }
    }, 1000);
}

function stopCountDown(event) {
    event.preventDefault()
    if (countDown) {
        clearInterval(countDown)
        timeDisp.innerHTML = '0'
    }
}