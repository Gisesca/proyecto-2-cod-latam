
document.getElementById("imagenes").addEventListener('mouseover', changeImage);
document.getElementById("imagenes").addEventListener('mouseout', resetImage);

function changeImage() {
  var image = document.getElementById("imagenes");
  image.src = "img/1.jpg"; // Reemplaza con la ruta de la nueva imagen
}

function resetImage() {
  var image = document.getElementById("imagenes");
  image.src = "img/3.jpg"; // Reemplaza con la ruta de la imagen original
}

// Funcionalidad Dark-Mode 
function enableDarkMode() {
  let main_body = document.body;
  main_body.classList.toggle("dark-mode");

  // Check if checkbox is checked or not
  if (document.getElementById('checkitem').checked) {
      console.log("checked");
  } else {
      console.log("NOT checked");
  }


}

  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navBar = document.getElementsByClassName('nav-bar')[0]
  
  toggleButton.addEventListener('click', () => {
    navBar.classList.toggle('active')
  })

  