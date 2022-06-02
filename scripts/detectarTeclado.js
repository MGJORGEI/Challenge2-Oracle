/* Detecta navegador */

var isAndroid = navigator.userAgent.match(/Android/i) !== null;

var isiOS = navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)/i) !== null;

var isMobile = (isiOS || isAndroid);



if (isMobile) {

    window.addEventListener("orientationchange", function() {

        // lo que tenga que suceder

    }, false);

} else {

    // Si estamos con jQuery:

    $(window).on("resize", function() {

        // lo que tenga que suceder

    });

    // o window.onresize si no estamos con jQuery:

    window.onresize = funcionResize;

    function funcionResizet() {

        // lo que tenga que suceder

    }

}

/* Guardamos estos valores iniciales en localStorage para detectar luego, en resize, si el cambio es por un giro del dispositivo móvil o porque han sacado el teclado */

sessionStorage.setItem("anchoInicial", window.innerWidth);

sessionStorage.setItem("altoInicial", window.innerHeight);


$(window).on("resize", function() {

    if (isAndroid) {

        anchoInicial = sessionStorage.getItem("anchoInicial");

        altoInicial = sessionStorage.getItem("altoInicial");

        if (window.innerHeight != altoInicial && window.innerWidth != anchoInicial) {

            // No es el teclado

        } else {

            // Es el teclado

        }

    }

});