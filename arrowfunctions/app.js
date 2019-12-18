var thor = {
    nombre: "thor",
    smash: function () {
        var _this = this;
        setTimeout(function () { return console.log(_this.nombre + "smash!!"); }, 1500);
    }
};
thor.smash();
