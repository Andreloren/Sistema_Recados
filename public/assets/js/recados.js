let usuario = JSON.parse(localStorage.getItem("usuarioLogado"));

let usuarios = JSON.parse(localStorage.getItem("usuarios"));
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

let botaoSair = document.getElementById("logout");

botaoSair.addEventListener("click", () => {
  localStorage.removeItem("usuarioLogado");
  sair();
});

function sair() {
  return (window.location.href = "index.html");
}
// Ate aqui está pronto

let botaoSalvar = document.getElementById("salvar");

botaoSalvar.addEventListener("click", cadastrarMensagens);

function cadastrarMensagens() {
  let descricaoHTML = document.getElementById("descricao");
  let detalhamentoHTML = document.getElementById("detalhamento");

  let mensagemHTML = [
    {
      Descrição: descricaoHTML.value,
      Detalhamento: detalhamentoHTML.value,
    },
  ];

  console.log(mensagemHTML);

  console.log(usuario.mensagens);
  console.log(usuarios);
  console.log(usuario);
}
