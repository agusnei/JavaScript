/*
1-Conocer el problema. ***
2-BrainStorming para resolver el problema ****
3-Prototipo de la resolucion  ******
4-Codear la solucion
5-Optimizar codigo
6-QA
7-Lanzamiento



Consigna:
Crear un juego de mesa mediante un script por turnos para 1 jugadores
1-El juego debe contar con 50 casilleros
2-Las casillas 10/20/30/40 avanzan 2 cailleros
3-Las casillas 7/14/21/28/35/42/49 retroceden 3 casilleros
4-La casilla 23 /46 vuelve al inicio
5-Dado rolea de 1 a 6

Plus : 
El juego debe tener la posibilidad de tener mas casilleros
El juego debe adaptar la cantidad de casillas especiales segun la cantidad de casilleros
El dado puede ser predeterminado


// A tener en cuenta
-Registrar los jugadores
-El objeto (Detectar la entidad)

-Tengo que tener un condicional para las casillas especiales
-Tambien puede ser un switch(para no tener tantos else)

-¿Resolver el problema del dado?


- BUCLE
console.log(dado(1, 6));

*/

/*
_____ ENTIDADES
_____ CONSTANTES ,SELECTORES , VARIABLES GLOBALES
_____ FUNCIONES 
_____ EVENTOS
_____ LOGICA


*/


/*********************************************************
 *      ENTIDAD
 ********************************************************/

//--------ENTIDAD TABLERO -------------------------------
class Tablero {

    constructor(dado, casillas, casillasEsp, game) {
        this.dado = dado;
        this.casillas = casillas;
        this.casillasEsp = casillasEsp;
        this.game = game;
    }

}
//--------ENTIDAD JUGADOR -------------------------------

class Jugador {

    constructor(nombre, casilla, color, lanzamientos) {
        this.nombre = nombre;
        this.casilla = casilla;
        this.color = color;
        this.lanzamientos = lanzamientos
    }

    tirarDado(min, max) {
        max = max + 1
        return parseInt(Math.random() * (max - min) + min);
    }

}
/*********************************************************
 *     CONSTANTES 
 ********************************************************/

const juegoDeLaOca = new Tablero({ valorMin: 2, valorMax: 13 },
    500, { espAvanza: 8, espRetroceder: 13, espInicio: 35 },
    true)

const jugador = new Jugador("Julian", 0, "Verde", 0);

/*********************************************************
 *     FUNCION
 ********************************************************/

const iniciarGame = () => {

    while (juegoDeLaOca.game) {

        if (jugador.casilla < juegoDeLaOca.casillas) {

            console.log(`Estas en la casilla ${jugador.casilla}`);
            jugador.casilla = jugador.casilla + jugador.tirarDado(juegoDeLaOca.dado.valorMin, juegoDeLaOca.dado.valorMax)
            jugador.lanzamientos += 1

            if (jugador.casilla % juegoDeLaOca.espRetroceder == 0) {
                console.log("Caiste en una casilla mala, te moves 2 para atras");
                jugador.casilla -= 2
            }
            if (jugador.casilla % juegoDeLaOca.espAvanza == 0) {
                console.log("Caiste en una casilla buena, te moves 3 para adelante");
                jugador.casilla = jugador.casilla + 3
            }
            if (jugador.casilla % juegoDeLaOca.espInicio == 0) {
                console.log("Caiste en una casilla muy mala, volves al inicio");
                jugador.casilla = 0
            }

        } else {
            console.log(`El jugador ${jugador.nombre} gano con el color ${jugador.color} tardaste ${jugador.lanzamientos} tiros`);
            juegoDeLaOca.game = false
            break;
        }
    }
}

/*********************************************************
 *     LOGICA
 ********************************************************/

iniciarGame()