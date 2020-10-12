const $fight = document.querySelector(".fight");
const poke1 = {
  img: document.querySelector(".poke-img1"),
  name: document.querySelector(".name1"),
  weight: document.querySelector(".weight1")
};
const poke2 = {
  img: document.querySelector(".poke-img2"),
  name: document.querySelector(".name2"),
  weight: document.querySelector(".weight2")
};
let chosen = [];


$fight.addEventListener('click', function () {
  for (let i=1; i<=2; i++) {
  chosen[i] = parseInt((Math.random() * 1000));
  while(chosen[i] > 893)
  chosen[i] = parseInt((Math.random() * 1000));
  }

  getData(chosen[1], poke1);
  getData(chosen[2], poke2);
})

function getData(number, poke) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    drawData(data, number, poke)
  });
}

function drawData(data, number, poke) {
  poke.img.src = data.sprites.front_default;
  poke.name.textContent = `#${number} ${data.name}`;
  poke.weight.textContent = data.weight;
  drawWinner ();
}

function drawWinner () {
if (parseInt(poke1.weight.textContent) > parseInt(poke2.weight.textContent)){
poke1.name.style.color = "green";
poke2.name.style.color = "#373737";
}
else {
poke2.name.style.color = "green";
poke1.name.style.color = "#373737";
}
}
