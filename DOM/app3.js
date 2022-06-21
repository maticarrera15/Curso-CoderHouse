const productos = [{id:1, nombre: "ARROZ", precio: 550},
                    {id: 2, nombre: "Polenta", precio: 700},
                    {id:3, nombre: "Ravioles", precio: 800}];

for (const producto of productos){
    let contenedor = document.createElement('div');
    contenedor.innerHTML = `Id: ${producto.id} - Nombre: ${producto.nombre} - Precio: ${producto.precio}`;
    document.body.appendChild(contenedor);

}