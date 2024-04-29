document.addEventListener("DOMContentLoaded", function() {
    var horaActual = new Date().getHours();
    var minutosActual = new Date().getMinutes();
    var imagenFondo = document.getElementById('inicio');
  
    if (horaActual == 0 && minutosActual < 46) {
        imagenFondo.style.backgroundImage = "url('img/fondos/0.png'), url('img/fondos/1.jpg')";    
    } else {
        var mins = horaActual * 60 + minutosActual;
        var mins2 = mins / 16.67;
        var fondo = Math.floor(mins2);
        imagenFondo.style.backgroundImage = "url('img/fondos/0.png'), url('img/fondos/" + fondo + ".jpg')";
    }
});
