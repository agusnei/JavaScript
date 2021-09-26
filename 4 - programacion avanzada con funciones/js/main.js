//******FUNCIONES** */
/*Evitamos repetir logicas... resumimos codigo*/
/*
function nombreDeLaFuncion (parametros){
    sentenciaQueVaAEjecutar
}
.....luego debo llamarla para que imprima, pq lo que hice aca arriba es "guardar una logica"
*/
/*
function imprimirPorConsola(){
    let dato = prompt("Ingrese dato a imnprimir")
    let resultado = dato + "----este dato viene por prompt"
    console.log(resultado) 
}
imprimirPorConsola()

*/
/*
/****agregamos parametros********* 
//---        parametro: define a la funcion cuando la declaro
function suma(num1,num2) {
    console.log(num1 + num2)
}
//-- argumento: define a la funcion cuando la llamo
suma(50,100)
*/

/************EJERCICIO***** 
VOLVEMOS AL EJEMPLO DEL DEPARTAMENTO CLASE 1 O 2..validar la persona, el piso, depto....
*/

/*
function validar(nombre){

    let datoTrabajado = nombre.toLowerCase()

    if(datoTrabajado == "juan"){
        console.log("Podes entrar")
    } else {
        console.log("No podes entrar")
    }
}

function entrarAlEdificio(){

    let pregunta = prompt("Cómo te llamas?")
    validar(pregunta)
}

entrarAlEdificio()
*/

/// RETURN... 1 SOLO RETURN POR FUNCION. el principio de la funcion es resolver 1 solo problema... no encadenemos millones de codigos para aramar solo una funcion... una logica una funcion
/*
function mostrarNombreCompleto(nombre,apellido,edad){
    let respuesta = `Tu nombre es ${nombre} ${apellido} y tu edad es ${edad}`;
    return respuesta;
}
console.log(
    mostrarNombreCompleto("agus","neira",27)
    )
*/
/*
function entrarAlEdificio(){

    let pregunta = prompt("Cómo te llamas?")
    console.log(validar(pregunta))
}
function validar(nombre){

    let datoTrabajado = nombre.toLowerCase()

    if(datoTrabajado == "juan"){
        return ("Podes entrar")
    } else {
        return ("No podes entrar")
    }
}

entrarAlEdificio()
*/

//********ARROW FUNCTION.... () => */
/*let unaResta = (numero) => {
    return numero - 10
}
console.log(unaResta(100))
*/
//mas resumido podria ser
/*
let unaResta = numero => numero - 10

console.log(unaResta(100))
*/
