// console.log("Hola mundo");

/* condicionales: 
    si(esta condicion se cumple){que me haga tal cosa}
    sino {
        tal cosa|
    }

        if(condicion){
            sentencia
        } else {

        }
*/
/*
let frio = true;

if(frio){
    console.log("hace frio, ponete buzito papá") 
} else{
    console.log("no te abrigues")
};
*/

/*operadores de comparacion:
    igual ==
    distinto !=
    mayor >
    menor <
    mayor o igual >=
    menor o igual <=
    estrictamente iguakl ===
    estrictamente distinto !==

    ----aclaracion;
    = Asignar
    == Igual
    === Estrictamente igual , 10 === "10" da FALSO, pq compara no solo el dato, el valor, sino el tipo, si es numerico, string, etc

*/
/*
let edad = prompt("cual es tu edad?");

if(edad >= 18){
    console.log("podes ingresar al boliche")
} else {
    console.log("no podes ingresar, sos menor de edad")
};
*/
/*
let cont = "comision22405";

let pass = prompt("ingresa tu contraseña");

if(pass == cont){
    console.log("contraseña correcta");
} else {
    console.log("contraseña incorrecta");
}

if(pass === "coderhouse"){
    console.log("ahora sos administrador del canal");
} else if(pass === cont){
    console.log("contraseña correcta, de usuario");
} else {
    console.log("te equivocaste");
}
*/

/*
let persona = "agustin";
let edad = 29;
if(persona === "agustin" && edad ===28 ){
    console.log("hola agus")
} else {
    console.log("la verdad no te conozco")
}
*/

// ----------EJERCICIOP PARA PORTERO ELECTRICO 
/*-primero que me verifique el nombre,
    si ese nombre es correcto, va al ascensor y a su departamento. Vamos a crear solo un usuario.Vamos */

const nombrePersona1 = "agus"
const nombrePersona2 = "male"
const nombrePersona3 = "miriam"

let nombreDinamico = prompt("Cuál es tu nombre?")

nombreDinamico = nombreDinamico.toLowerCase()

if (nombreDinamico === nombrePersona1 || nombreDinamico === nombrePersona2 || nombreDinamico === nombrePersona3   )  {
    console.log(`Podes ingresar ${nombreDinamico}`);

    let depto = Number(prompt("A qué depto vas?"));

    if(depto >= 1) {
        if(depto < 3){
            console.log("Anda por el ascensor de la izquierda");
        } else if(depto > 7) {
            console.log("Anda por el ascensor de la derecha");
        } else if(depto === 5) {
            console.log(`${nombreDinamico} no sos de este piso, andate`);
        } else {
            console.log("Espera que lo están arregñado");
        }
        } else {
            console.log("Ese piso no existe")
    }
} else {
    console.log(`No podes ingresar, ${nombreDinamico} no te tengo en la lista`);
} 

// SCOPE --> 