// let container = document.getElementById("contenedor")

// container.innerHTML = "<h2> Hola Mundo! </h2>"
// container.className = "container row";



// console.log(container);

let parrafo = document.createElement("p");

parrafo.innerHTML = "<h2> Hola mis reyes! </h2>"


document.body.append(parrafo);

document.getElementById("nombre").value = "Matías";
document.getElementById("edad").value = 40;

let padre = document.getElementById("personas");

let personas = ['Matias','Lucas','Fernando','Ivan'];

//mostar valores del arreglo en una lista li
for (const persona of personas){
    let li = document.createElement("li");
    li.innerHTML = persona;
    padre.appendChild(li);    
}

let producto = { id: 1, nombre: "Arroz", precio:125};

let contenedor = document.createElement("div");
contenedor.innerHTML = `<h3> ID: ${producto.id} </h3>
                        <p> Producto: ${producto.nombre} </p>
                        <b> $ ${producto.precio} </b>`;

document.body.appendChild(contenedor);