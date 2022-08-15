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
