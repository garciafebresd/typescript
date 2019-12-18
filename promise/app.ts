let promesa1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Promesa terminada");

        //termina bien
        resolve();

        //termina mal
        //reject();

    }, 1500);
});

console.log("Paso1");
promesa1.then((success) => {
    console.log("ejecutarme cuando se termine bien");
}, (fail) => {
    console.log("ejecutarme cuando se termine mal");
});

console.log("Paso2");