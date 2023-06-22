
// Codigo correcto 
const toggleButton = document.getElementById('toggleButton');
const elementoParaOcultar = document.getElementById('elementoParaOcultar');

toggleButton.addEventListener('click', function() {
  elementoParaOcultar.classList.toggle('oculto');
});

function changeImage() {
  var buttons = document.getElementsByClassName('myButton');
  for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    if (button.innerHTML === 'Imagen 1') {
      button.innerHTML = 'Imagen 2';
      button.style.backgroundImage = 'url(../Imagenes/Iconos/menubotonD2.ico)';
    } else {
      button.innerHTML = 'Imagen 1';
      button.style.backgroundImage = 'url(../Imagenes/Iconos/MenuBoton32px.ico)';
    }
  }
}

