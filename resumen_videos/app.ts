


//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//PARAMETROS OPCIONALES,OBLIGATORIOS, POR DEFECTO,ETC

/*
param:string   //OBLIGATORIO
, opcional:string = "opcional" //POR DEFECTO
,momento?:string //OPCIONAL
*/

function getNombre(param:string, opcional:string = "opcional",momento?:string){
	let mensaje:string;
    if(momento){
	    mensaje = `este es el valor del parametro ${ param } ${ momento }`;
    }else{
	    mensaje = `este es el valor del parametro ${ param }`;
    }
    console.log(mensaje);
}



getNombre('Daniel');


//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//FUNCIONES DE FLECHA

let unaFunction = function(param){
	return param;
}

let unaFuncionDeFlecha = (param) => param;

console.log(unaFunction('Daniel'));
console.log(unaFunction('Ernesto'));



let funcionSuma = function (a:number,b:number) {
	return a + b;
}

let functionSumaDeFlecha =  (a:number,b:number) => a + b;

console.log(funcionSuma(2,2));
console.log(functionSumaDeFlecha(3,3));



let funcionUpperCase = function (nombre:string) {
	nombre = nombre.toUpperCase();
	return nombre;
}

let functionUpperCaseDeFlecha =  (nombre:string) => {
	nombre = nombre.toUpperCase();
	return nombre;
}



//let nombre="pedro";
let hulk = {
	nombre: "hulk",
	smash(){
		setTimeout(()=>	console.log(this.nombre+" smash!!"),1500);
	}
}


hulk.smash();

//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//DESTRUCTURACION DE OBJETOS Y ARREGLOS

//OBJETOS
let avenger = {
	nombre: "Tony",
	clave: "Iron man",
	poder: "Tecnologia"
};

let { nombre, clave , poder} = avenger;
//let { nombre:nombreSuper, clave , poder } = avenger;
//let { clave , poder } = avenger;
console.log(nombre, clave, poder);

//ARREGLOS
let  arrayAvenger:string[] = ["pantera negra","capitan","vision"];
let [elemento0,elemento1,elemento2] = arrayAvenger;
//let [,,elemento2] = arrayAvenger;


//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//PROMESAS

let promesa = new Promise(function(resolve,reject){

	setTimeout(()=>{
		console.log('Termino la promesa');
		//Termina bien
		resolve();
		//Termina mal
		//reject();

	},1500);
});


console.log('paso 1');
promesa.then(()=>{
	console.log("Ejecutarme cuando todo termine bien")
},()=>{
	console.log("Ejecutarme cuando algo salga mal")
});
console.log('paso 2');



//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//INTERFACES

interface XmenNombre{
	nombre:string,
	poder:string
}


let enviarMision = (xmen:XmenNombre) =>{
	console.log("Enviando a "+xmen.nombre);
}

let enviarAlCuartel = (xmen:XmenNombre) =>{
	console.log("Enviando al cuartel "+xmen.nombre);
}

let wolverine:XmenNombre = {
	nombre:"wolverine",
	poder: "regeneracion"
}

enviarMision(wolverine);
enviarAlCuartel(wolverine);



//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//INTRODUCCION PROGRAMACION ORIENTADA A OBJETOS




//-------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------
//DEFINICION DE UNA CLASE BASICA

class AvengerClass{
	nombre:string = "Tony Start";
	equipo:string = undefined;
	nombreReal:string;

	puedePelear:boolean = false;
	peleasGanadas:number;

	constructor(nombre:string,equipo:string,nombreReal:string){
		console.log('Se ejecuto el constructor')

		this.nombre = nombre;
		this.equipo = equipo;
		this.nombreReal = nombreReal;
	}
}


let ironMan:AvengerClass = new AvengerClass("daniel","Avenger","marvel");
console.log(ironMan);


























