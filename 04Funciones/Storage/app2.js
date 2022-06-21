const productos = [{id:2, producto:"Arroz", precio: 500},
                  {id:3, producto:"Fideos", precio:600},
                  {id:4, producto:"Pollo", precio:400}];


const guardarLocalmente = (clave,valor) => {localStorage.setItem(clave,valor)};

//guarda cada uno de los valores del arreglo producto
for (const producto of productos){
    guardarLocalmente(producto.id, JSON.stringify(producto));
}

guardarLocalmente("listaProductos", JSON.stringify(productos));


