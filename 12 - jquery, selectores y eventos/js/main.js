/*
////seleccionar de mi html diferencites elementos

//tags
$("h1")
//id
$("#zoom")
//class
$(".coder")

console.log($("h1"));
console.log($("#zoom"));
console.log($(".coder"));

//
console.log("---------------------");
//agregar elemento

/*anteriormente agregaba elementos con js así:
const elemento = document.createElement("p")
elemento.textContent = "Texto create element"
document.getElementById("print").appendChild(elemento)


///o tambien, pero es peligroso pq un tercero, un usuario, puede agregar un html y dañar/ingresar a datos del servidor:
document.getElementById("print").innerHTML = `
<p>desde un innerHtml</p>
`



desde jquery, pero igual de inseguro que el innerHtml: 
$("#print").append(`
<p>desde un append con jquery</p>
`)
*/





