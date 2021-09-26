//Situacion: el usuario indica el piso al que quiere ir por medio de ascensor y el ascensor se detiene en el piso indicado, mostrando piso a piso el num de piso que se encuentra, y cuanto falta para llegar.
let numPiso = Number(prompt("Ingrese el num de piso al que quiere ascender"));
let i;

if (parseInt(numPiso)){
        
    for (let i=0 ; i<=numPiso ; i++) {
        if (i == numPiso){
            console.log(`Te encontras en el piso nº${i}, podes ingresar`);    
        } else{
            console.log(`Te encontras en el piso nº${i}, espera un poco más, falta subir ${numPiso - i} piso/s`);  
        }
    }
} else {
    alert("El piso ingresado no existe");
}