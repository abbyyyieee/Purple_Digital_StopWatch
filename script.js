// Stores the start time
let startTime = 0;
// Tracks elapsed time
let elapsedTime = 0;
let timerInterval = null;

// The start function initializes and begins the timer
function start() {
    if (timerInterval) return;
    startTime = Date.now() - elapsedTime;
    timerInterval = setInterval(updateTime, 10);
}

function pause() {
    clearInterval(timerInterval);
    timerInterval = null;
}

// Resets the stopwatch
function reset() {
    clearInterval(timerInterval);
    timerInterval = null;
    elapsedTime = 0;
    document.getElementById("display").textContent = "00:00:00:00";
}

// Updates the displayed time
function updateTime() {
    elapsedTime = Date.now() - startTime;
    
// Calculates time units
    let milliseconds = Math.floor((elapsedTime % 1000) / 10); 
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));

// Shows formatted time on screen
    document.getElementById("display").textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}

// Adds leading zeros
function pad(number) {
    return number.toString().padStart(2, "0");
}

// Sets initial display value
document.getElementById("display").textContent = "00:00:00:00";
