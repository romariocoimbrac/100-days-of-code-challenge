const $rainbow = document.querySelector(".main-container");

$rainbow.addEventListener('click', function (e) {
  if (e.target.classList.contains("color") )
  e.target.classList.toggle("active");
});