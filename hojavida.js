// HOJA DE VIDA PRO
const nombreGuardado = localStorage.getItem("nombre");
const correoGuardado = localStorage.getItem("correo");

if (nombreGuardado) {
    document.querySelector(".header h1").textContent = nombreGuardado;
}

if (correoGuardado) {
    document.querySelector(".header p:nth-child(3)").textContent = correoGuardado;
}


// Animación suave al cargar
const container = document.querySelector(".container");

if (container) {
    container.style.opacity = 0;
    container.style.transform = "translateY(20px)";

    setTimeout(() => {
        container.style.transition = "all 0.6s ease";
        container.style.opacity = 1;
        container.style.transform = "translateY(0)";
    }, 200);
}


// Interacción PRO
const habilidades = document.querySelectorAll(".right ul li");

habilidades.forEach(habilidad => {
    habilidad.addEventListener("mouseover", () => {
        habilidad.style.color = "#2f6f95";
        habilidad.style.fontWeight = "bold";
    });

    habilidad.addEventListener("mouseout", () => {
        habilidad.style.color = "black";
        habilidad.style.fontWeight = "normal";
    });
});