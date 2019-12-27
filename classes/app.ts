class Avenger {
    nombre:string = "Sin nombre";
    equipo:string = undefined;
    nombreReal:string = undefined;

    puedePelear:boolean = false;
    peleasGanadas:number = 0;


    constructor(nombre:string, equipo:string, nombreReal:string) {
        console.log("se ejecuto el constructor");

        this.nombre = nombre;
        this.equipo = equipo;
        this.nombreReal = nombreReal;
    }

}



let antman: Avenger = new Avenger('Antman','Capitan america','Scott lang');

console.log(antman);



