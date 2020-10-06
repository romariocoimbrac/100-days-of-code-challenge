$key = document.querySelector(".key");
$body = document.querySelector(".main");
const dogSample = new Audio("samples/Dog.mp3");
const hyenaSample = new Audio("samples/Hyena.mp3");
const elephantSample = new Audio("samples/Elephant.mp3");
const pigSample = new Audio("samples/Pig.mp3");

$body.addEventListener("keypress", function (event) {
  const keyEvent = event.code;
  console.log(keyEvent);
  playSong(keyEvent);
});

function playSong(keyPressed) {
  if (keyPressed === "KeyD") {
    dogSample.play();
    $key.textContent = "Dog";
  }
  if (keyPressed === "KeyH") {
    hyenaSample.play();
    $key.textContent = "Hyena";
  }
  if (keyPressed === "KeyE") {
    elephantSample.play();
    $key.textContent = "Elephant";
  }
  if (keyPressed === "KeyP") {
    pigSample.play();
    $key.textContent = "Pig";
  }
}
