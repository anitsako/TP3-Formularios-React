//Función para cargar las tareas completadas desde la API
async function cargarTareas() {
    const lista = document.getElementById("listaTareas");
    const mensaje = document.getElementById("mensaje");
    
    lista.innerHTML = ""; // Limpiar la lista antes de cargar nuevas tareas
    mensaje.textContent = ""; // Limpiar el mensaje previo

    // Realizar la petición a la API
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/todos"); // URL de la API

        // Verificar si la respuesta es exitosa
        if (!respuesta.ok) {
            throw new Error("Error al cargar las tareas");
        }

        // Convertir la respuesta a JSON y filtrar las tareas completadas
        const datos = await respuesta.json();
        const completadas = datos.filter(tarea => tarea.completed === true);

        // Verificar si hay tareas completadas y mostrar un mensaje adecuado
        if (completadas.length === 0) {
            mensaje.textContent = "No hay tareas completadas.";
            return;
        }

        // Mostrar las tareas completadas en la lista
        completadas.forEach(tarea => {
            mensaje.textContent = `Se encontraron ${completadas.length} tareas completadas.`;
            mensaje.className = "success";
            const li = document.createElement("li");
            li.textContent = `${tarea.title} - Completada`;
            lista.appendChild(li);
        });

    // Manejo de errores en caso de fallo en la petición
    } catch (error) {
        mensaje.textContent = "Hubo un problema al obtener las tareas.";
        mensaje.className = "error";
        console.error(error);
    }
}