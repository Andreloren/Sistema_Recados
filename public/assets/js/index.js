let formularioHTML = document.getElementById("formulario");
let emailHTML = document.getElementById("emailCadastrado");
let senhaCadastradaHTML = document.getElementById("novoSenhaUsuario");
let confirmacaoSenhaHTML = document.getElementById("novoSenhaUsuarioRepeat");

function validarSenha() {
  let senha = formulario.novoSenhaUsuario.value;
  let repSenha = formulario.novoSenhaUsuarioRepeat.value;

  if (repSenha === senha) {
    confirmacaoSenhaHTML.setCustomValidity("");
  } else {
    confirmacaoSenhaHTML.setCustomValidity("As senhas não conferem");
  }
}

formularioHTML.addEventListener("submit", (evento) => {
  evento.preventDefault();
  alert("Cadastro Realizado com sucesso");
  console.log(emailHTML.value);
  console.log(senhaCadastradaHTML.value);
  console.log(confirmacaoSenhaHTML.value);
  window.location.href = "index.html";
});
