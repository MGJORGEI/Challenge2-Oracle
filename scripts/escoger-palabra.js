let palabras = [
    "ELEMENTO",
    "CODIGO",
    "FUNCION",
    "VARIABLE",
    "JAVA",
    "PROGRAMADOR",
    "ALURA",
    "CANVA"
];

function escogerPalabra() {
    var indice = Math.floor(Math.random() * palabras.length);
    return palabras[indice];
}