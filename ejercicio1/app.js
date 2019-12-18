function saludar(object) {
    console.log('hola ' + object.toUpperCase());
}
var object = {
    nombre: "logan"
};
saludar(object.nombre);
