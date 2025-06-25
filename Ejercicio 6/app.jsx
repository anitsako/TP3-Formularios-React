function App() {
    // Estados para peso, altura e IMC
    const [peso, setPeso] = React.useState("");
    const [altura, setAltura] = React.useState("");
    const [mensaje, setMensaje] = React.useState("");
    const [claseIMC, setClaseIMC] = React.useState("");

    // Función para calcular el IMC
    const calcularIMC = () => {
        const p = parseFloat(peso);
        const h = parseFloat(altura);

        if (isNaN(p) || isNaN(h) || h <= 0) {
            setMensaje("Por favor, ingresa valores válidos");
            setClaseIMC("aviso");
            return;
        }

        // Calcular el IMC
        const imc = p / (h * h);
        let resultado = "";
        let claseIMC = "";

        // Determinar el resultado basado en el IMC
        if (imc < 18.5) {
            resultado = "Bajo peso";
            claseIMC = "amarillo";
        } else if (imc >= 18.5 && imc < 24.9) {
            resultado = "Peso normal";
            claseIMC = "verde";
        } else if (imc >= 25 && imc < 29.9) {
            resultado = "Sobrepeso";
            claseIMC = "naranja";
        } else {
            resultado = "Obesidad";
            claseIMC = "rojo";
        }
        
        setMensaje(`Tu IMC es ${imc.toFixed(2)} - ${resultado}`);
        setClaseIMC(claseIMC);
    };

    return (
        <div className="container">
            <h2>Calculadora de IMC</h2>

            {/* Campo de entrada para el peso */}
            <input
                type="number"
                placeholder="Peso (kg)"
                value={peso}
                onChange={(e) => setPeso(e.target.value)}
            />

            {/* Campo de entrada para la altura */}
            <input
                type="number"
                placeholder="Altura (m)"
                value={altura}
                onChange={(e) => setAltura(e.target.value)}
            />

            {/* Botón para calcular el IMC */}
            <button onClick={calcularIMC}>Calcular IMC</button>
            
            {/* Mensaje con el resultado */}
            <p className={claseIMC}>{mensaje}</p>
        </div>
    );
}
