const suma = (a,b) => {return a + b};
const resta = (c,d) => {return c - d};

const iva = x => {return x * 0.21};

let precioProducto = 500;
let descuento = 50;

let precioTotal = resta(suma(precioProducto,iva(precioProducto)),descuento);


console.log(precioTotal);
