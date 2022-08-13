let emailValidacao = document.getElementById("emailUsuario");
let senhaValidacao = document.getElementById("senhaUsuario");
let botaoLogin = document.getElementById("botao1");

let usuarioLogin = JSON.parse(localStorage.getItem("usuarios"));
console.log(usuarioLogin);

botaoLogin.addEventListener("click", logarUsuario);

function logarUsuario() {
  let validarUsuario = usuarioLogin.find(
    (usuarioValidacao) =>
      usuarioValidacao.senha === senhaValidacao.value &&
      usuarioValidacao.email === emailValidacao.value
  );
  console.log(validarUsuario);
}
