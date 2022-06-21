class Producto{
    constructor(nombre,precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
        this.vendido = false;
    }
    sumarIva = function() { return this.precio * 1.21};
    vender = function() {
        this.vendido = true;
    }
}

const prod1 = new Producto('Mouse',350.5);
console.log(prod1.sumarIva());

