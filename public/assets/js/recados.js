let usuario = JSON.parse(localStorage.getItem("usuarioLogado"));
console.log(usuario);

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
let botaoSalvar = document.getElementById("salvar");

let emailUsuario = document.getElementById("userEmail");
emailUsuario.innerHTML = usuario.email;

let descricaoHTML = document.getElementById("descricao");
let detalhamentoHTML = document.getElementById("detalhamento");

botaoSalvar.addEventListener("click", salvarMensagens);

function salvarMensagens() {
  let insereRecado = {
    email: usuario.email,
    identificador: usuario.identificador,
    mensagens: [
      {
        descricao: descricaoHTML.value,
        detalhamento: detalhamentoHTML.value,
      },
    ],
    senha: usuario.senha,
  };

  console.log(descricaoHTML);
  console.log(detalhamentoHTML);
  console.log(insereRecado);

  localStorage.setItem("usuarios", JSON.stringify(insereRecado));
}
