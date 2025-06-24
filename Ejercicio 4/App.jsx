function App() {
    const [activo, setActivo] = React.useState("izquierdo");

    const manejarClick = (boton) => {
        if (boton === "izquierdo") {
            setActivo("derecho");
        } else {
            setActivo("izquierdo");
        }
    };

    return (
        <div className="contenedor">
            <h2>Control de botones</h2>

            <p>Botón activo: <strong>{activo}</strong></p>

            {/* Botón izquierdo */}
            <button
                onClick={() => manejarClick("izquierdo")}
                disabled={activo !== "izquierdo"}
                className={activo === "izquierdo" ? "activo" : ""}
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