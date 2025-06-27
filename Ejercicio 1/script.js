// Función para verificar si se debe deshabilitar el botón
function verificarOperacion() {
  const operacion = document.getElementById("operacion").value;
  const num2 = parseFloat(document.getElementById("num2").value);
  const boton = document.getElementById("btnCalcular");
  const aviso = document.getElementById("aviso");

  // Deshabilitar el botón si la operación es "dividir"
  if (operacion === "dividir" && num2 === 0) {
    boton.disabled = true;
    aviso.textContent = "Esta operacion no esta permitida";
  } else {
    boton.disabled = false;
    aviso.textContent = "";
  }
}

// Función para realizar el cálculo
function calcular() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operacion = document.getElementById("operacion").value;
  const resultadoElement = document.getElementById("resultado");

  // Validar que ambos números sean válidos
  if (isNaN(num1) || isNaN(num2)) {
    resultadoElement.textContent = "Por favor, ingresa ambos números";
    return;
  }

  let resultado;

  // Switch para determinar la operación
  switch (operacion) {
    case "sumar":
      resultado = num1 + num2;
      break;
    case "restar":
      resultado = num1 - num2;
      break;
    case "multiplicar":
      resultado = num1 * num2;
      break;
    case "dividir":
      resultado = num1 / num2;
      break;
    default:
        resultado = "Operacion invalida";
  }

  // Mostrar el resultado
  resultadoElement.textContent = `Resultado: ${resultado}`;
}
