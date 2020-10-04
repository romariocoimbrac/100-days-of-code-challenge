$number = document.querySelector(".number");
$btn = document.querySelector(".btn");
$number.value = 0;

$btn.addEventListener("click", function () {
  $number.value = iife($number.value);
  $number.textContent = $number.value;
});
