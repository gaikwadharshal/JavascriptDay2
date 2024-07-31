let [seconds, minutes, hours] = [0,0,0];
let display = document.getElementById("display");
let timer = null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }

    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    display.innerHTML = h +":"+ m +":"+ s;
}

function start(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000);

}

function stop(){
    clearInterval(timer);
}

function reset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    display.innerHTML = "00:00:00";
}


// let startTime; // To store the start time
// let elapsedTime = 0; // To store the elapsed time in milliseconds
// let timerInterval; // To store the interval of the timer
// let running = false; // Flag to indicate if the stopwatch is running

// function start() {
//     if (!running) {
//         running = true;
//         startTime = Date.now() - elapsedTime; // Start time is current time minus elapsed time
//         runTimer();
//         document.getElementById("start").innerText = "Pause";
//     } else {
//         running = false;
//         clearTimeout(timerInterval);
//         document.getElementById("start").innerText = "Resume";
//     }
// }

// function stop() {
//     running = false;
//     clearTimeout(timerInterval);
//     document.getElementById("start").innerText = "Start";
// }

// function reset() {
//     running = false;
//     clearTimeout(timerInterval);
//     elapsedTime = 0;
//     updateDisplay();
//     document.getElementById("start").innerText = "Start";
// }

// function runTimer() {
//     timerInterval = setTimeout(function() {
//         elapsedTime = Date.now() - startTime;
//         updateDisplay();
//         runTimer();
//     }, 10); // Update display every 10 milliseconds
// }

// function updateDisplay() {
//     let milliseconds = elapsedTime % 1000;
//     let totalSeconds = Math.floor(elapsedTime / 1000);
//     let seconds = totalSeconds % 60;
//     let minutes = Math.floor(totalSeconds / 60) % 60;
//     let hours = Math.floor(totalSeconds / 3600);

//     document.getElementById("display").innerText = formatTime(hours, minutes, seconds, milliseconds);
// }

// function formatTime(hours, minutes, seconds, milliseconds) {
//     return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds, 3)}`;
// }

// function pad(number, length = 2) {
//     return (`000${number}`).slice(-length);
// }
