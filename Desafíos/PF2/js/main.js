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
    4.1- en que vehiculo viaja? auto, camioneta? influye?....calcular costo de combustible segun precio nafta/km a recorrer..... 
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

/**************************************************************************************************************************
 *      ENTIDADES
 *************************************************************************************************************************/

////************HORA-TIME de hoy***************** */
let dateToday = new Date ()


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

    constructor(cantidadTransporte,consumoPromedio,capacidadTanque) {
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



//***********ADD FECHA*************************************************************************** */

const addFecha = () => {
    
    let fecha = document.getElementById("fechaPrint")
    
    fecha.innerHTML += `
        <h2>${dateToday}</h2>
    `
}
//************ADD BUTTON REFRESH*********************************************************************** */
const addRefresh = () => {
    
    let refresh = document.getElementById("btnRefresh")
    
    refresh.innerHTML += `
    <button onClick="window.location.reload();" >Comenzar de nuevo</button>
    `
}




////////******** ADD UBICACIONES, array********* */
const Ubicaciones = [];

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
        "Rio gallegos",
        "Sta Cruz",
        "AR",
        "-5ºc",
        "Muy frío por la tarde",
        3000,
    );

    Ubicaciones.push(ubicacion1)
    Ubicaciones.push(ubicacion2)

    localStorage.setItem("ubicaciones", JSON.stringify(Ubicaciones));
    
}



/*******************************************************************************
 *          CARDS UBICACIONES 
 *****************************************************************/

const addCardsUbicaciones = () => {
    
    let imprimirUbicaciones = document.getElementById("ubicacionesPrint")
    
    Ubicaciones.forEach(element => {
    
        imprimirUbicaciones.innerHTML += `
        <div class="card col-4" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${element.ciudad}</h5>
            <h6 class="card-subtitle mb-2 text-muted">${element.provincia}</h6>
            <h6 class="card-subtitle mb-2 text-muted">${element.pais}</h6>
            <h6 class="card-text">${element.temperatura}</h6>
        </div>
        </div>
        `
    });

}


////////******** ADD PERSONAS QUE VIAJARAN, array********* */
let listaPersonas = [];
//calcular cant personas en mi lista de array con length

const addPersonas = () => {
    let cantidad = Number(document.getElementById("cantidadPersonas").value);
    
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
    
    let cantidadTransporte = Number(document.getElementById("cantidadVehiculos").value);
    let consumoPromedio = Number(document.getElementById("consumoProm").value);
    let capacidadTanque = Number(document.getElementById("capacidadTanque").value);
    
    if (cantidadTransporte >= 1 && consumoPromedio >= 1 && capacidadTanque >= 1) {
        
        let transporte = new Transporte(cantidadTransporte,consumoPromedio,capacidadTanque);
        
        listaTransporte.push(transporte);
        
        costoTransporte(cantidadTransporte,consumoPromedio,capacidadTanque);
    
    }else{
        
        alert("Los números ingresados deben ser mayores o iguales a 1");
    }
}

costoTransporte = (a,b,c) => {
    let ubicaciones = JSON.parse(localStorage.getItem("ubicaciones"))

    let cantidadCombustible = ubicaciones[1].km / b;
    let precioCombustible = 100;
    let costoCombustible = cantidadCombustible * precioCombustible * a;
    let cantidadParadas = ubicaciones[1].km / (b * c);

    mensaje(costoCombustible, cantidadParadas, a);
}

mensaje = (a, b, c) => {
    let ubicaciones = JSON.parse(localStorage.getItem("ubicaciones"))

    const mostrarMSJ = document.createElement("h3");

    mostrarMSJ.setAttribute("id","msjAgregado");

    mostrarMSJ.textContent = `El costo en combustible para recorrer ${ubicaciones[1].km}km desde ${ubicaciones[0].ciudad} hacia ${ubicaciones[1].ciudad} en ${c} vehículos es de $${a}, deberá realizar aproximadamente ${b} paradas a cargar combustible. La temperatura en la ciudad de destino ${ubicaciones[1].ciudad} es de ${ubicaciones[1].temperatura}, ${ubicaciones[1].descrip} `;

    document.getElementById("mostrarMSJ").appendChild(mostrarMSJ);
    document.getElementById("mostrarMSJ").style.color = "blue"
}

/////imprimir calculo de costo de transporte
document.getElementById("btnCalcular").addEventListener("click", (e) => {

    e.preventDefault();
    
    addTransporte();
    
    if (listaTransporte.length > 0) {
        addUbicaciones();
        
        addCardsUbicaciones();
        
        addFecha();
        
        addRefresh();
        
        document.getElementById("btnCalcular").style.display = "none";
    }
});
