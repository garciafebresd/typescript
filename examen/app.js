// Uso de Let y Const
/*
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
  nombre: nombre,
  edad: edad
};
*/
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
console.log('PERSONAJE');
console.log(PERSONAJE);
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log('batman');
console.log(batman);
// Convertir esta funcion a una funcion de flecha
/*
function resultadoDoble( a, b ){
  return (a + b) * 2
}
*/
var resultadoDoble = function (a, b) { return (a + b) * 2; };
console.log('resultadoDoble');
console.log(resultadoDoble(3, 3));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
/*
function getAvenger( nombre, poder, arma ){
  var mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder
  }
};
*/
var getAvenger = function (nombre, poder, arma) {
    if (poder === void 0) { poder = "fuerza"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
    return mensaje;
};
console.log('getAvenger');
console.log(getAvenger('IronMan', 'Tecnologia', 'Traje'));
// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.
var Restangulo = /** @class */ (function () {
    function Restangulo(base, altura) {
        var _this = this;
        this.calculaArea = function () {
            var area = _this.base * _this.altura;
            return area;
        };
        this.base = base;
        this.altura = altura;
    }
    return Restangulo;
}());
var rectangulo = new Restangulo(10, 10);
console.log(rectangulo.calculaArea());
