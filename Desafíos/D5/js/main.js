/*
1-Conocer el problema. ***
2-BrainStorming para resolver el problema ****
3-Prototipo de la resolucion  ******
4-Codear la solucion
5-Optimizar codigo
6-QA
7-Lanzamiento


Simulador costos de viaje:
-Indicador de clima, que indique pais, provincia/estado, ciudad, temperatura.
-Personas que viajan

**proximas**
-Posibilidad de eleccion de ciudad de salida y destino, eleccion de vehiculo, calculo de km totales, precio estimado de trasporte...otros 

*/


/*********************************************************
 *      ENTIDADES
 ********************************************************/

//--------ENTIDAD UBICACION -------------------------------
class Ubicacion {

    constructor(temperatura,ciudad,provincia,pais) {
        this.temperatura = temperatura;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.pais = pais;
    }

}

class UbicacionFinal {

    constructor(temperatura,ciudad,provincia,pais) {
        this.temperatura = temperatura;
        this.ciudad = ciudad;
        this.provincia = provincia;
        this.pais = pais;
        this.distancia = distancia;
    }

}
//--------ENTIDAD PERSONAS -------------------------------

class Personas {
    
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
/*********************************************************
 *     VARIABLES 
 ********************************************************/
let ubicacionInicial = new Ubicacion(
    "30ºc",
    "Córdoba",
    "CBA",
    "AR"
);

let ubicacionFinal = new Ubicacion(
    "22ºc",
    "Río Cuarto",
    "CBA",
    "AR"
);

let persona1 = new Personas(
    "Agustin",
    "Neira",
);

let persona2 = new Personas(
    "Esteban",
    "Ramirez",
);

/*****************************************
***          SALIDA
******************************************/
let ub = Number(prompt("Quieres conocer datos de la ubicacion inicial o final? ingresa 1=cordoba, 2=rio cuarto"))
switch(ub){
    case 1:
        console.log(`${persona1.nombre} te encuentras en la ciudad de ${ubicacionInicial.ciudad} y la temperatura actual es de ${ubicacionInicial.temperatura}`);
        break
    case 2:
        console.log(`${persona1.nombre} llegaras a la ciudad de ${ubicacionFinal.ciudad} y la temperatura actual es de ${ubicacionFinal.temperatura}`);
        break
    default:
        console.log("La ubicacion no existe");
        break
};