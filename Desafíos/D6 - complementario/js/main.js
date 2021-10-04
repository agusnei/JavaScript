////*************UBICACIONES**************** */
class Ubicacion {

    constructor(ciudad,provincia,pais,temperatura) {
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.pais = pais;
        this.temperatura = temperatura;
    }
}

////*************PERSONAS QUE VIAJARAN**************** */
class Personas {

    constructor(nombre,apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

////////******** ADD UBICACIONES********* */
let listaUbicaciones = [];

//algunas ubicaciones predefinidas, luego ingreso por prompt
let ubicacion1 = new Ubicacion(
            "cordoba",
            "CBA",
            "AR",
            "30ºc");
    listaUbicaciones.push(ubicacion1);

let ubicacion2 = new Ubicacion(
        "villa maria",
        "CBA",
        "AR",
        "25ºc");
    listaUbicaciones.push(ubicacion2);

let ubicacion3 = new Ubicacion(
    "rio gallegos",
    "Sta Cruz",
    "AR",
    "-5ºc");
    listaUbicaciones.push(ubicacion3);

////////******** ADD PERSONAS QUE VIAJARAN********* */
let listaPersonas = [];

const addPersonas = () => {
    let cantidad = prompt("¿Cuántas personas viajan?")
    
    for(let i = 0; i < cantidad; i++){
        
        let nombre= prompt("Ingresa nombre de la persona que viajará");
        let apellido = prompt("Ingresa apellido de la persona que viajará");

        let persona = new Personas(nombre, apellido);
        listaPersonas.push(persona);
    }
}

addPersonas()


//Instruccion dada por el usuario para ordenar alfabeticamente
let orden = Number(prompt("Querés ver el listado de personas y ubicacion de forma alfabetica? ingresa 1"));

if(orden === 1){
        /////ORDEN UBICACIONES
        listaUbicaciones.sort((a,b) => {
        
                if(a.ciudad > b.ciudad ){
                    return 1
                }
                if(a.ciudad  < b.ciudad ){
                    return -1
                }
                return 0
            }
        );

        listaPersonas.sort((a,b) => {
        
            if(a.nombre > b.nombre ){
                return 1
            }
            if(a.nombre  < b.nombre ){
                return -1
            }
            return 0
        }
    );
        console.log(listaUbicaciones);
        console.log(listaPersonas);
} else {
    console.log(listaUbicaciones);
    console.log(listaPersonas);
}


