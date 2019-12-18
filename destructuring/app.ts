let avengers = {
    nombre: "steve",
    clave: "capitan america",
    poder: "droga"
}

let { poder,nombre,clave } = avengers;
console.log(poder,nombre,clave);


let avengersArray:string[] = ["Thor","Steve","Tony"];

let [thor, capi, iron] = avengersArray;
console.log(thor, capi, iron);

let [ , , ironman] = avengersArray;
console.log(ironman);



