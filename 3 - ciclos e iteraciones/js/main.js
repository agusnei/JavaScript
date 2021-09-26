/*Ciclos/bucles..se repiten x cantidad de veces..debo evitar escribir tantas lineas

/**********Ciclos por conteo:  FOR*******************
    
    if(condicion){
        sentencia
    }

****bucle for: iteraciones
    for(inicio;condicion;iteracion){
        sentencia
    }

    let numero = 0
    for(0; numero < 10 ; numero = numero + 1){
        console.log("holis")
    }
 que hace el fot anterior:
numero 0 --> ejecuta for -> "holis"--> numero+1
numero es menor a 10? 
numero 1 --> ejecuta for ->"holis"-->numero+1
numero 2....ejecuta for ->"holis"-->numero+1
numero 10--> no hace nada pq 10 no es menor a 10
*/
/*podemos resumirla un poco:
    -cuando le sumamos 1 a un numero lo podemos resumir como ++
    -cuando le restemos 1 a un numero, lo resumimos --
    -la variable numero puede llamarse solo "i"
    for(let numero = 0; numero <10; numero++){
    }
    //mas resumido
    for(let i = 0; i <10; i++){
        console.log("Holis, clase JS")
    }
    for(let i = 0; i <10; i++){
        console.log(i);
    }
*/

/******** Ciclo por condicion:   WHILE*************
 * me repite infinitamnente hasta que sea verdadero
"while quiere decir mientras"--- > 
    while(condicion es verdadera){
    me ejecuta esta sentencia... y debo aclarar una condicion, una iteracion, sino nunca termina de iterar..
} 

let num = 7;
while(num < 10){
    console.log(`bucle while ${num}`);
    num++
}
 */

/***** DO...WHILE *********.me EJECUTA la sentencia, y luego me pPREGUNTA hasta cuando...mucho no se usa, el while y el for si se usan muchisimo******
do {
    console.log("Hola mundo");
    num++
} while (num < 10)

*/

/*****EJERCICIO*****************
--quiero traer los numeros impares solamente
--"modulo"--> %
-"Continue" --> me frena la iteracion pero el ciclo continua 
--"Breack" --> me corta o frena el ciclo
*/
/*
let num = Number(prompt("Ingresa tu numero"))

for(let i = 1; i <= num; i++){
    //en el caso que sea pares:
    if(i % 2 ==0){
        console.log(`${i}este num es par`)
    }else{
        console.log(`${i}este num es impar`);
    }
}
*/
/*
let num = Number(prompt("Ingresa tu numero"))

for(let i = 1; i <= num; i++){
    
    if(i == 5){
        continue //corta y sigue iterando abajo
        //break //corta y me frena, no itera mas
    }else{
        console.log(i);
    }
}
*/

/**********SWITCH*************
GENERA MULTIPLES CONDICIONES..si se cumple una condicion, se ejecuta lo de adentro. luego de cada case usar break para terminar la ejecucion, sino me salta cualquier cosa:

let num = Number(prompt("Ingresa tu numero"))
switch(num){
    case 3:
        console.log("El num ingresado es 3");
        break
    case 5:
        console.log("El num ingresado es 5");
        break
    case 7:
        console.log("El num ingresado es 7");
        break
    default:
        console.log("El num no coincide con ninguno");
        break
}
 */


/************EJEMPLO PARA DESAFIOS******* */
//quiero pedir contraseña a un usuario y que ingrese la contraseña hasta que le acerte.....
/*
let pass = 22405
let dato = Number(prompt("Ingresa tu psw"))
let intentos = 5

while(dato != pass && intentos >0 ){
    alert(`Contraseña incorrecta, te quedan ${intentos} intentos`);
    intentos--
    dato = Number(prompt("Ingresa tu psw"));
}
*/