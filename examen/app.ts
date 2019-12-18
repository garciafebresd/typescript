// Uso de Let y Const
/*
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
  nombre: nombre,
  edad: edad
};
*/

let nombre:string = "Ricardo Tapia";
let edad:number = 23;
const PERSONAJE:{nombre:string,edad:number} = {
	nombre: nombre,
	edad: edad
};

console.log('PERSONAJE');
console.log(PERSONAJE);

// Cree una interfaz que sirva para validar el siguiente objeto
/*
var batman = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}
*/

interface CheckHeroes{
	nombre:string,
	artesMarciales:string[]
}

let batman:CheckHeroes = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate","Aikido","Wing Chun","Jiu-Jitsu"]
}

console.log('batman');
console.log(batman);

// Convertir esta funcion a una funcion de flecha
/*
function resultadoDoble( a, b ){
  return (a + b) * 2
}
*/

let resultadoDoble = (a:number, b:number) => (a + b) * 2;

console.log('resultadoDoble');
console.log(resultadoDoble(3,3));


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

let getAvenger = ( nombre:string, poder:string = "fuerza", arma?:string ) => {
  let mensaje;
  if( poder ){
     mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  }else{
     mensaje = nombre + " tiene un " + poder;
  }
  return mensaje;
}

console.log('getAvenger');
console.log(getAvenger('IronMan','Tecnologia','Traje'));



// Cree una clase que permita manejar la siguiente estructura
// La clase se debe de llamar rectangulo,
// debe de tener dos propiedades:
//   * base
//   * altura
// También un método que calcule el área  =  base * altura,
// ese método debe de retornar un numero.

class Restangulo {

	base:number;
	altura:number;

	constructor(base:number,altura:number){
		this.base = base;
		this.altura = altura;
	}

	calculaArea = () => {
		let area:number = this.base * this.altura;
		return area;
	}

}

let rectangulo:Restangulo = new Restangulo(10,10);
console.log(rectangulo.calculaArea());




