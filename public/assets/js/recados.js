let usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

/*function salvarDadosStorage(dados){
    localStorage.setItem('usuarios', JSON.stringify(dados))
}


function buscarDadosStorage(){
    let dadosString = localStorage.getItem('cadastros') || []
    let dadosTransformados = JSON.parse(dadosString)
    
    return dadosTransformados  // pode ser assim =>  JSON.parse(localStorage.getItem('cadastros'))
}*/

if (!usuario) {
  sair();
}

let identidadeSistema = document.getElementById("userEmail");
identidadeSistema.innerHTML = `${usuario.email}`;

let numero = 0;
let emailUsuario = usuario.email;
let senhaUsuario = usuario.senha;
let idUsuario = usuario.identificador;
let msgUsuario = usuario.mensagens;

let botaoSair = document.getElementById("logout");

botaoSair.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  sair();
});

function sair() {
  return (window.location.href = "index.html");
}

let botaoSalvar = document.getElementById("save");

botaoSalvar.addEventListener("click", cadastrarMensagens);
let descricaoHTML = document.getElementById("descricao");
let detalhamentoHTML = document.getElementById("detalhamento");

function cadastrarMensagens() {
  const idMsg = Math.floor(Math.random() * (100 - 10) + 10);

  let mensagemHTML = {
    idMsg,
    Descrição: descricaoHTML.value,
    Detalhamento: detalhamentoHTML.value,
  };

  usuario.mensagens.push(mensagemHTML);

  console.log(usuario.mensagens);

  console.log(usuario);

  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  atualizarUsuarios();
  resetMensagem();
  //listaTransacoes();
}

function atualizarUsuarios() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios"));
  usuarios.forEach((user) => {
    if (user.email === usuario.email) {
      user.mensagens = usuario.mensagens;
    }
  });
  localStorage.setItem("usuarios", JSON.stringify(usuarios));
}

function resetMensagem() {
  descricaoHTML.value = "";
  detalhamentoHTML.value = "";
}
