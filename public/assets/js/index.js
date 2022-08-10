let formularioHTML = document.getElementById("formulario");

formularioHTML.addEventListener("submit", (evento) => {
  evento.preventDefault();
  alert("Conta Cadastrada com Sucesso");
  window.location.href = "index.html";
});
