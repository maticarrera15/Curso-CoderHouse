class Producto{
    constructor(obj){
        this.nombre = obj.producto.toUpperCase();
        this.precio = parseFloat(obj.precio);
    }
    sumaIva() {
        return this.precio * 1.21;
    }
}

const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productos = [];

for (const objeto of almacenados){
    productos.push(new Producto(objeto));
}

for(const producto of productos){
   console.log( producto.sumaIva());
}