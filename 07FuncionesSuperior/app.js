//Funciones de orden superior
//reciben una funcion por parametro o retorna una función

//funcion que retorna una funcion
function mayorQue(n){
    return (m) => m > n; //funcion flecha
}

const mayorQueDiez = mayorQue(10);

console.log(mayorQueDiez(6));

//Recibir funciones por parametro

// function porCadaUno(arra, fun){
//     for (const elemento of arra){
//         fun(elemento);
//     }
// }

// porCadaUno([1,2,3,4,5],console.log);

//funciones de orden superior

function asignarOperacion(ope){
    if (ope === "suma"){
        return (a,b) => a + b;
    }
    else if (ope === "resta"){
        return (a,b) => a - b;
    }
}

let sumaUno = asignarOperacion("suma");
let resta = asignarOperacion("resta");

console.log(sumaUno(9,9));
console.log(resta(9,0));

//Recibir funciones por parametro

const numeros = [5,8,10];

function unoPorUno(array, fn){
    for (const el of array){
        fn(el);
    }
}
// let total = 0;
// function acumular(num){
//     total += num
// }
// unoPorUno(numeros,acumular);
// console.log(total);


const duplicado = [];

unoPorUno(numeros, (el) => {
    duplicado.push(el * 2)
})

console.log(duplicado);

//Busquedas y filtros

const numerosNuevo = [1,4,5,7,9];
const hola = ["hola","que","tal","como","va"];


hola.forEach( (el) => {
    console.log(el);
})

const cursos = [ {nombre: 'Javascript',precio: 15000},
                  {nombre: 'Python' , precio: 14000},
                  {nombre: 'Big Data', precio: 24000},
                  {nombre: 'React JS', precio: 20000}
]
//find retorna el primer elemento que cumpla con la condición.
const resultado = cursos.find((el) => el.nombre === "Javascript");
const resultado2 = cursos.find((el) => el.precio < 15000);
console.log(resultado2);

//filter retorna un nuevo parametros con los elmentos que cumplan la condicin
const prueb22 = cursos.filter((el) => el.precio > 20000);
console.log(prueb22);

//some retorna true o false si algun elemento cumple una condicion
console.log( cursos.some((el => el.nombre == "Big Data")));

//map crea un nuevo array con todos los elementos del original transformados según las operaciones de la funcion
//map se utiliza mucho para la transformacion de arrays
const nuevoArregloMap = cursos.map((el) => el.precio);
//console.log(nuevoArregloMap);
const preciosActualizados = cursos.map((el) => {
    return {
        nombre: el.nombre,
        precio:el.precio *1.21
        
    }
})

console.log(preciosActualizados);

const total = cursos.reduce((ac,elem) => ac + elem.precio, 0);
console.log(total);


const numerosTest = [40,4,3,200];
console.log(numerosTest);
const nuevoTest = numerosTest.sort((a,b) => a-b);
console.log(numerosTest);


console.log(Math.min(55,13,0,-44,66,5,-Infinity));
console.log(Math.random());



//Fechas
const fechaActual = new Date();
console.log(new Date(2020,0,15));