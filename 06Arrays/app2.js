// const listaNombres = [];

// let cantidad = 5;


// do{
//     let entrada = prompt("Ingresar nombre: ");
//     listaNombres.push(entrada.toUpperCase());
//     console.log(listaNombres.length);
// }while(listaNombres.length != cantidad)

// const nuevaLista = listaNombres.concat(["Martin","Agustin"]);
// alert(nuevaLista.join("\n"));





// const nombres = ['Rita','Pedro','Miguel','Ana','Vanesa'];

// const eliminar = (nombre) => {
//     let index = nombres.indexOf(nombre);

//     if (index != -1){
//         nombres.splice(index,1);
//     }
// }
// console.log(nombres);
// eliminar('Pedro');
// console.log(nombres);






// const objeto1 = {id:1 , producto:'Arroz'};
// const array = [objeto1, {id:2, producto:"Fideo"}];

// console.log(array);
// array.push({id:3 , producto: "Pan"});
// console.log(array);




// const productos = [{id:1 , producto: "Arroz"},
//                    {id:2 , producto: "Fideos"},
//                    {id:3 , producto: "Pan lactal"}];

// for (const producto of productos){
//     console.log(producto.id);
//     console.log(producto.producto);
// }

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre.toUpperCase();
        this.precio = parseFloat(precio);
    }
    sumarIva() {
        this.precio = this.precio * 1.20;
    }
}

const productos = [];
productos.push(new Producto("Arroz","70"));
productos.push(new Producto("Mayonesa","240"));
console.log(productos);

for(const producto of productos){
    producto.sumarIva();
}




