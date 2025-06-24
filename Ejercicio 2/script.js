// Lista predefinida de palabras
const palabras = ["manzana", "banana", "pera", "durazno", "frutilla", "mango"];

// Función para filtrar palabras según el input del usuario
function filtrarPalabras() {
  const input = document.getElementById("filtroInput").value.trim().toLowerCase();
  const mensaje = document.getElementById("mensaje");
  const lista = document.getElementById("listaResultado");

  // Limpiar resultados anteriores
  mensaje.textContent = "";
  lista.innerHTML = "";

  // Validar entrada vacía
  if (input === "") {
    mensaje.textContent = "Por favor, ingresa una palabra para filtrar.";
    return;
  }

  // Filtrar palabras
  const resultado = palabras.filter(palabra => palabra.toLowerCase().includes(input));

  // Mostrar resultados
  if (resultado.length === 0) {
    mensaje.textContent = "No se encontraron coincidencias.";
  } else {
    resultado.forEach(palabra => {
      const li = document.createElement("li");
      const regex = new RegExp(`(${input})`, "gi");
      const palabraResaltada = palabra.replace(regex, "<mark>$1</mark>");
      li.innerHTML = palabraResaltada;
      lista.appendChild(li);
    });
  }
}