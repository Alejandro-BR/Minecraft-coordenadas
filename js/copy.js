// Alejandro Barrionuevo Rosado

/**
 * Funcion que copia las coordenadas.
 */
function copyCoordinates() {

  let xN, zN, yN, coordinates;

  xN = parseFloat(document.calculadora.xNether.value);
  zN = parseFloat(document.calculadora.zNether.value);
  yN = parseFloat(document.calculadora.yNether.value);

  coordinates = `${xN}, ${zN}, ${yN}`;

  // Utilizar el Clipboard API para copiar al portapapeles
  navigator.clipboard.writeText(coordinates).then(function () {
    alert("Coordenadas copiadas: " + coordinates);
    console.log("Coordenadas copiadas: " + coordinates)
  }).catch(function (err) {
    console.error('Error al copiar al portapapeles: ', err);
  });
}