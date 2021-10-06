
const preguntarPorDepartamento = (piso) => {

    let dato = JSON.parse(localStorage.getItem("residentes"));

    const nuevosDatos = dato.filter(obj => obj.piso == piso);
    
    console.log(nuevosDatos);

}