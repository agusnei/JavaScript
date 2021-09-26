/*
Situación: Conocer el precio o costo por hs según sueldo percibido..en dolares y pesos argentinos
*/
//Funciones
datosUsuario ();

//pedir datos a usuario
function datosUsuario (){
    let sueldo = Number (prompt("¿Cuál es tu sueldo actual? Ingresar número sin signos, puntos ni comas."));
    let horas = Number (prompt("¿Cuántas horas por día trabajas actualmente?"));
    
    calcular(sueldo,horas);
}

// realizar calculo
function calcular (a,b) {
    
    let totalARS;
    let totalUSD;
    const valorDolar = 100;
    const diasLaborales = 20;
    totalARS = ((a / diasLaborales) / b);
    totalUSD = ((a / diasLaborales) / b) / valorDolar;
    
    resultado(totalARS,totalUSD);
}

//mostrar resultados

function resultado (a,b) {
    
    console.log(a,b);
    
    alert(`El valor en pesos argentinos de tu hora de trabajo es de $${a}, y en dólares americanos es de $${b}`);
}

