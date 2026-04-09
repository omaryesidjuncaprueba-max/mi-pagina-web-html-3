// FORMULARIO PRO
const form = document.getElementById("miFormulario");

if (form) {

    const inputs = form.querySelectorAll("input, textarea");

    // Validación en tiempo real
    inputs.forEach(input => {
        input.addEventListener("input", () => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid green";
            }
        });
    });

    // Submit
    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let nombre = document.querySelector("input[type='text']").value;
        let correo = document.querySelector("input[type='email']").value;

        if(nombre === "" || correo === "") {
            mostrarMensaje("⚠️ Completa los campos obligatorios", "error");
            return;
        }

        // Guardar datos (PRO 🔥)
        localStorage.setItem("nombre", nombre);
        localStorage.setItem("correo", correo);

        mostrarMensaje("✅ Registro exitoso", "ok");

        form.reset();
    });
}


// Función de mensajes elegantes
function mostrarMensaje(texto, tipo) {
    let mensaje = document.createElement("div");

    mensaje.textContent = texto;
    mensaje.style.padding = "10px";
    mensaje.style.marginTop = "10px";
    mensaje.style.borderRadius = "5px";
    mensaje.style.textAlign = "center";

    if (tipo === "error") {
        mensaje.style.backgroundColor = "#ffcccc";
        mensaje.style.color = "red";
    } else {
        mensaje.style.backgroundColor = "#ccffcc";
        mensaje.style.color = "green";
    }

    form.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove();
    }, 3000);
}