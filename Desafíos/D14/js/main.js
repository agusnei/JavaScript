/***********
 uso de Jquery en:
 -const addFecha
 -const addRefresh-y en el evento click $("#btnCalcular").click
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



//***********ADD FECHA - ---jquery  *************************************************************************** */

const addFecha = () => {
    
    let fecha = $("#fechaPrint")
    
    fecha.html(
        `
        <h2>${dateToday}</h2>
        `
        )
}
//************ADD BUTTON REFRESH   - ---jquery*********************************************************************** */
const addRefresh = () => {
    
    let refresh = $("#btnRefresh")
    
    refresh.html(
        `
        <button onClick="window.location.reload();" >Comenzar de nuevo</button>
        `
        );    
}


////////******** ADD UBICACIONES, array********* */
const Ubicaciones = [];

//algunas ubicaciones y sus caracteristicas predefinidas, a futuro para ingresar por API

const addUbicaciones = () => {

    const ubicacion1 = new UbicacionSalida(
        "Córdoba",
        "CBA",
        "AR",
        localStorage.getItem("temperaturaSalida"),
        localStorage.getItem("descripcionSalida"),
    );


    const ubicacion2 = new UbicacionDestino(
        "San Carlos de Bariloche",
        "Río Negro",
        "AR",
        localStorage.getItem("temperaturaDestino"),
        localStorage.getItem("descripcionDestino"),
        2000,
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
        window.location.reload();
    }
}

costoTransporte = (a,b,c) => {
    let ubicaciones = JSON.parse(localStorage.getItem("ubicaciones"))

    let cantidadCombustible = (ubicaciones[1].km / b).toFixed(2);
    let precioCombustible = 100;
    let costoCombustible = (cantidadCombustible * precioCombustible * a).toFixed();
    let cantidadParadas = (ubicaciones[1].km / (b * c)).toFixed();

    mensaje(costoCombustible, cantidadParadas, a);
}

mensaje = (a, b, c) => {
    let ubicaciones = JSON.parse(localStorage.getItem("ubicaciones"))

    const mostrarMSJ = document.createElement("h3");

    mostrarMSJ.setAttribute("id","msjAgregado");

    mostrarMSJ.textContent = `El costo en combustible para recorrer ${ubicaciones[1].km}km desde ${ubicaciones[0].ciudad} hacia ${ubicaciones[1].ciudad} en ${c} vehículos es de $${a}, deberá realizar aproximadamente ${b} paradas a cargar combustible. La temperatura en la ciudad de destino ${ubicaciones[1].ciudad} es de ${ubicaciones[1].temperatura} ºC, ${ubicaciones[1].descrip} `;

    document.getElementById("mostrarMSJ").appendChild(mostrarMSJ);
    document.getElementById("mostrarMSJ").style.color = "blue"
}


//llamada API OPEN WEATHER MAP ///////////

const url_salida = "https://api.openweathermap.org/data/2.5/weather?id=3860259&appid=1f0970ebbcf9cb6e31d09ce38b27892b&units=metric&lang=sp"
const url_destino = "https://api.openweathermap.org/data/2.5/weather?id=7647007&appid=1f0970ebbcf9cb6e31d09ce38b27892b&units=metric&lang=sp"

$.get(url_salida, (respuesta,estado) =>{

    if(estado == "success"){
        const descripcion = respuesta.weather[0].description;
        localStorage.setItem("descripcionSalida",descripcion)
        const temperatura = respuesta.main.temp;
        localStorage.setItem("temperaturaSalida",temperatura)
    }
})

$.get(url_destino, (respuesta,estado) =>{

    if(estado == "success"){
        const descripcion = respuesta.weather[0].description;
        localStorage.setItem("descripcionDestino",descripcion)
        const temperatura = respuesta.main.temp;
        localStorage.setItem("temperaturaDestino",temperatura)
    }
})




/////API MAPS///
/*
AIzaSyCyx94zm8VkxnRCP4H2GZnfifVZYRni20Y
*/
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
    });

}




/////imprimir calculo de costo de transporte -----con JQUERY
$("#btnCalcular").click( (e) => {
    
    $("#hide").hide(1000).slideUp(2000);

    e.preventDefault();
    
    addUbicaciones();

    addTransporte();
    
    if (listaTransporte.length > 0) {
        
        addFecha();
        
        addCardsUbicaciones();

        initMap()

        addRefresh();
        
        $("#resultado").css({"background-color": "#B5B2B2"})
    }
});






