// Alejandro Barrionuevo Rosado

/**
 * Funcion que obtiene las coordenadas
 * del portal del Nether utilizando 
 * las del Overworld.
 */
function calculate() {
  const DIVIDER = 8;
  let xO, zO, yO, xN, zN, yN;

  // Obtiene las coordenadas del Overworld desde el formulario.
  xO = parseInt(document.calculadora.xOverworld.value);
  zO = parseInt(document.calculadora.zOverworld.value);
  yO = parseInt(document.calculadora.yOverworld.value);

    // Verifica si las coordenadas son numeros validos.
  if (isNaN(xO) || isNaN(zO) || isNaN(yO)) {
    console.error("Las coordenadas del Overworld deben ser numeros validos.");
    alert("Por favor, ingrese coordenadas validas para el Overworld.");
    return;
  }

  // Calcula las coordenadas del Nether.
  xN = xO / DIVIDER;
  zN = zO;
  yN = yO / DIVIDER;

  // Asigna las coordenadas calculadas al formulario.
  document.calculadora.xNether.value = xN;
  document.calculadora.zNether.value = zN;
  document.calculadora.yNether.value = yN;

  // Imprime en la consola las coordenadas del Overworld y las correspondientes del Nether.
  console.log(`${xO}, ${zO}, ${yO} -> ${xN}, ${zN}, ${yN}`);
}

/**
 * Funcion que reinicia los valores del formulario.
 */
function restart() {
  document.calculadora.reset();
  console.log("Formulario reiniciado.");
}
