const $pokeImg = document.querySelector(".poke-img");
const $pokeName = document.querySelector(".poke-name");
const $pokeGenerate = document.querySelector(".poke-generate");
let chosen = 0;

$pokeGenerate.addEventListener('click', function () {
  chosen = parseInt((Math.random() * 1000));
  while(chosen > 893)
  chosen = parseInt((Math.random() * 1000));
  getData(chosen);
})

function getData(number) {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${number}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    drawData(data, number)
  });
}

function drawData(data, number) {
  $pokeImg.src = data.sprites.front_default;
  $pokeName.textContent = `#${number} ${data.name}`;
}
