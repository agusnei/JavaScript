//Funciones
datosUsuario ();

//pedir datos a usuario
function datosUsuario (){
    let num1 = Number (prompt("Ingresa un número."));
    let num2 = Number (prompt("Ingresa otro número."));
    let operador = prompt("Ingrese una operación a realizar.");
    
    calcular(num1, num2, operador);
}

// realizar calculo
function calcular (a,b,c) {
    
    let total;
    
    switch(c) {
        case "+": total = a+b;
        break;
        case "-": total = a-b;
        break;
        case "*": total = a*b;
        break;
        case "/": total = a/b;
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