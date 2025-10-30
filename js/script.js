/**
 * Abre el menú
 */
function openMenu() {
    console.log("Función openMenu");
    // Busca el elemento con id "menu", accede a su primer hijo y luego al último hijo de ese elemento
    // Cambia left a 0 para que se despace hacia la derecha y sea visible
    document.getElementById("menu").style.left = "0";
}


/**
 * Cierra el menú
 */
function closeMenu() {
    console.log("Función closeMenu");
    // Busca el elemento con id "menu", accede a su primer hijo y luego al último hijo de ese elemento
    // Cambia left a -100% para que se desplace hacia la izquierda y no sea visible
    document.getElementById("menu").style.left = "-100%";
}


/**
 * Busca el elemento con id "modal" y lo oculta estableciendo su estilo de display a "none"
 */
function cerrarModal() {
    document.getElementById("modal-imagen").style.display = "none";
}

/**
 * Abre la ventana modal mostrando la imagen y el pie de foto del elemento figure pasado como parámetro.
 * @param figure Elemento figure sobre el que se ha hecho clic
 */
function abrirModal(figure) {
    // Se busca la ventana modal y sus elementos internos
    // La ventana modal se busca por su id
    var modal = document.getElementById("modal-imagen");
    // El img y el figcaption se buscan como el primer img y el primer figcaption dentro del elemento con id "modal"
    var modalImg = modal.querySelector("img");
    var modalCaption = modal.querySelector("figcaption");

    // Se actualizan la imagen y el pie de foto de la ventana modal con los del figure clicado
    // y se asignan a los de la ventana modal
    modalImg.src = figure.querySelector("img").src;
    modalCaption.innerHTML = figure.querySelector("figcaption").innerHTML;

    // Se muestra la ventana modal, cambiando el display de "none" a "flex"
    modal.style.display = "flex";
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
            precio = 5;
            break;
        //Caso de actividad con valor a3
        case "a3":
            precio = 10;
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
        actividad = "Concierto didáctico";
    } else if (actividad_value === "a2") {
        actividad = "Visita a la Fundación";
    } else {
        actividad = "Visionado del documental";
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