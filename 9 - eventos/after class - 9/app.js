console.log(document);
console.log(document.body);
// Entrar por ID  - getElementById()
console.log(document.getElementById("unico"))
    //ME TRAE SOLO UN OBJETO HTML
// Entrar por Clase  - getElementsByClassName()
console.log(document.getElementsByClassName("clase1"))
    //ME TRAE UN ARRAY DE OBJETOS HTML
// Entrar por Etiqueta - getElementsByTagName()
console.log(document.getElementsByTagName("h1"))
    //ME TRAE UN ARRAY DE OBJETOS HTML
console.log(document.getElementsByTagName("p")[3])
document.getElementsByTagName("p")[3].textContent = "Este es el nuevo texto"
//querySelector
console.log(document.querySelector("#unico"))
console.log(document.querySelector(".clase1"))
console.log(document.querySelector("p"))
//Solamente me trae 1 elemento, el 1° que encuentra
console.log(document.querySelectorAll("p")[3])
document.getElementById("unico").textContent = " Este es el nuevo contenido"
    //document.getElementById("unico").style.color = "red"
//document.getElementById("unico").style.display = "none"
document.getElementById("unico").setAttribute("class", "truco")
//1°Creo el elemento que quiero inyectar
const junito = document.createElement("h2")
junito.setAttribute("id", "elementoAgregado")
junito.textContent = "Elemento Nuevo"
document.getElementById("aca").appendChild(junito)
console.log(junito)
class pre {
    constructor({ n, c, p, s }) {
        this.n = n;
        this.c = c;
        this.p = p;
        this.s = s;
    }
}
const guardarDatos = () => {
    const producto = new pre({
        n: document.getElementById("nombre").value,
        c: document.getElementById("categoria").value,
        p: document.getElementById("precio").value,
        s: document.getElementById("stock").value
    })
    const junitoP = document.createElement("div")
    const junito = document.createElement("h2")
    junito.textContent = producto.n
    junitoP.appendChild(junito)
    const junito1 = document.createElement("p")
    junito1.textContent = producto.c
    junitoP.appendChild(junito1)
    const junito2 = document.createElement("p")
    junito2.textContent = producto.p
    junitoP.appendChild(junito2)
    document.getElementById("aca").appendChild(junitoP)
    return producto
}
document.getElementById("btn").addEventListener("click", () => {
    guardarDatos()
})
listaElementos.forEach(element => {
    const junitoP = document.createElement("div")
    const junito = document.createElement("h2")
    junito.textContent = producto.n
    junitoP.appendChild(junito)
    const junito1 = document.createElement("p")
    junito1.textContent = producto.c
    junitoP.appendChild(junito1)
    const junito2 = document.createElement("p")
    junito2.textContent = producto.p
    junitoP.appendChild(junito2)
    document.getElementById("aca").appendChild(junitoP)