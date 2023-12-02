// Variables to store timer values
var seconds = "00";
var tens = "00";

// DOM elements references
var appendTens = document.getElementById("tens");
var appendSeconds = document.getElementById("seconds");
var buttonStart = document.getElementById("button-start");
var buttonStop = document.getElementById("button-stop");
var buttonReset = document.getElementById("button-reset");
var interval; // to store timer values

// Function to be executed when the start button is clicked
function startTimer() {
  tens++;

  // Display formatting for tens
  if (tens < 9) {
    appendTens.innerHTML = "0" + tens;
  }
  if (tens > 9) {
    appendTens.innerHTML = tens;
  }

  // Reset tens and increment seconds when it reaches 100
  if (tens > 99) {
    seconds++;
    appendSeconds.innerHTML = "0" + seconds;
    tens = 0;
    appendTens.innerHTML = "0" + 0;
  }

  // Display formatting for seconds
  if (seconds > 9) {
    appendSeconds.innerHTML = seconds;
  }
}

// Event handler for the start button click
buttonStart.onclick = function () {
  // Clear any existing interval to avoid multiple timers running simultaneously
  if (interval) {
    clearInterval(interval);
  }
  // Set up a new interval to run the startTimer function
  interval = setInterval(startTimer);
};

// Event handler for the stop button click
buttonStop.onclick = function () {
  // Clear the interval to stop the timer
  clearInterval(interval);
};

// Event handler for the reset button click
buttonReset.onclick = function () {
  // Clear the interval, reset tens and seconds, and update the display
  clearInterval(interval);
  tens = "00";
  seconds = "00";
  appendSeconds.innerHTML = seconds;
  appendTens.innerHTML = tens;
};
