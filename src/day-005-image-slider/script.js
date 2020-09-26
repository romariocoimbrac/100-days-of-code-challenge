let bgNumber = 1;
const maxImg = 3;
Window.load = slide(bgNumber);

function slide(n) {
  document.getElementById(
    "imgBG",
  ).style.backgroundImage = `url('img/loki${n}.png')`;
  btns(n, maxImg);
}

function backImg() {
  bgNumber > 1 ? slide(--bgNumber) : slide((bgNumber = maxImg));
}
function nextIMG() {
  bgNumber < maxImg ? slide(++bgNumber) : slide((bgNumber = 1));
}

function btns(n, m) {
  document.getElementById("btn").innerHTML = "";
  for (let a = 1; a <= m; a++) {
    a == n
      ? (document.getElementById(
          "btn",
        ).innerHTML += `<li class="selected" onclick="slide(${a})"></li>`)
      : (document.getElementById(
          "btn",
        ).innerHTML += `<li onclick="slide(${a})"></li>`);
  }
}
