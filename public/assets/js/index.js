let formularioHTML = document.getElementById("formulario");
let emailHTML = document.getElementById("emailCadastrado");
let senhaCadastradaHTML = document.getElementById("novoSenhaUsuario");
let confirmacaoSenhaHTML = document.getElementById("novoSenhaUsuarioRepeat");

function cadastroSenha() {
  let senha = formulario.novoSenhaUsuario.value;
  let repSenha = formulario.novoSenhaUsuarioRepeat.value;

  /*if (senha < 6 && repSenha < 6) {
    alert("Digite uma senha de no mínimo 5 caracteres");
  } else if (confirmacaoSenhaHTML.value === senhaCadastradaHTML.value) {
    confirmacaoSenhaHTML.setCustomValidity("");
    alert("Conta Cadastrada com Sucesso");
  } else {
    confirmacaoSenhaHTML.setCustomValidity("As senhas não conferem");
  }
}

formularioHTML.addEventListener("submit", (evento) => {
  evento.preventDefault();

  console.log(emailHTML.value);
  console.log(senhaCadastradaHTML.value);
  console.log(confirmacaoSenhaHTML.value);
  /*window.location.href = "index.html";*/
});
