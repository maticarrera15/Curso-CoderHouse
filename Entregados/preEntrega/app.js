//Pre Entrega Integrador - Logistica y Stock de productos 
class Producto{
    constructor(id,nombre,marca,categoria,precio,fechaAlta){
        this.id = id;
        this.nombre = nombre;
        this.marca = marca;
        this.categoria = categoria;
        this.precio = precio;
        this.fechaAlta = fechaAlta        
    }
    // almacenarProducto = function(producto){
    //     switch(producto.categoria){
    //         case 'Celulares y Tecnología':
    //         {
    //             productosTecnologia.push(producto);
    //             break;
    //         }
    //         case 'Climatización':
    //         {
    //             productosClimatización.push(producto);
    //             break;
    //         }
    //         case 'Muebles':
    //         {
    //             productosMueble.push(producto);
    //             break;
    //         }
        
    //     }
    // }

}


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
const productosClimatización = [
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
const productosMueble = [
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

let totalResultado = 0;
function acumular(numero) {
    totalResultado += numero;
}

showMenu();

function showMenu() {

    let opcion = 0;
    while (opcion !== 5){
        opcion = Number(prompt(`Menú de opciones a elegir:                           
                        1: Elija categoria y almacene de Producto
                        2: Mostrar total del valor de los productos
                        3: Ordenar productos de por nombre
                        4: Mostrar productos
                        5: Salir
                        `));
        switch(opcion){
            case 1:
            {
                elegirCategoria();
                break;
            }
            case 2:
            {
                let tipoArticulo = Number(prompt(`Ingrese Tipo Articulo: 
                                                  1- Tecnología
                                                  2. Climatizacion
                                                  3. Muebles  : 
                ` ));
                if (tipoArticulo == 1){
                    console.log("El total es: " + mostrarTotal(productosTecnologia));
                }
                else if(tipoArticulo == 2 ) {
                    console.log("El total es: " + mostrarTotal(productosClimatización));
                }
                else if(tipoArticulo == 3){
                    console.log("El total es: " + mostrarTotal(productosMueble));
                }
                //alert(`El precio de articulos es: ${total}`);
                break;
            }
            case 3:
            {
                let nuevoTipoArticulo = Number(prompt(`Ingrese Tipo Articulo: 
                                                  1- Tecnología
                                                  2. Climatizacion
                                                  3. Muebles  : 
                                                  ` ));
                if (nuevoTipoArticulo == 1){
                    ordenarMenorMayor(productosTecnologia);
                    console.log(productosTecnologia);
                }
                else if(nuevoTipoArticulo == 2 ) {
                    ordenarMenorMayor(productosClimatización);
                    console.log(productosClimatización);
                }
                else if(nuevoTipoArticulo == 3){
                    ordenarMenorMayor(productosMueble);
                    console.log(productosMueble);
                }
                //alert(`El precio de articulos es: ${total}`);
                break;
            }
            case 4:
            {
                mostrarArreglo();   
                break;
            }
            case 5:
            {
                alert("Ha finalizado el proceso de Logística y Selección de stock. Que tenga un buen día")
                break;
            }
            default:
            {
                alert("Opción Inválida");
                break;                
            }
        }
    }
}

function elegirCategoria(){
    
    let categoria = '';
    let opcionCategoria = 0;
    alert('Categorias: ' + categorias.join(","));
    opcionCategoria = Number(prompt(("Ingrese categoría del producto a Ingresar (1, 2 o 3): ")));
    if (opcionCategoria == 1){
        categoria = 'Celulares y Tecnología';
    }
    else if(opcionCategoria == 2){
        categoria = 'Climatización';
    }  
    else if ( opcionCategoria == 3){
        categoria = 'Muebles';
    }
    //alert('Categoría Ingresada: ' + categoria);
    almacenar(categoria);
    // else{
    //     alert('Categoría incorrecta');
    // }

}


function almacenar(categoria){
   
    let id = Number(prompt("Ingrese datos del producto. Id: "));
    let nombre = String(prompt("Nombre: "));
    let marca = String(prompt("Marca: "));
    let categoriaProducto = categoria;
    let precio = parseFloat(prompt("Precio: "));
    let fechaAlta = new Date();
    const producto = new Producto(id, nombre, marca, categoriaProducto,precio,fechaAlta);
    
    switch(categoriaProducto){
                case 'Celulares y Tecnología':
                {
                    productosTecnologia.push(producto);
                    break;
                }
                case 'Climatización':
                {
                    productosClimatización.push(producto);
                    break;
                }
                case 'Muebles':
                {
                    productosMueble.push(producto);
                    break;
                }
            }
    //producto.almacenarProducto(producto);
    alert('Producto ingresado')
}

function mostrarArreglo() {
    for (var i = 0 ; i<= productosTecnologia.length; i++)
    {
        console.log(productosTecnologia[i]);
    }
    for (var i = 0 ; i<= productosClimatización.length; i++)
    {
        console.log(productosClimatización[i]);
    }
    for (var i = 0 ; i<= productosMueble.length; i++)
    {
        console.log(productosMueble[i]);
    }
    
}


function mostrarTotal(array) {
    let total = 0;
    for(let i = 0 ; i < array.length; i++){
        total += array[i].precio;
    }
    return total;
}


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