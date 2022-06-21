///Compra de entradas - Partido Selección Argentina en el estadio Mario Alberto Kempes
class ubicacion{
    constructor(id,tipo,nombre,valor){
        this.id = id;
        this.tipo = tipo.toUpperCase();
        this.nombre = nombre.toUpperCase();
        this.valor = parseFloat(valor);
    }
    cobrarEntrada = function(cantidad,valor,formaPago){
    
    let total = 0.0;
    let montoEfectivo = 0.0;
    let numeroTarjeta = '1';
    total = cantidad * valor;
    if (formaDePago.toUpperCase() === 'EFECTIVO'){
        //montoEfectivo += prompt("Abone dinero: ");
        calculo(montoEfectivo, total);
    }
    else if(formaPago.toUpperCase() === 'TARJETA'){
        numeroTarjeta = String(prompt(`Valor Total: $${total}. Ingrese numero tarjeta débito (16 dígitos): `));
        //console.log(numeroTarjeta.length);
        if (numeroTarjeta.length === 16){
            //console.log("tiene 16 digitos la tarjeta");
            alert("Numero de tarjeta válido. Le enviaremos un mail con la confirmación del pago");
        }
        else {
            console.log("No tiene 16 digitos");
            alert("Numero incorrecto. Transacción inválida");
        }
    }
}

}

let ubicacioElegida = "";
let formaDePago = "".toUpperCase();
let cantidadEntradas = 0;
let idGasparini = 100;
let idArdiles = 200;
let idWillington = 300;
let idArtime = 400;

const entradas = []; //definicion global de arreglo vacío
showMenu();

function showMenu() {

    let opcion = 0; 
    while (opcion !== 6)
    {
        opcion = Number(prompt(`Elija ubicación preferida para adquirir su entrada:
                                1: Platea Gasparini: $5000
                                2: Platea Ardiles: $7000
                                3: Popular Willington: $2500
                                4: Popular Artime: $3000
                                5: Visualizar ubicaciones ocupadas
                                6: Salir de la compra`));
        switch (opcion)
        {
            case 1: 
            {
                cobrarGasparini(5000);
                break;
            }
            case 2: 
            {
                cobrarArdiles(7000);
                break;
            }
            case 3: 
            {
                cobrarWillington(2500);
                break;
            }
            case 4: 
            {
                cobrarArtime(3000);
                break;
            }
            case 5:
            {
                ubicacionesOcupadas();
                //alert(entradas);
                break;
            }
            case 6: 
            {
                alert("Gracias por utilizar nuestro sitio. Que tenga un gran día")
                break;
            }
            default: 
            {
                alert("Opción inválida");
                break;
            }

        }

    }
}


function cobrarGasparini(valorEntrada) {

    const ubicacionGasparini = new ubicacion(idGasparini,'Platea','Gasparini',valorEntrada);
    //console.log(`${ubicacionGasparini.nombre} ${ubicacionGasparini.tipo} ${ubicacionGasparini.valor}`);
    alert("Posición elegida: Platea Gasparini");
    cantidadEntradas = Number(prompt("Ingrese cantidad de entradas(solo 1 por persona)): "));
    formaDePago = String(prompt("Ingrese forma de pago (efectivo o tarjeta): "));
    ubicacionGasparini.cobrarEntrada(cantidadEntradas,valorEntrada,formaDePago);
    entradas.push(ubicacionGasparini);    
    idGasparini += 1;

}
1
function cobrarArdiles(valorEntrada) {

    const ubicacionArdiles = new ubicacion(idArdiles,'Platea','Ardiles',valorEntrada);
    alert("Posición elegida: Platea Ardiles");
    cantidadEntradas =Number(prompt("Ingrese cantidad de entradas (solo 1 por persona): "));
    formaDePago = String(prompt("Ingrese forma de pago (efectivo o tarjeta): "));
    ubicacionArdiles.cobrarEntrada(cantidadEntradas,valorEntrada,formaDePago);
    entradas.push(ubicacionArdiles); 
    idArdiles += 1;
}

function cobrarWillington(valorEntrada) {

    const ubicacionWillington = new ubicacion(idWillington,'Popular','Willington',valorEntrada);  
    alert("Posición elegida: Popular Willington");
    cantidadEntradas = Number(prompt("Ingrese cantidad de entradas (solo 1 por persona): "));
    formaDePago = String(prompt("Ingrese forma de pago (efectivo o tarjeta): "));
    ubicacionWillington.cobrarEntrada(cantidadEntradas,valorEntrada,formaDePago);
    entradas.push(ubicacionWillington);
    idWillington += 1;
}

function cobrarArtime(valorEntrada) {
    const ubicacionArtime = new ubicacion(idArtime,'Popular','Artime',valorEntrada);  
    alert("Posición elegida: Popular Artime");
    cantidadEntradas = Number(prompt("Ingrese cantidad de entradas (solo 1 por persona): "));
    formaDePago = String(prompt("Ingrese forma de pago (efectivo o tarjeta): "));
    ubicacionArtime.cobrarEntrada(cantidadEntradas,valorEntrada,formaDePago);
    entradas.push(ubicacionArtime);
    idArtime += 1;
    
}


function calculo(monto, total) {
    let cambio = 0.0;
    while (monto < total) {
        monto += Number(prompt(`El valor de su compra es $${total}, ingrese dinero: `));
    }
    cambio = monto - total;
    if (cambio === 0){
        alert("Gracias por su compra. Le enviaremos un mail con la confirmación del pago")
    }
    else {
        alert(`Su cambio es: $${cambio}. Gracias por su compra. Le enviaremos un mail con la confirmación del pago`);
    }
    
    return cambio;
}

function ubicacionesOcupadas(){
    const idEntradas = [];

    //alert(entradas.toString());
    for (const entrada of entradas){
        idEntradas.push(entrada.id + " - " + entrada.nombre + " ");
    }
    alert("Ubicaciones no disponibles en el estadio: " + idEntradas);
    
}