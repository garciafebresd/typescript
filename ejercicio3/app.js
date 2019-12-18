"use strict";
//TEMPLATES LITERALES
var nombre = "daniel";
var apellido = "garcia";
var edad = 32;
//let texto = "Hola, "+nombre+" "+apellido+" ("+edad+")";
//let texto = `Hola, ${ nombre } ${ apellido } (${ edad })`;
//let texto = `${1+2}`
var texto = "" + getNombre();
console.log(texto);
function getNombre() {
    return "daniel";
}
