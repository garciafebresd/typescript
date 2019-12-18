let thor = {
    nombre: "thor",
    smash(){
        setTimeout( () => console.log(this.nombre + "smash!!") ,1500)
    }
}

thor.smash();

