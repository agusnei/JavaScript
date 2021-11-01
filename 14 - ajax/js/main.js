
//Declaramos la url que vamos a usar para el GET********/////
/*
const URLGET = "https://jsonplaceholder.typicode.com/posts"

//Agregamos un botón con jQuery

$("body").prepend('<button id="btn1">GET</button>');

//Escuchamos el evento click del botón agregado

$("#btn1").click(() => { 
    $.get(URLGET, function (respuesta, estado) {
        
        if(estado === "success"){
            
            let misDatos = respuesta;
            
            for (const dato of misDatos) {
            
                $("body").prepend(`<div>
                        <h3>${dato.title}</h3>
                        <p> ${dato.body}</p>
                        </div>`);
            }  
        }
    });
});

*/


///******************METODO GET************************ */
/*
const url = "https://jsonplaceholder.typicode.com/posts"

console.log(url);

$.get(url, (respuesta,estado) =>{

    if(estado == "success"){
        console.log(respuesta);
    
        respuesta.forEach(element => {
            console.log(element.id);
        
        });
    }
})
*/

//Declaramos la url que vamos a usar para el POST****************/
/*
const URLGET   = "https://jsonplaceholder.typicode.com/posts"

//Declaramos la información a enviar

const infoPost =  { nombre: "Ana", profesion: "Programadora" }

//Agregamos un botón con jQuery

$("body").prepend('<button id="btn1">POST</button>');

//Escuchamos el evento click del botón agregado

$("#btn1").click(() => { 

    $.post(URLGET, infoPost ,(respuesta, estado) => {
        if(estado === "success"){
            $("body").prepend(`<div>
            Guardado:${respuesta.nombre}
            </div>`);
        }  
    });
});
*/

//Declaramos la url del archivo JSON local************************/
/*
const URLJSON = "data/datos.json"
//Agregamos un botón con jQuery

$("body").prepend('<button id="btn1">JSON</button>');

//Escuchamos el evento click del botón agregado

$("#btn1").click(() => { 

        $.getJSON(URLJSON, function (respuesta, estado) {

            if(estado === "success"){

                let misDatos = respuesta;

                for (const dato of misDatos){
                $("body").prepend(`<div>
                        <h3>${dato.name}</h3>
                        <p> ${dato.email}</p>
                        </div>`)
                }  
        }
    });
});
*/


//////*******************  POST AL API  ***** */
/*
$( document ).ready(function() {
    
    //Declaramos la url del API
    
    const APIURL = 'https://jsonplaceholder.typicode.com/posts' ; 
    
    //Declaramos la información a enviar
    
    const infoPost =  { nombre: "Ana", profesion: "Programadora" }
    
    //Agregamos un botón con jQuery
    
    $("body").prepend('<button id="btn1">ENVIAR API</button>');
    
    //Escuchamos el evento click del botón agregado
    
    $("#btn1").click(() => { 
        
        $.ajax({
            
            method: "POST",
            
            url:  APIURL,
            
            data: infoPost,
            
            success: function(respuesta){
                
                $("body").prepend(`<div>${respuesta.nombre}</div>`);
            }
        });
    });
});
*/

const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales"

setInterval( () =>{

    $.get(url, (data,est) => {
    
        if (est == "success"){
    
            data.forEach(element => {
                $("#dolar").append(
                    `
                    <div class="col-3">
                        <p>${element.casa.nombre}</p>
                        <p>${element.casa.compra}</p>
                        <p>${element.casa.venta}</p>
                    </div>
                    `
                )
            });
        }
    
    });
},5000);
