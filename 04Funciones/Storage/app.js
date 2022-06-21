localStorage.setItem('bienvenida','Hola Coder ke ondita');
localStorage.setItem('esValido',true);
localStorage.setItem('unNumero',50);

let bienvenida = localStorage.getItem('bienvenida');
let bandera = localStorage.getItem('esValido');
let numero = localStorage.getItem('unNumero');

console.log(bienvenida);
console.log(bandera);
console.log(numero);


sessionStorage.setItem('seleccionados',[1,2,3]);
sessionStorage.setItem('esValido',false);

for(let i = 0 ; i < localStorage.length; i++){
    let clave = localStorage.key(i);
    console.log("Clave: " + clave);
    console.log("Valor: " + localStorage.getItem(clave));
}

//Limpiar el local
localStorage.clear();
//limpiar el session
sessionStorage.clear();

const producto1 = {id: 2, producto: "Manteca"};
localStorage.setItem("Producto",producto1);

//stringfy y parse
const nuevoProducto = [{id:2, producto:"Arroz"}, {id:3, producto:"Fideos"}];

const enJSON = JSON.stringify(nuevoProducto);


console.log(enJSON);
console.log(typeof nuevoProducto);
console.log(typeof enJSON);
localStorage.setItem("Producto5",enJSON);

const productos = [{id:2, producto:"Arroz"}, {id:3, producto:"Fideos"}, {id:4, producto:"Pollo"}];