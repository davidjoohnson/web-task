function actualizarReloj() {
    var fecha = new Date();
    var hora = formatoDosDigitos(fecha.getHours());
    var minutos = formatoDosDigitos(fecha.getMinutes());
    var segundos = formatoDosDigitos(fecha.getSeconds());

    document.getElementById("hora").textContent = hora;
    document.getElementById("minutos").textContent = minutos;
    document.getElementById("segundos").textContent = segundos;
}

function formatoDosDigitos(valor) {
    return valor < 10 ? "0" + valor : valor;
}

setInterval(actualizarReloj, 1000);
