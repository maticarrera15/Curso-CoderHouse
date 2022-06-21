//Definicion de objetos con function y después con class

const persona = {nombre: "Homero", 
                 edad: 39, 
                 calle: "Hola 123"};

console.log("Persona: " + persona["nombre"]);

function Persona(nombre, edad, calle){
    this.nombre = nombre;
    this.edad = edad;
    this.calle = calle;
    this.hablar = function () {console.log("Hola Soy " + this.nombre)}
}


const persona1 = new Persona('Matias',24,'Nuevo Mundo 664');
persona1.hablar();

class PersonaNueva{
    constructor(nombre, edad, calle){
        this.nombre = nombre;
        this.edad = edad;
        this.calle = calle;

    }
}

class Auto{
    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.presentacion = function () {
            console.log(`Auto ${marca}, Modelo ${modelo} y año ${año}`)
        };
    }
}

const nuevoAuto = new Auto('Chevrolet','Cruze','2016');
nuevoAuto.presentacion();

const persona3 = new PersonaNueva("Homero",38,"Av. nueva 887");
console.log(persona3);