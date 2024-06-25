// Alejandro Barrionuevo Rosado

/**
 * Muestra o oculta el texto.
 */
document.addEventListener('DOMContentLoaded', function () {
  const div = document.getElementById('divInfo');
  const botonMostrar = document.getElementById('mostrarInfo');

  botonMostrar.addEventListener('click', function () {
    if (div.style.display === 'none' || div.style.display === '') {
      div.style.display = 'block'; // Mostrar el div
    } else {
      div.style.display = 'none'; // Ocultar el div
    }
  });
});
