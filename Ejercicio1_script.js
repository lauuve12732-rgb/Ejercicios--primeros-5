const boton = document.getElementById("miboton");
const textoContador = document.getElementById("textoContador");

let contador = 0;
boton.addEventListener("click", function(){
    contador++;
    textoContador.textContent = `Clics: ${contador}`;
})