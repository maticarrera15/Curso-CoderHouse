const producto = {
    id:10,
    nombre:'Curso',
    precio:12500
}

const desestructurar = (item) => {
    const {id,nombre} = item;
    console.log(id, nombre);
}

desestructurar(producto);