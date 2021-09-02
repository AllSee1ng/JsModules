const timerBtn = document.getElementById('timer-span');
const dateBtn = document.getElementById('date-span');
const dateDiv = document.getElementById('date-Calc');
const timerDiv = document.getElementById('timer');

dateBtn.addEventListener('click', () => {
    dateDiv.classList.remove('invise');
    timerDiv.classList.add('invise');
});

timerBtn.addEventListener('click', () => {
    dateDiv.classList.add('invise');
    timerDiv.classList.remove('invise');
});