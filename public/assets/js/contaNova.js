let formularioHTML = document.getElementById("formulario");
let emailHTML = document.getElementById("emailCadastrado");
let senhaCadastradaHTML = document.getElementById("novoSenhaUsuario");
let confirmacaoSenhaHTML = document.getElementById("novoSenhaUsuarioRepeat");

function cadastrarUsuarios() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));

  let email = formulario.emailCadastrado.value;
  let senha = formulario.novoSenhaUsuario.value;
  let repSenha = formulario.novoSenhaUsuarioRepeat.value;

  if (!senha || !repSenha) {
    mensagemAlert("atencao", "Campos Vazios");
    return;
  }

  if (senha !== repSenha) {
    mensagemAlert("erro", "Senhas não conferem!");
    resetCadastro();
    return;
  }
  if (senha.length < 5) {
    mensagemAlert("atencao", "Digite uma senha de no mínimo 5 caracteres");
    return;
  }
  const identificador = Math.floor(Math.random() * (1000 - 10) + 10);

  const criarUsuario = {
    identificador,
    email: email,
    senha: senha,
    mensagens: [],
  };

  console.log(criarUsuario);
  usuarios.push(criarUsuario);

  console.log(usuarios);

  localStorage.setItem("usuarios", JSON.stringify(usuarios));
  retornarLogin();
}

formularioHTML.addEventListener("submit", (evento) => {
  evento.preventDefault();

  console.log(emailHTML.value);
  console.log(senhaCadastradaHTML.value);
  console.log(confirmacaoSenhaHTML.value);
});
function retornarLogin() {
  alert("Cadastro Realizado com sucesso");

  let confirmacao = confirm("Deseja voltar a tela inicial?");
  if (confirmacao) {
    resetCadastro();
    mensagemAlert("sucesso", "Voltando para Login");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  } else {
    resetCadastro();
  }
}

function resetCadastro() {
  emailHTML.value = "";
  senhaCadastradaHTML.value = "";
  confirmacaoSenhaHTML.value = "";
}

function mensagemAlert(type, mensagem) {
  let msg = document.getElementById("msgSucesso");

  msg.innerText = mensagem;
  msg.style.display = "block";
  switch (type) {
    case "sucesso":
      msg.style.color = "green";
      setTimeout(() => {
        msg.style.display = "none";
      }, 4000);
      break;
    case "erro":
      msg.style.color = "red";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
      break;
    default:
      msg.style.color = "yellow";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
      break;
  }
}