/*
// inicio de codigoS JavaScript clase 1 

// tipos de datos primitivos de JS 

    // STRING va entre ""
        "Agustin Neira Baudin"
        'Este tambien es string'
        `Este tambien es string comentario, HASTA LOS ESPACIOS OCUPAN CARACTERES`

    // NUMBER
        52
        25

    // BOOLEAN
        true
        false 
*/

// 3 FORMAS DE DECLARAR UNA VARIABLE 
    // NO UTILIZAMOS MAS--> VAR
// CONSTRUCTOR --> NOMBRE     = VALOR 
    let nombreAlumno = "Agustin"
    let apellido = "Neira Baudin"
    let edad = 27

    // al 'const' no le podemos cambiar el valor luego de definirlo
    const comision = 22405 

// OPERADORES BASICOS + - / *
    let numero1 = 10
    let numero2 = 20
    numero1 - numero2 //me va a dar -10

// prompt nos sirve para guardar un dato desde el navegador con una ventana emergente
    let mensaje = prompt("ingresa tu nombre y apellido")

// console.log sirve para mostrar un mensaje en la consuola
    console.log("Hola mundo")
    console.log("primer console.log")
    console.log('otro msj para probar consola')

    // alert() es para mostrar una alerta de forma abrupta
    alert('cuidado con el error')

// EJEMPLO DE UNA CALCULADORA:
    let nombre = prompt("Ingresa tu nombre")
    let apellido = prompt("Ingresa tu apellido")
    let lenguaje = prompt("Cuál es tu lenguaje favorito?")

    console.log(nombre);
    console.log(apellido);
    console.log(lenguaje);

    console.log(nombre + ' ' + apellido + ' ' + lenguaje);
    console.log(`${nombre} ${apellido} ${lenguaje}`);   //comillas invertidas alt+96

    console.log(numero1 + numero2);

// CALCULADORA
    let numero1 = Number(prompt("Ingresa UN NUM"));
    let numero2 = Number(prompt("Ingresa otro num"));

    // convertir tipo de dato a otro tipo de dato = parsear
    // palabras propias de JS reservadas --> Number() parseInt() parseFloat() 
    console.log(numero1 + numero2)
    console.log(numero1 - numero2)



