let progress = 0;
const usuario = "Camile";
const contraseña = "Camile";
const progressBar = document.getElementById("progressBar");

function doLogin() {
    alert("Acceso concedido");
    window.location.href = "C:/web-gpo-b/Java/TicTacToe.html";
}
function Validar() {
    
    if (usuario === username.value && contraseña === password.value) {
        progressBar.textContent = "¡Proceso Completo!";
        doLogin();
    } else {
        alert("Acceso Denegado");
        window.location.href = "C:/web-gpo-b/Java/Login.html";
    }
}

function doProgress() {
    if (progress < 100) {
        progress += 10;
        progressBar.style.width = progress + "%";
        progressBar.textContent = progress + "%";
        setTimeout(doProgress, 1000);
    } else {
        Validar();
    }
}

function Get(){
    const username = document.getElementById("username");
    const password = document.getElementById("password");
}



doProgress();