const $btn = document.getElementById("btn");

$btn.addEventListener("click", function calcImc() {
  const $weight = document.getElementById("weight").value;
  let $height = document.getElementById("height").value;
  $height = $height.replace(".", "");
  const totalIMC = ($weight / ($height * $height)) * 10000;
  if (typeof totalIMC === "number" && totalIMC > 0)
    document.getElementById("resultIMC").value = totalIMC.toFixed(1);
  else
    document.getElementById("resultIMC").value = "Insira altura e peso válidos";
});
