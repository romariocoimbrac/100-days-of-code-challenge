const $text = document.getElementById("text");

//font-style
function selectStyle() {
  const $style = document.getElementById("style").value;
  $text.style.fontFamily = $style;
}

//font-size
const $rangeSlider = document.getElementById("range-slider");
const $size = document.getElementById("size");
$size.innerHTML = $rangeSlider.value;

$rangeSlider.oninput = function () {
  $size.innerHTML = this.value;
  document.getElementById("text").style.fontSize = this.value + "px";
};

//font-color
const $black = document.getElementById("black");
const $red = document.getElementById("red");
const $green = document.getElementById("green");
const $blue = document.getElementById("blue");

$black.addEventListener("click", function () {
  $text.style.color = this.value;
});
$red.addEventListener("click", function () {
  $text.style.color = this.value;
});
$blue.addEventListener("click", function () {
  $text.style.color = this.value;
});
$green.addEventListener("click", function () {
  $text.style.color = this.value;
});

//font-weight
const $normal = document.getElementById("normal");
const $light = document.getElementById("light");
const $bold = document.getElementById("bold");

$normal.addEventListener("click", function () {
  $text.style.fontWeight = this.value;
});
$light.addEventListener("click", function () {
  $text.style.fontWeight = this.value;
});
$bold.addEventListener("click", function () {
  $text.style.fontWeight = this.value;
});
