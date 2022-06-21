// let usuario;
// let usuarioENLS = JSON.stringify(localStorage.getItem('usuario'));

// if(usuarioENLS){
//     usuario = usuarioENLS;

// }
// else {
//     usuario = prompt('Ingrese su nombre de usuario: ');
// }




let productos = [{id:10, nombre: "PC GAMER" , precio:500},
                 {id:11, nombre: "PC GAMER full" , precio:700},
                 {id:12, nombre: "PC GAMER fasasd" , precio:800}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave,valor)};


for (const producto of productos){
    guardarLocal(producto.id, JSON.stringify(producto));
}

guardarLocal('listaNuevaDeProductos',JSON.stringify(productos));