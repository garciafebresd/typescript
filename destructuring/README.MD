1) Destructuracion de objetos en typescript no importa el orden en que se extraigan los objetos del array
    let avenger = {
        nombre: "steve",
        clave: "capitan america",
        poder: "droga"
    }

    let { poder,nombre,clave } = avenger;
    console.log(poder,nombre,clave);

2) dentro de las llaves luego del nombre del objeto del json si se coloca : es un alias
    let avenger = {
        nombre: "steve",
        clave: "capitan america",
        poder: "droga"
    }

    let { poder:string, nombre, clave } = avenger;
    console.log(string ,nombre,clave);

3) Destructuracion de array
    let avengersArray:string[] = ["Thor","Steve","Tony"];

    let [thor, capi, iron] = avengersArray;
    console.log(thor, capi, iron);

    let [ , , ironman] = avengersArray;
    console.log(ironman);

4) la destructuracion de array el nombre del campo se valida por la posicion en el array





