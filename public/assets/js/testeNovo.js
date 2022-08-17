let usuario = buscarDadosStorage();

document.addEventListener("DOMContentLoaded", () => {
  usuario.forEach((registro) => montarHTML(registro));
});

formularioHTML.addEventListener("buttom", (evento) => {
  evento.preventDefault();

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

  usuario.mensagens.push(mensagemHTML);
  montarHTML(usuario);
  salvarDadosStorage(mensagemHTML);
});
//ate aqui
function montarHTML(registro) {
  const section = document.createElement("section"); // <section></section>
  section.setAttribute("id", registro.cpf);
  section.classList.add("registro");

  const pNome = document.createElement("p"); // <p></p>
  pNome.innerHTML = `Nome: <span>${registro.nome}</span>`;

  const pIdade = document.createElement("p"); // <p></p>
  pIdade.innerHTML = `Idade: <span>${registro.idade}</span>`;

  const pCpf = document.createElement("p"); // <p></p>
  pCpf.innerHTML = `CPF: <span>${registro.cpf}</span>`;

  const pRua = document.createElement("p"); // <p></p>
  pRua.innerHTML = `Rua: <span>${registro.rua}</span>`;

  const pNumero = document.createElement("p"); // <p></p>
  pNumero.innerHTML = `Numero: <span>${registro.numero}</span>`;

  const pBairro = document.createElement("p"); // <p></p>
  pBairro.innerHTML = `Bairro: <span>${registro.bairro}</span>`;

  const pCidade = document.createElement("p"); // <p></p>
  pCidade.innerHTML = `Cidade: <span>${registro.cidade}</span>`;

  const pEstado = document.createElement("p"); // <p></p>
  pEstado.innerHTML = `Estado: <span>${registro.estado}</span>`;

  const pEscolaridade = document.createElement("p"); // <p></p>
  pEscolaridade.innerHTML = `Escolaridade: <span>${registro.escolaridade}</span>`;

  const buttonExcluir = document.createElement("button");
  buttonExcluir.setAttribute("class", "button-apagar");
  buttonExcluir.innerText = "Apagar";
  buttonExcluir.addEventListener("click", () => {
    apagar(registro.cpf);
  });

  const buttonEditar = document.createElement("button");
  buttonEditar.setAttribute("class", "button-editar");
  buttonEditar.innerText = "Editar";
  buttonEditar.addEventListener("click", () => {
    editar(registro);
  });

  //    [ Exatas, Humanas, Nenhum ]    =>  'Exatas, Nenhum, Humanas'
  let manipulado = registro.areaInteresse.reduce((acc, prox) => {
    return acc + ", " + prox;
  });

  const pAreaInteresse = document.createElement("p"); // <p></p>
  pAreaInteresse.innerHTML = `Area de Interesse: <span>${manipulado}</span>`; // [ Exatas, Humanas ]

  section.appendChild(pNome);
  section.appendChild(pIdade);
  section.appendChild(pCpf);
  section.appendChild(pEscolaridade);
  section.appendChild(pRua);
  section.appendChild(pNumero);
  section.appendChild(pBairro);
  section.appendChild(pCidade);
  section.appendChild(pEstado);
  section.appendChild(pAreaInteresse);
  section.appendChild(buttonEditar);
  section.appendChild(buttonExcluir);
  registrosHTML.appendChild(section);
}

function salvarDadosStorage(usuario) {
  localStorage.setItem("usuarioLogado", JSON.stringify(usuario));
  // criar => setItem('chave', 'valor')
}

function buscarDadosStorage() {
  /* let dadosString = localStorage.getItem('cadastros') ?? []
            let dadosTransformados = JSON.parse(dadosString) */

  return JSON.parse(localStorage.getItem("cadastros") ?? "[]"); // pode ser assim =>  JSON.parse(localStorage.getItem('cadastros'))
}

function apagar(cpf) {
  const dados = buscarDadosStorage();
  const indiceEncontrado = dados.findIndex((valor) => valor.cpf === cpf);

  const registros = document.querySelectorAll(".registro"); // sections que tiverem a classe registro

  for (const section of registros) {
    if (section.id === cpf) {
      registrosHTML.removeChild(section);
      dados.splice(indiceEncontrado, 1);
    }
  }

  salvarDadosStorage(dados);
}

function editar(pessoaCadastrada) {
  console.log(pessoaCadastrada);
}
