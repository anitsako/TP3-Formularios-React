function App() {
  // Estado que indica cuál botón está activo (habilitado)
  const [activo, setActivo] = React.useState("izquierdo");

  // Función que cambia el botón activo cuando se hace clic
  const manejarClick = (boton) => {
    // Si se hace clic en el botón izquierdo, se activa el derecho
    // y viceversa
    if (boton === "izquierdo") {
      setActivo("derecho");
    } else {
      setActivo("izquierdo");
    }
  };

  // Estructura del componente que se renderiza
  return (
    <div className="contenedor">
      <h2>Control de botones</h2>

      {/* Mostrar cuál es el botón actualmente activo */}
      <p>Botón activo: <strong>{activo}</strong></p>

      {/* Botón izquierdo */}
      <button
        onClick={() => manejarClick("izquierdo")}         // Ejecuta la función al hacer clic
        disabled={activo !== "izquierdo"}                 // Solo está habilitado si está activo
        className={activo === "izquierdo" ? "activo" : ""} // Agrega clase visual si está activo
      >
        Izquierdo
      </button>

      {/* Botón derecho */}
      <button
        onClick={() => manejarClick("derecho")}
        disabled={activo !== "derecho"}
        className={activo === "derecho" ? "activo" : ""}
      >
        Derecho
      </button>
    </div>
  );
}
