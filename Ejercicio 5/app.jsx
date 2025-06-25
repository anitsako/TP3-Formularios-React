function App() {
  // Estados para los dos números, la operación seleccionada y el resultado
  const [num1, setNum1] = React.useState("");
  const [num2, setNum2] = React.useState("");
  const [operacion, setOperacion] = React.useState("sumar");
  const [resultado, setResultado] = React.useState("");

  // Función que se ejecuta al hacer clic en "Calcular"
  const calcular = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    // Validación: ambos campos deben tener números válidos
    if (isNaN(a) || isNaN(b)) {
      setResultado("Por favor, completá ambos campos con números.");
      return;
    }

    // Variable para guardar el resultado según la operación
    let r;

    // Ejecutar la operación seleccionada
    switch (operacion) {
      case "sumar":
        r = a + b;
        break;
      case "restar":
        r = a - b;
        break;
      case "multiplicar":
        r = a * b;
        break;
      default:
        r = "Operación no válida";
    }

    // Guardar el resultado en el estado
    setResultado(`Resultado: ${r}`);
  };

  return (
    <div className="cuadro">
      <h2>Calculadora React</h2>

      {/* Campo de entrada para el primer número */}
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
      />

      {/* Campo de entrada para el segundo número */}
      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
      />

      {/* Selector para elegir la operación a realizar */}
      <select value={operacion} onChange={(e) => setOperacion(e.target.value)}>
        <option value="sumar">Sumar</option>
        <option value="restar">Restar</option>
        <option value="multiplicar">Multiplicar</option>
        <option value="dividir">Dividir</option>
      </select>

      {/* Botón que ejecuta el cálculo. Se deshabilita si se elige "dividir" */}
      <button onClick={calcular} disabled={operacion === "dividir"}>
        Calcular
      </button>

      {/* Mostrar resultado o aviso si la operación es división */}
      {operacion === "dividir" ? (
        <p className="aviso">La división está deshabilitada.</p>
      ) : (
        <p className="resultado">{resultado}</p>
      )}
    </div>
  );
}
