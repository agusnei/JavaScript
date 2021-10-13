////********  DOM tenemos muchas formas de entrar al documento  ******
/*
//por ID: me trae solo un objeto pq los ID no se repiten en el html
console.log(document.getElementById("id-11"));

//por clase: me trae un array de objetos html
console.log(document.getElementsByClassName("class-12"));

//por etiqueta: me trae un array de etiquetas u objetos html
console.log(document.getElementsByTagName("h1"));

//como accedo a la etiqueta <p></p> sin class ni id
console.log(document.getElementsByTagName("p")[4])
   //como lo cambio??
   document.getElementsByTagName("p")[4].textContent = "Por js cambié texto 5 x esto que estoy escribiendo"
*/

/*
//query selector, ventaja: selector universal
console.log(document.querySelector("#id-11"));
console.log(document.querySelector(".class-12"));
console.log(document.querySelector("p"));

//Sin el all solamente me trae 1 eleme4nto, el 1º que encuentra. Para traer todo, ALL

console.log(document.querySelectorAll("p"))
*/


/*
document.getElementById("id-11").textContent = "Nuevo contenido"

document.getElementById("id-11").style.color = "blue"

//document.getElementById("id-11").style.display = "none"

//como seteo un atributo??? en mi css cree la clase .truco...... aca la seteo:
document.getElementById("id-11").setAttribute("class","truco");


//si quiero CREAR elementos, en vez de trabajar con elementos que ya existen??... :
const h2 = document.createElement("h2")

h2.setAttribute("Id","elementoAgregado")
h2.textContent = "elemento nuevo"
document.getElementById("acá").appendChild(h2)
console.log(h2);

*/

//eliminamos los PROMPT para agregar datos,,, ahora empezamos a usar formularios para agregar contenido del usuario

class Producto {
    constructor({n, c, p, s}){
        this.n = n;
        this.c = c;
        this.p = p;
        this.s = s;
    }
} 

const guardarDatos = () => {

    const producto = new Producto (
        {
            n : document.getElementById("nombre").value,
            c : document.getElementById("categoria").value,
            p : document.getElementById("precio").value,
            s : document.getElementById("stock").value,
        }
    )

    console.log(document.getElementById("nombre").value);
    console.log(document.getElementById("categoria").value);
    console.log(document.getElementById("precio").value);
    console.log(document.getElementById("stock").value);

    return producto
}

