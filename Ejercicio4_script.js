const input = document.getElementById("inputTarea");
const boton = document.getElementById("btnAgregar");
const lista = document.getElementById("listaTareas")

boton.addEventListener("click", function (){
    const texto = input.value;
    if(texto === "") return;

    const item = document.createElement("li");
    item.textContent= texto;

    const btnBorrar = document.createElement("button");
    btnBorrar.textContent = "❌";
    btnBorrar.classList.add("btn-borrar");

    btnBorrar.addEventListener("click", function(){
        item.remove()
    });

    item.appendChild(btnBorrar);
    lista.appendChild(item);

    input.value = ""
})