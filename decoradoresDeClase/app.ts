

function consola( constructor:Function ){
    console.log( constructor );
}



@consola
class Villano {

    public nombre:string = "Sin nombre";

    constructor(nombre:string) {

        this.nombre = nombre;
    }

}



