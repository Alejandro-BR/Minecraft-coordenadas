// Alejandro Barrionuevo Rosado

/**
 * Codigo para cambiar el tema
 */
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.getElementById('toggle');
  if (toggle) {
    toggle.addEventListener('change', function () {
      var body = document.body;
      var header = document.querySelector('header');
      var footer = document.querySelector('footer');

      if (this.checked) {
        body.classList.remove('overworld');
        body.classList.add('nether');
        header.classList.remove('overworld');
        header.classList.add('nether');
        footer.classList.remove('overworld');
        footer.classList.add('nether');
        console.log("Tema cambiado a Nether");
      } else {
        body.classList.remove('nether');
        body.classList.add('overworld');
        header.classList.remove('nether');
        header.classList.add('overworld');
        footer.classList.remove('nether');
        footer.classList.add('overworld');
        console.log("Tema cambiado a Overworld");
      }
    });
  } else {
    console.error("No se encontró el elemento con id='toggle'");
  }
});
