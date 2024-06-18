// Alejandro Barrionuevo Rosado

/**
 * Funcion que obtiene las coordenadas
 * del portal del Nether utilizando 
 * las del Overworld.
 */
function calculate() {
  const DIVIDER = 8;
  const MAX = 29999984; // Coordenada más alta
  const MIN = -29999984; // Coordenada más baja
  const HEIGHT_MAX = 320; // Límite de altura
  const HEIGHT_MIN = -64; // Límite del suelo

  let xO, zO, yO, xN, zN, yN;

  // Obtiene las coordenadas del Overworld desde el formulario.
  xO = parseFloat(document.calculadora.xOverworld.value);
  zO = parseFloat(document.calculadora.zOverworld.value);
  yO = parseFloat(document.calculadora.yOverworld.value);

  // Verifica si las coordenadas son números válidos.
  if (isNaN(xO) || isNaN(zO) || isNaN(yO)) {
    error("Las coordenadas deben ser números.");
    restart();
    return;
  } else if (!isInteger(xO) || !isInteger(zO) || !isInteger(yO)) {
    restart();
    error("Las coordenadas deben ser números enteros.");
    return;
  } else if (xO > MAX || xO < MIN || zO > HEIGHT_MAX || zO < HEIGHT_MIN || yO > MAX || yO < MIN) {
    error("Las coordenadas deben estar dentro de los valores del juego.");
    restart();
    return; 
  }

  // Calcula las coordenadas del Nether.
  xN = Math.round(xO / DIVIDER);
  zN = zO;
  yN = Math.round(yO / DIVIDER);

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

/**
 * Comprueba si un número es un entero:
 * 
 * true  --> si es un entero
 * false --> si no
 * 
 * @param num int
 * @returns boolean
 * 
 */
function isInteger(num) {
  return num % 1 === 0;
}

/**
 * Genera un mensaje de error.
 * @param {string} message - El mensaje de error a mostrar.
 */
function error(message) {
  console.error(message);
  alert(message);
}

/**
 * Valida que el valor ingresado sea un número entero.
 * @param {HTMLInputElement} input - El elemento de entrada a validar.
 */
function validateIntegerInput(input) {
  const value = input.value;
  if (value && !isInteger(parseFloat(value))) {
    input.value = value.slice(0, -1);
    error("Las coordenadas deben ser números enteros.");
  }
}
