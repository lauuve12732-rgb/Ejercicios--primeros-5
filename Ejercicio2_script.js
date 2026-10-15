const parrafo = document.getElementById("miParrafo");
const boton = document.getElementById("miBoton");

boton.addEventListener("click", function(){
    parrafo.classList.toggle("oculto");
})