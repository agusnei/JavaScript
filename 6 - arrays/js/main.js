/// ARRAY **************
/* cuando a una variable la declaro con [ ] es un array, acepta variedad de tipos de elementos, buleano, numero, objetos,array...*/


//               0        1      2  3  4     5       {6}                                       [7]
/*
let lista = ["Persona","Mascota",25,55,true,false, {nombre:"agustin", apellido:"neira"}, [32,"Male"] ]


//si quiero ingresar a mascota:
console.log(lista[1])
//si quiero ingresar a true:
console.log(lista[4])
//si quiero ingresar a  apellido en array:
console.log(lista[6].apellido)
//si quiero ingresar a male objeto:
console.log(lista[7][1])

//si quiero ingresar a todo, del 0 al 7... podria crear bucle... para que voy a copiar pegar ese consol log anterior:
///''length'' es un metodo que me devuelve la cantidad de elementos de mi lista

for (let i=0; i<lista.length; i++){
    console.log([i])
}
*/

/*
let superMercado = ["Pera","Manzana","Birra","Agua"]

console.log(superMercado)

//pus() ... para agregar cosas a la lista.
superMercado.push("Kilo de pan")
console.log(superMercado)
superMercado.push("Galletitas")
console.log(superMercado)

//``sort`` ordenar alfabeticamente
superMercado.sort()
console.log(superMercado)

//"unshift" agrega elementos al principio de la lista
superMercado.unshift("Tomate")
console.log(superMercado)

// quiero cambiar manzana por panceta... le asigno y piso un valor reasignando
superMercado[1] = "Panceta"
console.log(superMercado)

//"concat" --->paso por la ferreteria y creo otra lista...pero quiero unir las dos listas
let ferreteria = ["Tornillo","Tarugo"]

let listaDefinitiva = superMercado.concat(ferreteria)
console.log(listaDefinitiva)

//si llamo a supermercado tengo los valroes originales, si llamo a ferreteria tiene los 2 originales.

//"slice"   ME CORTA una lista

let listaReducida = listaDefinitiva.slice(2,4)
console.log(listaReducida)

// "toString" me trae todo pasado a texto
// "join" me separa los elementos por lo que yo le ponga, sea una coma, un **, un // .... 

*/
/*

class Producto {

    constructor(nombre,precio){
        this.nombre=nombre;
        this.precio=precio;
    }

}

let listaSupermercado = [];

//como se borraba para el ejemplo ponemos a "mano"
listaSupermercado.push(new Producto("Tornillo",1200));
listaSupermercado.push(new Producto("Manzana",100));
listaSupermercado.push(new Producto("Cerveza",1250));
listaSupermercado.push(new Producto("Jamon",124));

const agregarProductosLista = () => {

    let nombre = prompt("Nombre del producto");
    let precio = Number(prompt("Precio del producto"));

    let producto = new Producto(nombre,precio);
    listaSupermercado.push(producto);
}

//si lo quiero ordenar por nombre, listaSupermercado.sort() no me lo va a ordenar porque todos se llaman "Productos"
// listaSupermercado.sort()
//si quiero invertir el orden, cambio 1 por -1 en los if y listo.... cambio nombre por precio y ordeno por precio...
//por lo tanto
listaSupermercado.sort((a,b) => {

        if(a.nombre > b.nombre){
            return 1
        }
        if(a.nombre < b.nombre){
            return -1
        }
        return 0
    }
)
console.log(listaSupermercado);



/// METODOS PARA RECORRER UN ARRAY DE OBJETOS ////////

//con FOR
for (let i=0; i<listaSupermercado.length; i++){
    console.log(listaSupermercado[i])
}

//con FOR OF ... cada "objeto" no es mas que cada uno de mi lista de objeto.. que cada constante objeto me guarde cada valor de mi lista de supermercad
for(const objeto of listaSupermercado){
    console.log(objeto);
}

//FOR IN.. propiedad por cada propiedad de cada objeto
let obje = {nombre:"tomate",precio:2200}
for(const prop in obje){
    console.log(prop)
}

///FOREACH ... nos ayuda a usar for of mas detallado
listaSupermercado.forEach(objeto =>{
    console.log(objeto.precio);
})

///FIND ME TRAE 1 OBJETO
let search = prompt("Que queres buscar")
//buscadores modernos, la lupita para buscar
let buscadorUnico =  listaSupermercado.find(objeto => objeto.nombre === search)
console.log(buscadorUnico);

///FILTER ME TRAE UNA COLECCION DE OBJETOS--- generalmente se usa siempre Filter
let search = prompt("Que queres buscar")
//buscadores modernos, la lupita para buscar
let buscadorMultiple =  listaSupermercado.filter(objeto => objeto.nombre === search)
console.log(buscadorMultiple);


*/





































