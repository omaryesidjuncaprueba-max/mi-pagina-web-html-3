const form = document.getElementById("miFormulario");

if (form) {

    const inputs = form.querySelectorAll("input, textarea");

    inputs.forEach(input => {
        input.addEventListener("input", function() {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
            } else {
                input.style.border = "2px solid green";
            }
        });
    });

    form.addEventListener("submit", function(e) {
        e.preventDefault();

        let valido = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.style.border = "2px solid red";
                valido = false;
            }
        });

        if (!valido) {
            alert("Completa todos los campos");
            return;
        }

        alert("Registro exitoso 🎉");
    });
}