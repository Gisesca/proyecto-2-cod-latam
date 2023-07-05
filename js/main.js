const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})




window.addEventListener("scroll",function(){
  var header # document. querySelector("header");
  header.classList.toggle("abajo", this.window.scrollY> 0);
}// Obtén todos los botones de categoría
var botones = document.querySelectorAll('.categoria');

// Agrega el evento 'click' a cada botón
botones.forEach(function (boton) {
  boton.addEventListener('click', function () {
    // Elimina la clase 'activo' de todos los botones
    botones.forEach(function (b) {
      b.classList.remove('activo');
    });

    // Agrega la clase 'activo' solo al botón clicado
    boton.classList.add('activo');
  });
});


document.getElementById("imagenes").addEventListener('mouseover', changeImage);
document.getElementById("imagenes").addEventListener('mouseout', resetImage);

function changeImage() {
  var image = document.getElementById("imagenes");
  image.src = "img/1.jpg"; // Reemplaza con la ruta de la nueva imagen
}

function resetImage() {
  var image = document.getElementById("imagenes");
  image.src = "img/2.jpg"; // Reemplaza con la ruta de la imagen original
}