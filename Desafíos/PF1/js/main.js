/*
Simulador costos de viaje con diversos indicadores:
-ciudad de salida, ciudad de destino.
-Indicador de clima, tanto actual desde donde salgo, como extendida para cuando llegue a destino.
-# de personas que viajan y dividir gastos de viaje entre personas.
-eleccion de vehiculo (auto/camioneta/bondi??), km totales, precio/consumo combustible.
-otros datos.......

entonces.......
1-de qué ciudad inicio?
    1.1- datos a pedir al usuario: "nombre", *provincia, *pais, *ubicacion GPS? (por ahora prov y pais tambien hasta obtener todo por API mediante search??)
    1.2- los datos de la ciudad me joinea con alguna API de clima para traer "temperautra" y algun otro dato actual y clima extendido?
2- a donde quiero ir? 
    2.1-IDEM anterior + "km" de distancia desde donde estoy, la misma API de google maps y otra me tira este dato??
    2.2-IDEM anterior
3- cuantas personas van a viajar?
    3.1- datos a pedir: cantidad total de viajantes, nombre, apellido.
4- transporte
    4.1- en que vehiculo viaja? auto, camioneta....calcular costo de combustible segun precio nafta/km a recorrer..... 
    4.2    ***transporte bondi o avion (aca ya deberia ingresar el usuario, a dedo, el costo de su pasaje o buscar con API??...)
5- alojamiento
    5.1-   ***Alojamiento, ya tienen? idem punto anterior, API booking o mismo despegar que te tira precios??? o que el usuario ingrese a dedo el costo...?? 
6- gastronomia
    6.1-   ***segun cantidad de dias, puedo calcular estimativo de $ por comida, habra alguna API con precios de comidas tipicas del lugar a donde quiera ir??
*
*
*
*
*

*/

/**   pasos:
 * 1- pedir ciudad salida
 * 2- pedir ciudad destino
 * 3- pedir cuantas personas viajan
 *      3.1- listar nombre apellido
 * 4- en que viajan? auto/camioneta
 * 5- pedir fecha de viaje
 * 5-.............
 */


/**************************************************************************************************************************
 *      ENTIDADES
 *************************************************************************************************************************/

////************HORA-TIME de hoy***************** */
var dateToday = new Date ()


////*************UBICACIONES**************** */
class UbicacionSalida {

    constructor(ciudad,provincia,pais,temperatura,descrip) {
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.pais = pais;
        this.temperatura = temperatura;
        this.descrip = descrip;
    }
}

class UbicacionDestino {

    constructor(ciudad,provincia,pais,temperatura,descrip,km) {
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.pais = pais;
        this.temperatura = temperatura;
        this.descrip = descrip;
        this.km = km;
    }
}

////*************PERSONAS QUE VIAJARAN**************** */
class Personas {

    constructor(nombre,apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}


////*************VEHICULO**************** */
class Transporte {

    constructor(tipoTransporte,cantidadTransporte,consumoPromedio,capacidadTanque) {
        this.tipoTransporte = tipoTransporte;
        this.cantidadTransporte = cantidadTransporte;
        this.consumoPromedio = consumoPromedio;
        this.capacidadTanque = capacidadTanque;
    }
}

////*************  ALOJAMIENTO  **************** */
class Alojamiento {

    constructor(diasAloj, costoAloj){
        this.diasAloj = diasAloj;
        this.costo = costoAloj;
    }
}

////*************   GASTRONOMIA   **************** */
class Gastronomia {

    constructor(diasViaje,cantidadComidas,costoGastroProm){
        this.diasViaje = diasViaje;
        this.cantidadComidas = cantidadComidas;
        this.costoGastroProm = costoGastroProm;
    }
}



//**************************************************************************************************************************** */

////////******** ADD UBICACIONES********* */
const listaUbicaciones = [];

//algunas ubicaciones y sus caracteristicas predefinidas, a futuro para ingresar por API

const addUbicaciones = () => {

    const ubicacion1 = new UbicacionSalida(
        "Córdoba",
        "CBA",
        "AR",
        "30ºc",
        "Posibles lloviznas por la noche",
    );


    const ubicacion2 = new UbicacionDestino(
            "Villa maria",
            "CBA",
            "AR",
            "25ºc",
            "Soleado",
            250,
    );


    const ubicacion3 = new UbicacionDestino(
        "Rio gallegos",
        "Sta Cruz",
        "AR",
        "-5ºc",
        "Muy frío por la tarde",
        3000,
    );

    listaUbicaciones.push(ubicacion1);
    listaUbicaciones.push(ubicacion2);
    listaUbicaciones.push(ubicacion3); 
    
}


////////******** ADD PERSONAS QUE VIAJARAN********* */
let listaPersonas = [];
//calcular cant personas en mi lista de array con length

const addPersonas = () => {
    let cantidad = prompt("¿Cuántas personas viajan?")
    
    for(let i = 0; i < cantidad; i++){
        
        let nombre= prompt("Ingresa nombre de la persona que viajará");
        let apellido = prompt("Ingresa apellido de la persona que viajará");

        let persona = new Personas(nombre, apellido);
        listaPersonas.push(persona);
    }
}

////////******** ADD transportes********* */
const listaTransporte = [];

let addTransporte = () => {
    let cantidadTransporte = Number(prompt("¿En cuántos vehículos viajarán?"));
    let tipoTransporte = prompt("¿En qué tipo de vehículo viaja?");
    let consumoPromedio = Number(prompt("¿Cuál es el consumo promedio de combustible del vehículo? en km/Litro"));
    let capacidadTanque = Number(prompt("¿Cuál es la capacidad máxima del tanque de combustible de su vehículo? en Litros"));
    
    let transporte = new Transporte(tipoTransporte,cantidadTransporte,consumoPromedio,capacidadTanque);
    listaPersonas.push(transporte);

    costoTransporte(cantidadTransporte,consumoPromedio,capacidadTanque);
}

costoTransporte = (a,b,c) => {
    let cantidadCombustible = listaUbicaciones[2].km / b;
    let precioCombustible = 100;
    let costoCombustible = cantidadCombustible * precioCombustible * a;
    let cantidadParadas = listaUbicaciones[2].km / (b * c);

    console.log(`El costo en combustible para recorrer ${listaUbicaciones[2].km}km desde ${listaUbicaciones[0].ciudad} hacia ${listaUbicaciones[2].ciudad}en ${a} vehícuos es de $${costoCombustible}, deberá realizar aproximadamente ${cantidadParadas} paradas a cargar combustible. La temperatura en la ciudad de destino ${listaUbicaciones[2].ciudad} es de ${listaUbicaciones[2].temperatura}, ${listaUbicaciones[2].descrip} `);
}

addUbicaciones();
addTransporte();