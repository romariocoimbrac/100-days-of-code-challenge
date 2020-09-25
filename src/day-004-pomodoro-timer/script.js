const start = document.getElementById("start");
const stop = document.getElementById("stop");
const reset = document.getElementById("reset");

const wMinutes = document.getElementById("work_minutes");
const wSeconds = document.getElementById("work_seconds");

const bMinutes = document.getElementById("break_minutes");
const bSeconds = document.getElementById("break_seconds");

let startTimer;
start.addEventListener("click", function () {
  if (startTimer === undefined) {
    startTimer = setInterval(timer, 1000);
  } else {
    alert("Timer is already running");
  }
});

reset.addEventListener("click", function () {
  resetCounter(wMinutes, wSeconds, bMinutes, bSeconds);
  document.getElementById("counter").innerText = 0;
  stopInterval();
  startTimer = undefined;
});

stop.addEventListener("click", function () {
  stopInterval();
  startTimer = undefined;
});

//Start Timer Function
function timer() {
  //Work Timer Countdown
  if (wSeconds.innerText != 0) {
    wSeconds.innerText--;
  } else if (wMinutes.innerText != 0 && wSeconds.innerText == 0) {
    wSeconds.innerText = 59;
    wMinutes.innerText--;
  }

  //Break Timer Countdown
  if (wMinutes.innerText == 0 && wSeconds.innerText == 0) {
    if (bSeconds.innerText != 0) {
      bSeconds.innerText--;
    } else if (bMinutes.innerText != 0 && bSeconds.innerText == 0) {
      bSeconds.innerText = 59;
      bMinutes.innerText--;
    }
  }
  //Increment Counter by one if one full cycle is completed
  if (
    wMinutes.innerText == 0 &&
    wSeconds.innerText == 0 &&
    bMinutes.innerText == 0 &&
    bSeconds.innerText == 0
  ) {
    resetCounter(wMinutes, wSeconds, bMinutes, bSeconds);
    document.getElementById("counter").innerText++;
  }
}

//Stop Timer Function
function stopInterval() {
  clearInterval(startTimer);
}

function resetCounter(wm, ws, bm, bs) {
  wm.innerText = 25;
  ws.innerText = "00";
  bm.innerText = 5;
  bs.innerText = "00";
}
