let menu = document.getElementById("menu");

function mostrarMenu() {

    // if (menu.style.display != "flex") {
    if (window.getComputedStyle(menu).display != "flex") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
    // event.preventDefault();
}

function mostrarMenuJquery() {
    $("#menu").toggle()
}

// DOM -> Document Object Model

$(document).ready(function() {

    let listaSlides = ["banner-f1", "banner-cs", "banner-lol"]
    let slideAtual = 1

    function mudarSlide() {
        // console.log(slideAtual)

        // Remove o slide anterior
        if (slideAtual > 0) {
            $(".banner").removeClass(listaSlides[slideAtual - 1])
        } else {
            $(".banner").removeClass(listaSlides[ (listaSlides.length - 1) ])
        }

        // Mostra o slide atual da lista de slides
        $(".banner").addClass(listaSlides[slideAtual])

        // Incrementa a variável slideAtual
        slideAtual++

        if (slideAtual > (listaSlides.length - 1) ) {
            slideAtual = 0
        }

    }

    setInterval(mudarSlide, 2000)

})
