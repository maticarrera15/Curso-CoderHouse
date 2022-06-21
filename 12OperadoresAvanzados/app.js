const temp = 10;

temp >= 30 ? console.log('Dia muy caluroso') : console.log('Dia tranquilo');


const usuario = {
    nombre: 'Juan',
    edad: 14
}

const registroIngresado = usuario.edad >= 18 && new Date();

console.log(registroIngresado);

const usuario1 = {
    nombre: 'Matias',
    edad: 24
}

const usuario2 = null;

console.log(usuario1 || 'el usuario no extiste');

console.log(usuario2 || 'el usuario existe');


const nuevoUsuario = {
    nombre: 'Martin Palermo',
    edad: 45,
    cursos: {
        javascript:"Aprobado"
    }
}

console.log(nuevoUsuario?.cursos?.javascript || 'La propiedad no exsite');
console.log(nuevoUsuario?.trabajos?.coderhouse || 'La propiedad no existe rey');

//Destructuring de objetos

const pruebaUser = {
    nombre: "Leo Messi",
    edad: 24
}

const {nombre, edad} = pruebaUser;

console.log(nombre);
console.log(edad);
