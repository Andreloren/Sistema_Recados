let usuario = buscarDadosStorage();

/*function salvarDadosStorage(dados){
    localStorage.setItem('usuarios', JSON.stringify(dados))
}*/

function buscarDadosStorage() {
  let dadosString = localStorage.getItem("usuarioLogado");
  let dadosTransformados = JSON.parse(dadosString);

  return dadosTransformados;
}

if (!usuario) {
  sair();
}

listarRecados();

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

if (descricaoHTML === "" && detalhamentoHTML === "") {
  console.log("Descrição e/ou Detalhamento em branco");
}

function cadastrarMensagens() {
  const idMsg = Math.floor(Math.random() * (100 - 10) + 10);

  let mensagemHTML = {
    idMsg,
    descricao: descricaoHTML.value,
    detalhamento: detalhamentoHTML.value,
  };

  if (!descricaoHTML.value || !detalhamentoHTML) {
    alert("Descrição ou Detalhamento em branco");
    return;
  }

  usuario.mensagens.push(mensagemHTML);

  console.log(usuario.mensagens);

  console.log(usuario);

  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));

  atualizarUsuarios();
  listarRecados();
  resetMensagem();
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

function listarRecados() {
  let listaRecados = document.getElementById("listaDeRecados");

  for (const index in usuario.mensagens) {
    listaRecados.innerHTML += `<tr id="${usuario.mensagens[index].idMsg}", class="registro">
    <th>${index}</th>
    <th>${usuario.mensagens[index].descricao}</th>
    <th>${usuario.mensagens[index].detalhamento}</th>
    <th>
    <button type="button" class="blue" onclick="editarMensagens(${usuario.mensagens[index].id})">Editar</button>
    <button type="button" class="red" onclick="apagarMensagens(${usuario.mensagens[index].id})">Apagar</button>
    </th>
    </tr>`;

    console.log(usuario.mensagens[index].idMsg);
    console.log(usuario.mensagens[index].descricao);
    console.log(usuario.mensagens[index].detalhamento);
    console.log(index + 1);
  }
}
function editarMensagens() {
  console.log();
  alert("editou");
}
function apagarMensagens() {
  console.log();
  alert("apagou");
}
