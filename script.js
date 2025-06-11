document.addEventListener("DOMContentLoaded", function() {
  const tipoUsuario = localStorage.getItem("usuarioTipo");
  const btnAcesso = document.getElementById("btn-acesso");
  const btnTrabalho = document.getElementById("btn-trabalho");
  const usuarioLogado = document.getElementById("usuario-logado");

  if (tipoUsuario) {
    document.body.classList.add("logado");
    if (usuarioLogado) {
      usuarioLogado.textContent = "Logado como: " + tipoUsuario.charAt(0).toUpperCase() + tipoUsuario.slice(1);
    }
    if (btnTrabalho) {
      btnTrabalho.textContent = "Área do " + tipoUsuario.charAt(0).toUpperCase() + tipoUsuario.slice(1);
      btnTrabalho.style.display = "inline-block";
      btnTrabalho.href = tipoUsuario + ".html";
    }
    if (btnAcesso) {
      btnAcesso.textContent = "Sair";
      btnAcesso.classList.add("sair");
      btnAcesso.href = "#";
      btnAcesso.onclick = function(e) {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "login.html";
      };
    }
    if (window.location.pathname.includes("login.html")) {
      window.location.href = tipoUsuario + ".html";
    }
  } else {
    document.body.classList.remove("logado");
    if (btnTrabalho) btnTrabalho.style.display = "none";
    if (btnAcesso) {
      btnAcesso.textContent = "Login";
      btnAcesso.classList.remove("sair");
      btnAcesso.href = "login.html";
      btnAcesso.onclick = null;
    }
    const paginasRestritas = ["aluno.html", "professor.html"];
    const paginaAtual = window.location.pathname.split("/").pop();
    
    if (paginasRestritas.includes(paginaAtual)) {
      window.location.href = "login.html";
    }
  }
});