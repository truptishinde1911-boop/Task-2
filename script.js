// Variables to store time
let hours = 0;
let minutes = 0;
let seconds = 0;
let timer;        // To store setInterval
let running = false; // To check if timer is running

// Get HTML elements
const timeDisplay = document.getElementById('time');
const lapsList = document.getElementById('laps');

// Function to update timer every second
function updateTime() {
    seconds++;            // increase seconds by 1
    if (seconds === 60) { // if seconds reach 60
        seconds = 0;
        minutes++;        // increase minutes
    }
    if (minutes === 60) { // if minutes reach 60
        minutes = 0;
        hours++;          // increase hours
    }

    // Format time as 00:00:00
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    // Display time
    timeDisplay.textContent = h + ":" + m + ":" + s;
}

// Start button
document.getElementById('start').onclick = function() {
    if (!running) {
        timer = setInterval(updateTime, 1000); // update every 1 second
        running = true; // mark as running
    }
}

// Pause button
document.getElementById('pause').onclick = function() {
    clearInterval(timer); // stop timer
    running = false;      // mark as paused
}

// Reset button
document.getElementById('reset').onclick = function() {
    clearInterval(timer);
    running = false;
    hours = 0;
    minutes = 0;
    seconds = 0;
    timeDisplay.textContent = "00:00:00"; // reset display
    lapsList.innerHTML = ""; // clear lap times
}

// Lap button
document.getElementById('lap').onclick = function() {
    const li = document.createElement('li'); // create new list item
    li.textContent = timeDisplay.textContent; // set lap time
    lapsList.appendChild(li); // add lap to list
}
