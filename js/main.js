import './dateCalc.js';
import { timer } from "./timer.js";
import './toggle.js';
import "../css/main.sass"
import "../media/beep.mp3"


const timerForm = document.getElementById('timer-form');
const timerInput = document.getElementById('timer-input');
let timeDisp = document.getElementById('time-display');

timeDisp.innerHTML = '0'


timerForm.addEventListener('submit', (event) => {
    event.preventDefault();
    timeDisp.innerHTML = timerInput.value;
    timer(timerInput.value);
});