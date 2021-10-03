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
            "Córdoba",
            "CBA",
            "AR",
            "30ºc");
    listaUbicaciones.push(ubicacion1);

let ubicacion2 = new Ubicacion(
        "Villa maria",
        "CBA",
        "AR",
        "25ºc");
    listaUbicaciones.push(ubicacion2);

let ubicacion3 = new Ubicacion(
    "Rio gallegos",
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


console.log(listaUbicaciones);
console.log(listaPersonas);

