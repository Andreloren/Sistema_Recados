let usuario = buscarDadosStorage();

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
function apagarMensagens(indiceMensagem) {
  /*for (const index in usuario.mensagens) {
    if (usuario.mensagens[index] === index) {
      let indiceEncontrado = usuario.mensagens.findIndex(
        (valor) => valor.index === index
      );
      usuario.mensagens.splice(indiceEncontrado, 1);
    }
    console.log(usuario.mensagens[index].idMsg);
  }*/

  /*usuario.mensagens.forEach((mensagem) => {
    if (mensagem.idMsg === usuario.mensagens.idMsg) {
      mensagem.idMsg.splice(usuario.mensagens, 1);
    }
  });*/

  /*for (const idMsg in usuario.mensagens) {
    if (idMsg === id) {
      usuario.mensagens.splice(id);
    }
  }

  for (const index of usuario.mensagens) {
    if (index === id.lenght) {
      usuario.mensagens.splice(usuario.mensagens.lenght);
    }
  }*/

  /*salvarDadosStorage(usuario);

  function salvarDadosStorage(usuario) {
    localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
  }
  atualizarUsuarios();*/

  alert("apagou");
}
console.log(usuario);
console.log(usuario.mensagens);
