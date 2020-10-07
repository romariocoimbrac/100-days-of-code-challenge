const $btn = document.getElementById("change-msg");
const $coddedMsg = document.querySelector(".codded-msg");

$btn.addEventListener("click", function () {
  const $text = document.querySelector(".inputs-text").value;
  const $number = document.querySelector(".inputs-number").value;
  $coddedMsg.textContent = codificaMensagem($number, $text);
});

function codificaMensagem(numeroPosicoes, mensagem) {
  let mensagemCodificada = [];
  mensagem = mensagem.toUpperCase().split("");
  for (let i = 0; i < mensagem.length; i++) {
    mensagemCodificada[i] = mensagem[i].charCodeAt(0) - numeroPosicoes;
    if (mensagemCodificada[i] < 65)
      mensagemCodificada[i] = mensagemCodificada[i] + 26;
    if (mensagemCodificada[i] > 90)
      mensagemCodificada[i] = mensagemCodificada[i] - 26;
    mensagemCodificada[i] = String.fromCharCode(mensagemCodificada[i]);
  }
  mensagemCodificada = mensagemCodificada.join("");
  console.log(mensagemCodificada);
  return mensagemCodificada;
}
