let botaoLogin = document.getElementById("botao1");

botaoLogin.addEventListener("click", logarUsuario);

function logarUsuario() {
  let usuarioLogin = JSON.parse(localStorage.getItem("usuarios"));
  console.log(usuarioLogin);

  let emailValidacao = document.getElementById("emailUsuario").value;
  let senhaValidacao = document.getElementById("senhaUsuario").value;

  console.log(emailValidacao);
  console.log(senhaValidacao);

  if (!emailValidacao || !senhaValidacao) {
    alert("erro. campos em branco");
    resetLogin();
    return;
  }

  const validarUsuario = usuarioLogin.find(
    (usuarioValidacao) =>
      usuarioValidacao.senha === senhaValidacao &&
      usuarioValidacao.email === emailValidacao
  );

  if (validarUsuario === undefined) {
    alert("Usuário ou senha inexistente.");
    resetLogin();
    return;
  }

  const usuarioLogado = validarUsuario;
  console.log(usuarioLogado);

  localStorage.setItem("usuarioLogado", JSON.stringify(usuarioLogado));
}

function resetLogin() {
  document.getElementById("emailUsuario").value = "";
  document.getElementById("senhaUsuario").value = "";
}

function retornaCadastro() {
  window.location.href = "contanova.html";
}
