$key = document.querySelector(".key");
$body = document.querySelector(".main");

$body.addEventListener("keypress", function (event) {
  const keyEvent = event.code;
  console.log(keyEvent);
  $key.textContent = keyEvent;
});
