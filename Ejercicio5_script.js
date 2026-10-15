const formulario = document.getElementById("formularioRegistro");
const inputNombre = document.getElementById("inputNombre");
const inputCorreo = document.getElementById("inputCorreo");
const mensaje = document.getElementById("mensajeResultado");

formulario.addEventListener("submit", function(evento) {
  
  evento.preventDefault();

 
  const nombre = inputNombre.value.trim();
  const correo = inputCorreo.value.trim();

  
  if (nombre === "" || correo === "") {
    mensaje.textContent = "Por favor, completa todos los campos.";
    mensaje.className = "error";
    return;
  }

  
  if (!correo.includes("@")) {
    mensaje.textContent = "El correo electrónico debe contener un '@'.";
    mensaje.className = "error";
    return;
  }


  mensaje.textContent = `¡Registro exitoso, ${nombre}!`;
  mensaje.className = "exito";
});