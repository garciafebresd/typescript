
//TEMPLATES LITERALES

let nombre:string = "daniel";
let apellido:string = "garcia";
let edad:number = 32;

//let texto = "Hola, "+nombre+" "+apellido+" ("+edad+")";

//let texto = `Hola, ${ nombre } ${ apellido } (${ edad })`;

//let texto = `${1+2}`

let texto = `${getNombre()}`

console.log(texto);


function getNombre(){
	return "daniel";
}




