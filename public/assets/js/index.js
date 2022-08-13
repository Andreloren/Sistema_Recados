let emailValidacao = document.getElementById("emailUsuario");
let senhaValidacao = document.getElementById("senhaUsuario");
let botaoLogin = document.getElementById("botao1");

let usuarioLogado = JSON.parse(localStorage.getItem("usuarios"));
console.log(usuarioLogado);

let validarSenha = usuarioLogado.some(
  (usuarioValidacao) =>
    usuarioValidacao.senha === senhaValidacao.value ||
    usuarioValidacao.email === emailValidacao.value
);
console.log(validarSenha);
console.log(validarEmail);
