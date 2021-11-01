//HIDE OCULTAR
$(".btn2").on("click", () => {
    $(".box1").hide()
})

//FADE IN MOSTRAR CON TRANSICION
$(".btn3").on("click", () => {
    $(".box1").fadeIn(5000)
})

//FADE OUT OCULTAR CON TRANSICION
$(".btn4").on("click", () => {
    $(".box1").fadeOut(5000)
})

//slideDown MUESTRA DESLIZANDO HACIA ABAJO
$(".btn5").on("click", () => {
    $(".box1").slideDown(5000)
})

//slideUp OCULTA DESLIZANDO HACIA ARRIBA
$(".btn6").on("click", () => {
    $(".box1").slideUp(5000)
})

//slideToggle OCULTA o MUESTRA DESLIZANDO HACIA ARRIBA y ABAJO
$(".btn7").on("click", () => {
    $(".box2").slideToggle(2000);
})

const persona = {
    nombre: "julian",
    edad: 29
}

console.log(persona);
persona.nombre = "Fuoco";
persona.lenguaje = "JS";

document.getElementsByClassName("btn8")[0].addEventListener("click", () => {

    if (document.getElementsByClassName("box3")[0].style.display === "none") {
        document.getElementsByClassName("box3")[0].style.display = "block"
    } else {
        document.getElementsByClassName("box3")[0].style.display = "none"
    }
})


let altura = "height"

$(".box4").css(altura, "100px")
$(".box4").css("width", "100px")
$(".box4").css("background-color", "white")

$(".box4").css({
        height: "200px",
        width: "200px",
        backgroundColor: "red",
    })
    /*
    //Agregamos un parrafo con jQuery
    $("body").prepend('<p class="titulo">Code House</p>');


    //Animamos sus propiedades CSS con animate
    $(".titulo").animate({
            left: '250px',
            opacity: '0.5',
            height: '150px',
            width: '150px'
        }, //1er parámetro propiedades
        10000, //2do parámetro duración 
        function() { //3er parámetro callback
            console.log("final de animación");
        });

    */


//Declaración de métodos encadenados
$(".box4").css("background", "green")
    .slideUp(1000)
    .slideDown(1000)
    .delay(5000)
    .slideUp(2000)
    .slideDown(2000)
    .delay(1000)
    .slideUp(3000)
    .slideDown(3000);



const dark = () => {
    if (localStorage.getItem("theme") == "dark") {
        document.getElementById("link1").href = "./style.css"
    } else {
        document.getElementById("link1").href = "./dark.css"
        localStorage.setItem("theme", "dark")
    }

}
document.getElementsByClassName("btn1")[0].addEventListener("click", () => {
    dark()
})




