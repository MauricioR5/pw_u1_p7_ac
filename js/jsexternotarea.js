function cambiarTexto(idElemento, valor) {
    document.getElementById(idElemento).innerText = valor;
}
function cambiarColor(idElemento, valor) {
    document.getElementById(idElemento).style.color = valor;
}
function cambiarTamano(idElemento, valor) {
    document.getElementById(idElemento).style.fontSize = valor;
}
function agregarElemento(idElemento, elementoHTML) {
    document.getElementById(idElemento).innerHTML += elementoHTML;
}
