const $text = document.querySelector(".text");

typingEffect($text);

function typingEffect(text) {
  const textSplit = text.innerHTML.split("");
  text.textContent = '';

  textSplit.forEach((element, i) => {
    setTimeout (() =>
      text.innerHTML += element, 75 * i);
  });
}