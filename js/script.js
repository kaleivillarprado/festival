/*menu*/
function openMenu() {
    console.log("Función openMenu");
    document.getElementById("menu").style.left = "0";
}


function closeMenu() {
    console.log("Función closeMenu");
    document.getElementById("menu").style.left = "-100%";
}

/*modal imagen*/
function cerrarModal() {
    document.getElementById("modal-imagen").style.display = "none";
}

function abrirModal(figure) {
    var modal = document.getElementById("modal-imagen");
    var modalImg = modal.querySelector("img");
    var modalCaption = modal.querySelector("figcaption");
    modalImg.src = figure.querySelector("img").src;
    modalCaption.innerHTML = figure.querySelector("figcaption").innerHTML;
    modal.style.display = "block";
}

/**
 * Calcula el coste de las entradas
 */
function costeTotal() {
    var numero = document.getElementById("numero").value;
    var actividad = document.getElementById("actividad").value;

    // Cada actividad tiene un precio diferente
    var precio = 0;

    //Para cada valor de actividad
    switch (actividad) {
        //Caso de actividad con valor a1
        case "a1":
            precio = 20;
            break;
        //Caso de actividad con valor a2
        case "a2":
            precio = 20;
            break;
        //Caso de actividad con valor a3
        case "a3":
            precio = 40;
            break;
    }
    document.getElementById("coste").innerHTML = (numero * precio) + "€";
}


/**
 * Simula la compra de entradas
 */
function comprar() {
    //Se extrae la información de lo que ha escrito el usuario
    var nombre = document.getElementById("nombre").value;
    var correo = document.getElementById("correo").value;
    var actividad;
    var actividad_value = document.getElementById("actividad").value;
    var entradas = document.getElementById("numero").value;
    var coste = document.getElementById("coste").innerHTML;
    console.log("coste: " + coste);

    //El nombre de la actividad dependerá del value seleccionado
    if (actividad_value === "a1") {
        actividad = "Entrada de Sábado";
    } else if (actividad_value === "a2") {
        actividad = "Entrada de Domingo";
    } else {
        actividad = "Entrada Fin de Semana";
    }

    //Se añaden los valores en la ventana modal
    document.getElementById("n").innerHTML = nombre;
    document.getElementById("c").innerHTML = correo;
    document.getElementById("a").innerHTML = actividad;
    document.getElementById("nu").innerHTML = entradas;
    document.getElementById("ct").innerHTML = coste;

    //Se muestra la ventana modal
    document.getElementById("modal-entradas").style.display = "flex";
    return false;
}


/**
 * Oculta la ventana modal
 */
function cerrarVentana() {
    document.getElementById("modal-entradas").style.display = "none";
}

/**
 * Inicializar la librería cuando ha cargado la página
 */
window.onload = function () {
    AOS.init({
        duration: 1500
    });
};

function cambiaFoto(seccion) {
    "use strict";
    var fotos = document.getElementById("variety").lastElementChild.children;
    console.log("cambiaFoto. Seccion=" + seccion);
    for (var i = 0; i < fotos.length; i = i + 1) {
        fotos[i].style.opacity = "0";
    }
    var foto = fotos[seccion];
    foto.style.opacity = "1";
}


/*
 * Vuelve a poner la foto inicial
 */
function restauraFoto() {
    "use strict";
    cambiaFoto("0");
}
