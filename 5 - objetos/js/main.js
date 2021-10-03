//
//
//
//
//
//
//
//
const test = "dato que no se puede cambiar"
//Objeto literal 
//Las claves de un objeto se llaman propiedades // importante : dos puntos y no igual
/*
const julian = {
    nombre: "julian",
    apellido: "fuoco",
    edad: 28,
    lf: {
        nombre: "js",
        version: "ecma6+"
    },
    casaPropia: false,
}
console.log(julian);
//No esta considerado una de las mejores practicas en js
console.log(julian["nombre"]);
console.log(julian["lf"]);
//Esta forma es mas bonita
console.log(julian.apellido);
console.log(julian.edad);
julian.lf.nombre = "php"
console.log(julian.lf.nombre);
function Personas(nombre, apellido, edad, lf) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad
    this.lf = lf
}
Personas.prototype.hablar = function() {
    console.log(`Hola mi nombres ${this.nombre} `);
}
const julian = new Personas("julian", "fuoco", 28, { nombre: "js", version: "ecma6+" })
const julian1 = new Personas("Tomas", "fuoco", 28, { nombre: "js", version: "ecma6+" })
console.log(julian1.hablar());
class Personas {
    constructor(nombre, apellido, edad, lf, experiencia) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.lf = lf;
        this.experiencia = experiencia
    }
    hablar() {
        console.log(`Hola mi nombres ${this.nombre} `);
    }
    caminar() {
        console.log(`Hoy camine ${this.edad * 10} metros`);
    }
    entrenar(time) {
        let tiempo = time * 10
        this.experiencia = this.experiencia + tiempo
        console.log("Ganaste " + tiempo + " experiencia");
    }
}
let persona1 = new Personas("Julian", "fuoco", 28, "js", 0)
const parche = () => {
    if (persona1.experiencia >= 5000) {
        console.log("esta roto   permaban    nerf");
    }
}
persona1.hablar()
persona1.caminar()
persona1.entrenar(50)
*/
//Ecommerce
class Productos {
    constructor({
        nombrePP = "Sin nombre",
        catePP = "hola mundo",
        precioPP = 0,
        stockPP = 0,
        validoPP
    }) {
        this.nombre = nombrePP,
            this.categoria = catePP,
            this.precio = precioPP,
            this.stock = stockPP,
            this.disponible = validoPP,
    }
    comprar(cantidad) {
        if (this.stock <= 0) {
            console.log("no podes comprar");
            this.disponible = false
        } else {
            this.stock = this.stock - cantidad
            console.log(`Compraste un ${this.nombre}, te salio ${this.precio * cantidad}`);
        }
    }
}
const producto1 = new Productos({
    stockPP: 50,
    validoPP: true,
    precioPP: 3000,
    nombrePP: "Remera",
    catePP: "Nike",
})
console.log(producto1);

///////////////////////////////////////////////////////////////////////
/*
Objetos: queremos agrupar varias variables en un mismo objeto, lo creo y defino de cero..
cuando escribo entre llaves, es un objeto
esta construido con una clave-valor... una variable estra construida con clave-valor.... 
''nombre'' es la clave, ''agustin'' es el valor
----empaqueto toda una informacion que quiera tener junta...*/

/*
let nombre = "agustin";
let apellido = "neira";
let edad = 27;
let lenguajeFavorito = "JS";
let casaPropia = false;
*/

/* objeto: 
las claves de un objeto se llaman propiedaes//importante los dos puntos  y no el igual
*/
/*
let agustin = {
    nombre: "agustin",
    apellido: "neira",
    edad: 27,
    lf: "JS",
    casaPropia: false,
}

//info empaquetada
console.log(agustin);
//info particular de todo el paquete
console.log(agustin["nombre"]);
console.log(agustin["casaPropia"]);
//es mejor usar el punto . en vez del chorizo anterior... en el ARRAY se usa los corchetes, asi que mejor no confundir y usar punto
console.log(agustin.edad)
console.log(agustin.apellido)
console.log(agustin.apellido + agustin.edad)
*/

/*
//puedo anidar un objeto dentro de otro objeto
let agustin = {
    nombre: "agustin",
    apellido: "neira",
    edad: 27,
    lf: {
        nombre: "JS",
        version: "20.255",
    },
    casaPropia: false,
}

//info empaquetada dentro de otro objeto
console.log(agustin.lf.nombre);

//Ojo que puedo cambiarle el valor de la propiedad de un objeto..... pero a una constante declarada NO se puede.
*/

//funcion constructora: me permite construir objetos mediante una plantilla. va con mayuscula la primer letra pq indica 
//ejemplo.. crear personita en los SIMS, le voy agregando constantes como el nombre, apellido, colro de pelo, color ojos, altura... blabla... me crea a base de clave-valor.... la clave no cambia, lo que cambia es el valor.
//la palabra "THIS" hace referencia al objeto que se esta asignando
/*
function Personas (nombre,apellido,edad,sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
}

const crearPersona = () =>{

let nombre = prompt("Ingrese su nombre")
let apellido = prompt("Ingrese su a")
let edad = prompt("Ingrese su edad")
let sexo = prompt("Ingrese su sexo")

const agustin = new Personas(nombre,apellido,edad,sexo)

console.log(agustin)
}
*/
/*
function Personas (nombre,apellido,edad,sexo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.sexo = sexo;
}
const agustin = new Personas(nombre,apellido,edad,sexo)*/