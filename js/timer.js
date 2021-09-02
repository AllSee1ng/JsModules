export function timer(data) {
    let userTime = data;
    let countDown
    let timeDisp = document.getElementById('time-display');
    const startBtn = document.getElementById('start-btn');
    const stopBtn = document.getElementById('stop-btn');
    const errorTxt = document.getElementById('error-text');
    const timerBeep = new Audio('./media/beep.mp3')


    startBtn.addEventListener('click', startCountDown);
    stopBtn.addEventListener('click', stopCountDown);

    function startCountDown(event) {
        event.preventDefault()
        countDown = setInterval(() => {
            userTime--;
            timeDisp.innerHTML = userTime
            if (userTime < 1) {
                clearInterval(countDown)
                timerBeep.play()
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
}