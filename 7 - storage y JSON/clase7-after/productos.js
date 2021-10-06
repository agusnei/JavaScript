let listaObjetos;

if (localStorage.getItem("lista") == null) {
    alert("No tenes productos para mostrar")
} else {
    listaObjetos = JSON.parse(localStorage.getItem("lista"))
}

listaObjetos.forEach(element => {
    console.log(element.nombre + " " + element.categoria);
});



const comprar = (dato) => {
    let carrito;
    if (localStorage.getItem("carrito") == null) {
        carrito = []
    } else {
        carrito = JSON.parse(localStorage.getItem("carrito"))
    }
    carrito.push(dato)
    localStorage.setItem("carrito", JSON.stringify(carrito))
}