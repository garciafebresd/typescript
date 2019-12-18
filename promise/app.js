var promesa1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log("Promesa terminada");
        //termina bien
        resolve();
        //termina mal
        //reject();
    }, 1500);
});
console.log("Paso1");
promesa1.then(function (success) {
    console.log("ejecutarme cuando se termine bien");
}, function (fail) {
    console.log("ejecutarme cuando se termine mal");
});
console.log("Paso2");
