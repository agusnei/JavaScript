//
//
//
//
//
//
//
console.log(document.getElementById("zoom"));
console.log(document.getElementsByClassName("coder"));
console.log(document.getElementsByTagName("h1"));

console.log("-----------------------");

console.log($("h1"));
console.log($("#zoom"));
console.log($(".coder"));

console.log("-----------------------");

/*
document.getElementById("btn").addEventListener("click", () => {
    console.log(document.getElementById("dato").value);
})


$("#btn").addEventListener("click", () => {
    console.log(document.getElementById("dato").value);
})
*/
console.log("-----------------------");

/*
const elemento = document.createElement("p")
elemento.textContent = "TEXTO DE CREATE ELEMENT"

document.getElementById("print").appendChild(elemento)


document.getElementById("print").innerHTML = `
<p> DESDE INNER HTML </p>
`
*/

$("#print").append(`
<p> DESDE APPEND CON JQ </p>
`)


const jugador = {
    nombre: "julian",
    puntaje: 0
}



//Agregamos un botón y un input
$("body").prepend('<button id="btn1">BUTTON</button>');
$("body").prepend('<input  id="ipt1" type="text">');

//Asociamos el evento change al ipt1
$("#ipt1").change((e) => {
    alert("El valor es " + e.target.value);
});

//Asociamos el evento click para btn1 y usamos trigger
$("#btn1").click(() => {
    //Usamos trigger para disparar el evento change de ipt1 
    $("#ipt1").trigger("change");
});



console.log(document.querySelectorAll("h1"));