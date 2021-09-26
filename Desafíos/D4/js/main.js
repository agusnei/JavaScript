/*
Situación: Conocer el precio o costo por hs según sueldo percibido..
*/
//Funciones
datosUsuario ();

//pedir datos a usuario
function datosUsuario (){
    let sueldo = Number (prompt("¿Cuál es tu sueldo actual? Ingresar número sin signos, puntos ni comas."));
    let horas = Number (prompt("¿Cuántas horas por día trabajas actualmente?"));
    let moneda = Number (prompt("Para conocer el costo de la hora en $ARS ingresa 1, en U$D ingresa 0"));
    
    calcular(sueldo,horas,moneda);
}

// realizar calculo
function calcular (a,b,c) {
    
    let total;
    const valorDolar = 100;
    const diasLaborales = 20;
    switch(c) {
        case 1: total = ((a / diasLaborales) / b);
        break;
        case 0: total = ((a / diasLaborales) / b) / valorDolar;
        break;
        default: "La operación no es válida";
        break;
    }
    
    resultado(total);
}

//mostrar resultados

function resultado (a) {
    
    console.log(a);
    
    alert(`El resultado es: ${a}`);
}

