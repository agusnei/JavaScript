/*
let mensaje = "hola mundo"

//localStorage.setItem(clave,valor)
localStorage.setItem("saludo",mensaje)

console.log(mensaje)
*/
/*
//queda guardado el mensaje anterior en localStorage en application, como tomo ahora ese valor? me traigo con localstorage.getItem ..... mi localStorage me guarda la info de mi url, aunque cierre esa ventana, pero si vuelvo a ingresar a esa url de nuevo, puedo volver a traerla.

console.log(localStorage.getItem("saludo"))
*/

/*
//si quiero usar sessionStorage, se borrara, solo lo tengo con el navegador o pestaña abierta, si la cierro, se pierde

sessionStorage.setItem("temporal", "2021")
*/

/**como paso informacion de una pestaña a otra, si cuando paso del index.html a otra pagina html se me pierde la informacion, ya que se borra el sessionStorage???
 * como no vimos base de datos, lo guardo en el LOCALStorage y almaceno informacion, para no andar replicando js en cada uno de los archivos.
 */




//***** Ejercicio JSON, no es oblig pero a practicarlo;;;

class Residente{
    constructor({
        nombre,
        piso,
        departamento
    })  {
        this.nombre = nombre;
        this.piso = piso;
        this.departamento = departamento;
    }
}

const listaResidentes = [];

const archivarResidentes = () =>{

    const nombre = prompt("Ingrese su Nombre");
    const piso = Number(prompt("Ingrese su piso"));
    const departamento = prompt("Ingrese su departamento");

    const residente = new Residente({
        nombre : nombre,
        piso : piso,
        departamento : departamento,
    })
    //para que la lista se mantenga guardada, guardamos un array que contenga info que esta en el localStorage, si tiene 10 personas, las traigo y transformo en array... como siempre inicio mi listaResidentes desde cero, NO TENGO DATOS, ME DA NULL DE ENTRADA, no puedo hacer push a un null, pq al principio no tengo nada en la lista, entonces no me la puedo traer...tengo que poner un condicional
    
    if(localStorage.getItem("residentes") == null){
        
        listaResidentes.push(residente);
        
        localStorage.setItem("residentes", JSON.stringify(listaResidentes));
    }else {
        const newList = JSON.parse(localStorage.getItem("residentes"));

        //pusheo residente, en la nueva lista que tengo 10 personas, y le agrego una mas...
        newList.push(residente);

        //guardo la lista nuevamente en el localStorage, para recuperarla y volver a cargar otro residente
        localStorage.setItem("residentes",JSON.stringify(newList))
    }
}

const mostrarResidentes = () => {

    if(localStorage.getItem("residentes") == null){
        console.log("No hay residentes registrados");
    
    } else {
    const dato = JSON.parse(localStorage.getItem("residentes"))
    console.log(dato);
    
    }   
}























