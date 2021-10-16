
const input = document.getElementById("texto")

const parrafo = document.getElementById("parrafo")
//otra forma, por etiqueta----> const parrafo = document.getElementByTagName("p")
//ortra forma, queryselector ...> const parrafo = document.querySelector("p")
//ortra forma, queryselector ...> const parrafo = document.querySelector("#parrafo")

const boton = document.getElementById("btn")

//quiero que cuando se toque el boton, se me escriba algo

const escribir = () => {

    let texto = prompt("que queres escribir?");

    parrafo.textContent = texto;
}

/*
//primera forma de escuchar al evento:
//1- SELECTO --> METODO (EVENTO, FUNCION A EJECUTAR) -->
boton.addEventListener("click", () =>{
        escribir()
    }) 
*/

/*
//segunda forma, un poco mas resumida, SE USA ESTA ACTUALMENTE. ES EL MAS ORDENADO. Pero, solo si se cual es el evento que voy a utilizar de entrada, si no lo se, uso la anterior, utilizando la forma generica y luego si tengo que cambiar solo cambio el "evento" dentro del metodo............
boton.onclick = () => {escribir ()}
*/

//tercera forma, directamente en el html, por ejemplo en mi etiqueta button, ingreso mi evento directamente
//<button id="btn" onclick="escribir()">Enviar</button>


//practica 
boton.addEventListener("click", (e) =>{
    e.preventDefault()
    console.log(input.value)
})

input.addEventListener("change", () =>{
    console.log("cambio valor de texto");
})