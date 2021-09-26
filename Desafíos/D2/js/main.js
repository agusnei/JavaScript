const precioBaseAnilloAlpaca = 25
const precioBaseAnilloPlata = 50
const precioBaseAnilloOro = 75

let nombre = prompt("Ingresa tu nombre");
let material = Number(prompt(`${nombre}, bienvenido a nuestro sitio web, te encontras en la sección "calcula el costo aproximado de tu anillo", para continuar ingresa el material que te interesa, siendo 1 para Alpaca, 2 para Plata, 3 para Oro`));
let medidaAnillo = Number(prompt("Mide el diámetro del dedo para el que quieres tu anillo e ingresa el mismo aquí abajo (número de de 10 a 30 en milímetros)"));
let costoBaseAnilloAlpaca = precioBaseAnilloAlpaca * medidaAnillo
let costoBaseAnilloPlata = precioBaseAnilloPlata * medidaAnillo
let costoBaseAnilloOro  = precioBaseAnilloOro  * medidaAnillo

if (medidaAnillo >=10 && medidaAnillo <=30) {
    if (material === 1){
        console.log(`${nombre} el costo de tu anillo de Alpaca, de ${medidaAnillo} milímetros de diámetro, será de $${costoBaseAnilloAlpaca}`);
    }
    else if (material === 2){
        console.log(`${nombre} el costo de tu anillo de Alpaca, de ${medidaAnillo} milímetros de diámetro, será de $${costoBaseAnilloPlata}`);
    }
    else if (material === 3){
        console.log(`${nombre} el costo de tu anillo de Alpaca, de ${medidaAnillo} milímetros de diámetro, será de $${costoBaseAnilloOro}`);
    }
    else{
    console.log(`${nombre} se produjo un error, controla que el material ingresado sea el correcto.`);
    }
} else {
    console.log(`${nombre} se produjo un error, controla que el diámetro ingresado sea el correcto.`);
    }
