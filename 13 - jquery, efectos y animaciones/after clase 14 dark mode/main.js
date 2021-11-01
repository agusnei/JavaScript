//Dark Mode con JQUERY ----------------------------------------------------------
/*

const darkMode = () => {
    $("body").css("background-color", "black")
    $("h1").css("color", "white")
    $("p").css("color", "white")
    localStorage.setItem("theme", "dark")
}

const ligthMode = () => {
    $("body").css("background-color", "white")
    $("h1").css("color", "black")
    $("p").css("color", "black")
    localStorage.setItem("theme", "ligth")
}


$("#theme").on("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        ligthMode()
    } else {
        darkMode()
    }
})

*/
//Dark Mode con JS ----------------------------------------------------------
/*
const darkMode = () => {
    document.getElementsByTagName("body")[0].style = "background-color: black"

    for (let i = 0; i < document.getElementsByTagName("h1").length; i++) {
        document.getElementsByTagName("h1")[i].style = "color: white"
    }
    for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
        document.getElementsByTagName("p")[i].style = "color: white"
    }

    localStorage.setItem("theme", "dark")
}


const lightMode = () => {
    document.getElementsByTagName("body")[0].style = "background-color: white"

    for (let i = 0; i < document.getElementsByTagName("h1").length; i++) {
        document.getElementsByTagName("h1")[i].style = "color: black"
    }
    for (let i = 0; i < document.getElementsByTagName("p").length; i++) {
        document.getElementsByTagName("p")[i].style = "color: black"
    }

    localStorage.setItem("theme", "ligth")
}

document.getElementById("theme").addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        lightMode()
    } else {
        darkMode()
    }
})
*/
//METODO VARIANDO CSS -------------------------------------------------------


const darkMode = () => {
    document.getElementById("linkTheme").href = "./dark.css"
    localStorage.setItem("theme", "dark")
}

const lightMode = () => {
    document.getElementById("linkTheme").href = "./light.css"
    localStorage.setItem("theme", "ligth")
}

document.getElementById("theme").addEventListener("click", () => {
    if (localStorage.getItem("theme") === "dark") {
        lightMode()
    } else {
        darkMode()
    }
})


const universal = document.createElement("style")
universal.textContent = `*{color:green}`

document.getElementsByTagName("head")[0].appendChild(universal)
