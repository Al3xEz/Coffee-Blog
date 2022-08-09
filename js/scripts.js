function leerTexto(e) {
  datos[e.target.id] = e.target.value;
}

const datos = {
  nombre: "",
  email: "",
  mensaje: "",
};

const nombre = document.querySelector("#nombre");
const email = document.querySelector("#email");
const mensaje = document.querySelector("#mensaje");
const formulario = document.querySelector(".formulario");

nombre.addEventListener("input", leerTexto);
email.addEventListener("input", leerTexto);
mensaje.addEventListener("input", leerTexto);

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const { nombre, email, mensaje } = datos;

  if (nombre === "" || email === "" || mensaje === "") {
    mostrarAlerta("Todos los campos son obligatorios", "error");

    return;
  }

  mostrarAlerta("Mensaje enviado correctamente", "correcto");

  console.log("Enviando Formulario");
});

function mostrarAlerta(mensaje, alert) {
    const alerta = document.createElement("P");
    alerta.textContent = mensaje;
    alerta.classList.add(alert);
    formulario.appendChild(alerta);
  
    setTimeout(() => {
        alerta.remove();
    }, 5000);
  }
  
