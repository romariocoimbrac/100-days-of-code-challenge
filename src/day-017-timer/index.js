$start = document.querySelector(".btn-start");
$pause = document.querySelector(".btn-pause");
$reset = document.querySelector(".btn-reset");
let timer;
let seconds = 0;
let minutes = 0;
let hours = 0;

$start.addEventListener("click", function () {
  timer = setInterval(timeHandler, 1000);
  $start.disabled = true;
});
$pause.addEventListener("click", function () {
  timer = clearInterval(timer);
  $start.disabled = false;
});
$reset.addEventListener("click", function () {
  timer = clearInterval(timer);
  $start.disabled = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTime();
});

function timeHandler() {
  seconds++;
  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes == 60) {
    minutes = 0;
    hours++;
  }
  displayTime();
}

function displayTime() {
  let timer_Element = document.querySelector(".timer");
  timer_Element.innerHTML = `${hours}:${minutes}:${seconds}`;
}
