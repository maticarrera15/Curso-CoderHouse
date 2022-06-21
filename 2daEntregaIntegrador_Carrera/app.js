//Segunda Entrega Integrador - Logistica y Stock de productos 
//Definicion de la clase principal de Producto
class Producto{
    constructor(id,nombre,marca,categoria,precio,fechaAlta){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
        this.fechaAlta = fechaAlta        
    }

}

//Array de posibles categorías de los productos
const categorias = ['Celulares y Tecnología','Climatización','Muebles'];

let productosTecnologia = [
    {
        "id": 1,
        "nombre": "A52",
        "marca": "Samsung",
        "categoria": 'Celulares y Tecnología',
        "precio": 70000
       // fechaAlta: new Date(2022,04,26,14,18,26)
    },
    {
        "id": 2,
        "nombre": "S20 FE",
        "marca": "Samsung",
        "categoria": 'Celulares y Tecnología',
        "precio": 100000
        //fechaAlta: new Date(2022,05,01,10,25,39)
    },

];
let productosClimatización = [
    {
        id: 300,
        nombre: "Calefactor",
        marca: "Philco",
        categoria: 'Climatización',
        precio: 40000
        //fechaAlta: new Date(2021,11,26,14,38,26)
    },
    {
        id: 301,
        nombre: "Aire acondicionado",
        marca: "Samsung",
        categoria: 'Climatización',
        precio: 60000
        //fechaAlta: new Date(2022,0,05,11,45,39)
    },

];
let productosMueble = [
    {
        id: 500,
        nombre:"Mesa de Luz",
        marca: "MuebleAr",
        categoria: 'Muebles',
        precio: 12000
        //fechaAlta: new Date(2022,03,07,14,18,26)
    },
    {
        id: 501,
        nombre: "Mueble estante televisor",
        marca: "Mueblesito",
        categoria: 'Muebles',
        precio: 20000
        //fechaAlta: new Date(2022,02,01,09,19,59)
    }

];

//LocalStorage para almacenar los arrays con el stock inicial con el que cuenta la empresa.
//Convertidos a Json previamente
const saveLocally = (clave,valor) => {localStorage.setItem(clave,valor)};
saveLocally('productosTecnologia',JSON.stringify(productosTecnologia));
saveLocally('productosClimatización',JSON.stringify(productosClimatización));
saveLocally('productosMueble',JSON.stringify(productosMueble));


//Acumulador del resultado
let totalResultado = 0;
function acumular(numero) {
    totalResultado += numero;
}

//Inicialización globales de variables que utilizamos en los diferentes metodos
let opcionCategoria = 0;
let categoria = document.getElementById('idCategoria');
let idProducto = document.getElementById('idProducto');
let nombre = document.getElementById('nombreProducto');
let marca = document.getElementById('marcaProducto');
let precio = document.getElementById('precioProducto');
let nuevoTipoArticulo = document.getElementById('categoriaOrdenamiento')
opcionCategoria = document.getElementById('categoriaAlmacen');

//Botones globales del formulario para mostrar datos o cálculos
let btnCalculoValor = document.getElementById("calculoValor");
let btnsVisualizacion = document.querySelector('#botonesVisualizacion');
let botonesValorTotal = document.getElementById('botonesValorTotal');
let botonesOrdenamiento = document.getElementById('botonesOrdenamiento');
let btnPrueba = document.getElementById('prueba');
let btnOrdenar = document.getElementById('calculoOrdenar');
let botonesMostrarProductos = document.getElementById('botonesMostrarProductos');
let btnMostrarAlmacen = document.getElementById('mostrarPorAlmacen');


btnCalculoValor.addEventListener("click", () =>{
    let tipoArticulo = document.getElementById('categoriaTotal');
                if (tipoArticulo.value == 1){
                    let resultadoTotal = document.createElement("h3");
                    //console.log("El total es: " + mostrarTotal(productosTecnologia));
                    resultadoTotal.innerHTML = `El valor total de productos de la categoria Tecnología es: $${mostrarTotal(productosTecnologia)}`
                    botonesValorTotal.appendChild(resultadoTotal);
                    setTimeout(() => {
                        resultadoTotal.remove();
                    }, 4000);
                    
                }
                else if(tipoArticulo.value == 2 ) {
                    let resultadoTotal = document.createElement("h3");
                    //console.log("El total es: " + mostrarTotal(productosClimatización));
                    resultadoTotal.innerHTML = `El valor total de productos de la categoria Climatización es: $${mostrarTotal(productosClimatización)}`
                    botonesValorTotal.appendChild(resultadoTotal);
                    setTimeout(() => {
                        resultadoTotal.remove();
                    }, 4000);
                }
                else if(tipoArticulo.value == 3){
                    let resultadoTotal = document.createElement("h3");
                    //console.log("El total es: " + mostrarTotal(productosMueble));
                    resultadoTotal.innerHTML = `El valor total de productos de la categoria Mueble es: $${mostrarTotal(productosMueble)}`
                    botonesValorTotal.appendChild(resultadoTotal);
                    setTimeout(() => {
                        resultadoTotal.remove();
                    }, 4000);
                }
                tipoArticulo.value = '';
                
})

btnOrdenar.addEventListener("click", () =>{
   
                if (nuevoTipoArticulo.value == 1){
                    let categoriaIngresada = document.createElement('h3');
                    categoriaIngresada.innerHTML = 'Categoría Celulares y Tecnología'
                    botonesOrdenamiento.appendChild(categoriaIngresada);
                    ordenarMenorMayor(productosTecnologia);
                    for (const producto of productosTecnologia){
                        let contenido = document.createElement("div");
                        contenido.innerHTML = `<h4> Id: ${producto.id} - Marca: ${producto.marca} - Nombre: ${producto.nombre} - Precio: ${producto.precio}</h4>`;
                        botonesOrdenamiento.appendChild(contenido);
                    }
                }
                
                else if(nuevoTipoArticulo.value == 2 ) {
                    let categoriaIngresada = document.createElement('h3');
                    categoriaIngresada.innerHTML = 'Categoría Climatización'
                    botonesOrdenamiento.appendChild(categoriaIngresada);
                    ordenarMenorMayor(productosClimatización);
                    for (const producto of productosClimatización){
                        let contenido = document.createElement("div");
                        contenido.innerHTML = `<h4> Id: ${producto.id} - Marca: ${producto.marca} - Nombre: ${producto.nombre} - Precio: ${producto.precio}</h4>`;
                        botonesOrdenamiento.appendChild(contenido);
                    }
                }

                else if(nuevoTipoArticulo.value == 3){
                    let categoriaIngresada = document.createElement('h3');
                    categoriaIngresada.innerHTML = 'Categoría Muebles'
                    botonesOrdenamiento.appendChild(categoriaIngresada);
                    ordenarMenorMayor(productosMueble);
                    for (const producto of productosMueble){
                        let contenido = document.createElement("div");
                        contenido.innerHTML = `<h4> Id: ${producto.id} - Marca: ${producto.marca} - Nombre: ${producto.nombre} - Precio: ${producto.precio}</h4>`;
                        botonesOrdenamiento.appendChild(contenido);
                    }
                }
                nuevoTipoArticulo.value = '';

}

)

btnMostrarAlmacen.addEventListener("click", () =>{
    mostrarPorCategoria();
})

btnPrueba.addEventListener('click',(e) =>{
    e.preventDefault();
    elegirCategoria();
    setearValores();
});

function setearValores(){
    categoria.value = '';
    idProducto.value = '';
    nombre.value = '';
    marca.value = '';
    precio.value = '';
}

function elegirCategoria(){

    let categoriaMuestra = '';
    if (categoria.value == 1){
        //console.log('1');
        categoriaMuestra = 'Celulares y Tecnología';
    }
    else if(categoria.value == 2){
        //console.log('2');
        categoriaMuestra = 'Climatización';
    }  
    else if ( categoria.value == 3){
        //console.log('3');
        categoriaMuestra = 'Muebles';
    }


    almacenar(categoriaMuestra);
    
    let prodIngresado = document.createElement('h3');
    prodIngresado.innerHTML = 'Producto Ingresado al almacén'
    btnsVisualizacion.appendChild(prodIngresado);
    
    setTimeout(() => {
        prodIngresado.remove();
    }, 2000);

}

//Funcion que agrega a cada arreglo un nuevo producto
function almacenar(categoria){

    let fechaAlta = new Date();

    const producto = new Producto(idProducto, nombre, marca, categoria,precio,fechaAlta);
    
    switch(categoria){
                case 'Celulares y Tecnología':
                {
                    productosTecnologia.push(producto);
                    saveLocally('productosTecnologia',JSON.stringify(productosTecnologia))
                    break;
                }
                case 'Climatización':
                {
                    productosClimatización.push(producto);
                    saveLocally('productosClimatización',JSON.stringify(productosClimatización))
                    break;
                }
                case 'Muebles':
                {
                    productosMueble.push(producto);
                    saveLocally('productosMueble',JSON.stringify(productosMueble))
                    break;
                }
            }
     
}

function mostrarTotal(array) {
    let total = 0;
    for(let i = 0 ; i < array.length; i++){
        total += array[i].precio;
    }
    return total;
}

//Ordenar de menor a mayor (alfabéticamente por nombre) el arreglo que se pasa por parametro
function ordenarMenorMayor(array){
    array.sort( (a,b) => {
        if(a.nombre > b.nombre){
            return 1;
        }
        if (a.nombre < b.nombre){
            return -1;

        }
        return 0;
    })
}

//Mostrar categorias
function mostrarPorCategoria(){
    
    let categoria = '';
    
    if (opcionCategoria.value == 1){
        categoria = 'Celulares y Tecnología';
    }
    else if(opcionCategoria.value == 2){
        categoria = 'Climatización';
    }  
    else if ( opcionCategoria.value == 3){
        categoria = 'Muebles';
    }

    showProducts(categoria);


}

function showProducts(categoriaProducto){

    switch(categoriaProducto){
        case 'Celulares y Tecnología':
        {
            let categoriaIngresada = document.createElement('h3');
            categoriaIngresada.innerHTML = 'Categoría Celulares y Tecnología'
            botonesMostrarProductos.appendChild(categoriaIngresada);
            for (const producto of productosTecnologia){
                let contenido = document.createElement("div");
                contenido.innerHTML = `<h4> Id: ${producto.id} - Marca: ${producto.marca} - Nombre: ${producto.nombre} - Precio: ${producto.precio} </h4>`;
                botonesMostrarProductos.appendChild(contenido);
            }
            opcionCategoria.value = '';
            break;
        }
        case 'Climatización':
        {
            let categoriaIngresada = document.createElement('h3');
            categoriaIngresada.innerHTML = 'Categoría Climatización'
            botonesMostrarProductos.appendChild(categoriaIngresada);
            for (const producto of productosClimatización){
                let contenido = document.createElement("div");
                contenido.innerHTML = `<h4> Id: ${producto.id} - Marca: ${producto.marca} - Nombre: ${producto.nombre} - Precio: ${producto.precio} </h4>`;
                botonesMostrarProductos.appendChild(contenido);
            }
            opcionCategoria.value = '';
            break;
        }
        case 'Muebles':
        {   let categoriaIngresada = document.createElement('h3');
            categoriaIngresada.innerHTML = 'Categoría Muebles'
            botonesMostrarProductos.appendChild(categoriaIngresada);
            for (const producto of productosMueble){            
                let contenido = document.createElement("div");
                contenido.innerHTML = `<h4> Id: ${producto.id} - Marca: ${producto.marca} - Nombre: ${producto.nombre} - Precio: ${producto.precio} </h4>`;
                botonesMostrarProductos.appendChild(contenido);
            }
            opcionCategoria.value = '';
            break;
        }
    }
}