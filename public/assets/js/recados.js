let usuario = buscarDadosStorage();

if (!usuario) {
  sair();
}

function buscarDadosStorage() {
  return JSON.parse(localStorage.getItem("usuarioLogado"));
}

listarRecados();

let identidadeSistema = document.getElementById("userEmail");
identidadeSistema.innerHTML = `${usuario.email}`;

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
    descricao: descricaoHTML.value,
    detalhamento: detalhamentoHTML.value,
  };

  if (descricaoHTML.value === "" || detalhamentoHTML.value === "") {
    alert("Descrição ou Detalhamento em branco");
    resetMensagem();
    return;
  }

  usuario.mensagens.push(mensagemHTML);

  console.log(usuario.mensagens);
  salvarDadosStorage(usuario);

  function salvarDadosStorage(usuario) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
  }

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
  listaRecados.innerHTML = "";

  for (const index in usuario.mensagens) {
    listaRecados.innerHTML += `<tr id="${usuario.mensagens[index].idMsg}", class="registro">
    <th>${index}</th>
    <th>${usuario.mensagens[index].descricao}</th>
    <th>${usuario.mensagens[index].detalhamento}</th>
    <th>
    <button type="button" class="blue" onclick="editarMensagens(${usuario.mensagens[index].idMsg})">Editar</button>
    <button type="button" class="red" onclick="apagarMensagens(${usuario.mensagens[index].idMsg})">Apagar</button>
    </th>
    </tr>`;

    console.log(usuario.mensagens[index].idMsg); //40
    console.log(usuario.mensagens[index].descricao);
    console.log(usuario.mensagens[index].detalhamento);
  }
}

function editarMensagens(indiceMensagem) {
  console.log();
  alert("editou");
}
function apagarMensagens(idMsg) {
  let confirmaApagar = confirm("Deseja realmente apagar esta mensagem?");
  if (confirmaApagar) {
    const novaMensagem = usuario.mensagens.filter(
      (newMsg) => newMsg.idMsg !== idMsg
    );
    usuario.mensagens = novaMensagem;
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
    listarRecados();
    atualizarUsuarios();
    console.log(novaMensagem);
  }
}

console.log(usuario);
console.log(usuario.mensagens);
