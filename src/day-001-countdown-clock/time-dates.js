const $dateInitial = new Date("September 22, 2020, 00:00");
let $dateNow = new Date();
const $dateFinal = new Date("December 31, 2020, 23:59");

document.getElementById("initial").innerHTML = showDate($dateInitial);
document.getElementById("actual").innerHTML = showDate($dateNow);
document.getElementById("final").innerHTML = showDate($dateFinal);

function showDate(date) {
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

setInterval(function remainDate() {
  $dateNow = new Date();
  let remain = ($dateFinal.getTime() - $dateNow.getTime()) / 1000;

  let days = parseInt(remain / 86400);
  remain = remain % 86400;
  let hours = parseInt(remain / 3600);
  remain = remain % 3600;
  let mins = parseInt(remain / 60);
  let secs = parseInt(remain % 60);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = mins;
  document.getElementById("seconds").innerHTML = secs;
}, 1000);
