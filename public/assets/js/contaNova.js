let formularioHTML = document.getElementById("formulario");
let emailHTML = document.getElementById("emailCadastrado");
let senhaCadastradaHTML = document.getElementById("novoSenhaUsuario");
let confirmacaoSenhaHTML = document.getElementById("novoSenhaUsuarioRepeat");

let usuarios = buscarDadosStorage();

function cadastrarUsuarios() {
  let email = emailHTML.value.toLowerCase();
  let senha = senhaCadastradaHTML.value;
  let repSenha = confirmacaoSenhaHTML.value;

  let existe = usuarios.some((valor) => valor.email === email);

  if (existe) {
    Swal.fire("Já existe esse e-mail cadastrado");
    return;
  }

  if (!senha || !repSenha) {
    Swal.fire("Existem campos em branco");
    return;
  }

  if (senha !== repSenha) {
    Swal.fire("Senhas não conferem!");
    return;
  }
  if (senha.length < 5) {
    Swal.fire("Digite uma senha de no mínimo 5 caracteres");
    return;
  }

  const identificador = Math.floor(Math.random() * (1000 - 10) + 10);

  const criarUsuario = {
    identificador,
    email: email,
    senha: senha,
    mensagens: [],
  };

  usuarios.push(criarUsuario);

  salvarUsuarioStorage();
  retornarLogin();
  resetCadastro();
}

formularioHTML.addEventListener("submit", (evento) => {
  evento.preventDefault();
});

function retornarLogin() {
  let timerInterval;
  Swal.fire({
    title: "Cadastro Realizado com Sucesso!",
    html: "Você será redirecionado a página de LOGIN em <b></b>.",
    timer: 2000,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
      window.location.href = "index.html";
      console.log("I was closed by the timer");
    }
  });

  /*let confirmacao = confirm("Deseja voltar a tela inicial?");
  if (confirmacao) {
    resetCadastro();
    mensagemAlert("sucesso", "Voltando para Login");
    setTimeout(() => {
      window.location.href = "index.html";
    }, 2000);
  } else {
    resetCadastro();
  }*/
}

function resetCadastro() {
  emailHTML.value = "";
  senhaCadastradaHTML.value = "";
  confirmacaoSenhaHTML.value = "";
}

/*function mensagemAlert(type, mensagem) {
  let msg = document.getElementById("msgSucesso");

  msg.innerText = mensagem;
  msg.style.display = "block";
  switch (type) {
    case "sucesso":
      msg.style.color = "green";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2500);
      break;
    case "erro":
      msg.style.color = "red";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
      break;
    default:
      msg.style.color = "orange";
      setTimeout(() => {
        msg.style.display = "none";
      }, 2000);
      break;
  }
}*/

function salvarUsuarioStorage() {
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function buscarDadosStorage() {
  return JSON.parse(localStorage.getItem("usuarios"));
}
