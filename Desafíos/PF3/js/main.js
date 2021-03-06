/**************************************************************************************************************************
 *      ENTIDADES
 *************************************************************************************************************************/
let map = L.map('map').setView([4.639386,-74.082412],6)

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

document.getElementById('destino').addEventListener('change',function(e){
    let coords = e.target.value.split(",");
    map.flyTo(coords,12);
    L.marker(coords).addTo(map)
})

////************HORA-TIME de hoy***************** */
let dateToday = new Date().toLocaleDateString()

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

    constructor(ciudad,provincia,pais,temperatura,descrip,km,coordenadas) {
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.pais = pais;
        this.temperatura = temperatura;
        this.descrip = descrip;
        this.km = km;
        this.coordenadas = coordenadas;
    }
}


// ////*************PERSONAS QUE VIAJARAN**************** */
// class Personas {

//     constructor(nombre,apellido) {
//         this.nombre = nombre;
//         this.apellido = apellido;
//     }
// }


////*************VEHICULO**************** */
class Transporte {

    constructor(cantidadTransporte,consumoPromedio,capacidadTanque) {
        this.cantidadTransporte = cantidadTransporte;
        this.consumoPromedio = consumoPromedio;
        this.capacidadTanque = capacidadTanque;
    }
}

// ////*************  ALOJAMIENTO  **************** */
// class Alojamiento {

//     constructor(diasAloj, costoAloj){
//         this.diasAloj = diasAloj;
//         this.costo = costoAloj;
//     }
// }

// ////*************   GASTRONOMIA   **************** */
// class Gastronomia {

//     constructor(diasViaje,cantidadComidas,costoGastroProm){
//         this.diasViaje = diasViaje;
//         this.cantidadComidas = cantidadComidas;
//         this.costoGastroProm = costoGastroProm;
//     }
// }



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
        <button class="btn btn-secondary" onClick="window.location.reload();" >Comenzar de nuevo</button>
        `
        );    
}


////////******** ADD UBICACIONES******** */
const Ubicaciones = [];

//algunas ubicaciones y sus caracteristicas predefinidas, a futuro para ingresar por API

const addUbicaciones = () => {

    let cd = document.getElementById("destino").value;
    let cdd = cd.split(",");
    let ciudadDestino = cdd.splice(2)[0];
    let coordenadas = cdd.splice(0,2);

    if (cd != -1) {
        
        const ubicacion1 = new UbicacionSalida(
            "C??rdoba",
            "CBA",
            "AR",
            localStorage.getItem("temperaturaSalida"),
            localStorage.getItem("descripcionSalida"),
        );
    
        const ubicacion2 = new UbicacionDestino(
            ciudadDestino,
            "R??o Negro",
            "AR",
            localStorage.getItem("temperaturaDestino"),
            localStorage.getItem("descripcionDestino"),
            1534,
            coordenadas,
        );
    
        Ubicaciones.push(ubicacion1)
        Ubicaciones.push(ubicacion2)
    
        localStorage.setItem("ubicaciones", JSON.stringify(Ubicaciones));
    
    }else{
        alert("Debes elegir una ciudad");
        window.location.reload();
    }
}


/*******************************************************************************
 *          ADD HTML 
 *****************************************************************/

const addHtml = () => {
    let addHtml = document.getElementById("resultado")

    addHtml.innerHTML = `
        <div class="container">
        <div class="row justify-content-md-center" id="ubicacionesPrint">
        </div>
        </div> 
        <div id="fechaPrint" class="text-center">
        </div>
        <div id="mostrarMSJ">
        </div>
        <div class="container text-center" id="btnRefresh">
        </div>
    `
}

/*******************************************************************************
 *          CARDS UBICACIONES 
 *****************************************************************/

const addCardsUbicaciones = () => {

    let imprimirUbicaciones = document.getElementById("ubicacionesPrint");

    imprimirUbicaciones.innerHTML = `
    <div class="col-md-4">
        <div class="card" id="cardCampos" >
            <img src="img/recorrido.png" id="recorrido" alt="...">    
        </div>
    </div>
    `  

    Ubicaciones.forEach(element => {
        
        addImg = 0
        switch(element.ciudad){
            case "C??rdoba": addImg = `img/cordoba.jpg`;
            break;
            case "San Carlos de Bariloche": addImg = `img/bariloche.jpg`;
            break;
        }  

        imprimirUbicaciones.innerHTML += `
            <div class="col-md-4">
                <div class="card" id="cardCampos">
                        <img src="${addImg}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${element.ciudad}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${element.provincia}</h6>
                        <h6 class="card-subtitle mb-2 text-muted">${element.pais}</h6>
                        <h6 class="card-text">Temperatura actual: ${element.temperatura}??C</h6>
                    </div>
                </div>
            </div>
        `    
    });
}

// ////////******** ADD PERSONAS QUE VIAJARAN, array********* */
// let listaPersonas = [];
// //calcular cant personas en mi lista de array con length

// const addPersonas = () => {
//     let cantidad = Number(document.getElementById("cantidadPersonas").value);
    
//     for(let i = 0; i < cantidad; i++){
        
//         let nombre= prompt("Ingresa nombre de la persona que viajar??");
//         let apellido = prompt("Ingresa apellido de la persona que viajar??");

//         let persona = new Personas(nombre, apellido);
//         listaPersonas.push(persona);
//     }
// }


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
        alert("Los n??meros ingresados deben ser mayores o iguales a 1");
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

    const mostrarMSJ = document.createElement("h5");

    mostrarMSJ.setAttribute("id","msjAgregado");

    mostrarMSJ.textContent = `El costo en combustible para recorrer ${ubicaciones[1].km}km desde ${ubicaciones[0].ciudad} hacia ${ubicaciones[1].ciudad} en ${c} veh??culos es de $${a}, deber?? realizar aproximadamente ${b} paradas a cargar combustible.
    La temperatura en la ciudad de destino es de ${ubicaciones[1].temperatura} ??C (${ubicaciones[1].descrip}) `;

    document.getElementById("mostrarMSJ").appendChild(mostrarMSJ);
}







/////API MAPS///
/*
AIzaSyCyx94zm8VkxnRCP4H2GZnfifVZYRni20Y
let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -31.417, lng: -64.183 },
        zoom: 8,
    });
}

*/



/////imprimir calculo de costo de transporte -----con JQUERY
$("#btnCalcular").click( (e) => {
        
    $("#hide").hide(1000).slideUp(2000);

    e.preventDefault();

    addHtml();

    addUbicaciones();

    addTransporte();
    
    if (listaTransporte.length > 0) {
        
        addFecha();
        
        addCardsUbicaciones();

        addRefresh();
        
        /*initMap()*/

    }
});







