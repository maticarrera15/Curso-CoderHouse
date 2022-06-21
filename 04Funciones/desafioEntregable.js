///Compra de entradas - Partido Selección Argentina en el estadio Mario Alberto Kempes
let ubicacioElegida = "";
let formaDePago = "";
let cantidadEntradas = 0;

showMenu();

function showMenu() {

    let opcion = 0;
    
    while (opcion !== 5)
    {
        opcion = Number(prompt(`Elija ubicación preferida para adquirir su entrada:
                                1: Platea Gasparini: $5000
                                2: Platea Ardiles: $7000
                                3: Popular Willington: $2500
                                4: Popular Artime: $3000
                                5: Salir de la compra`));
                                
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
     
    alert("Posición elegida: Platea Gasparini");
    cantidadEntradas = Number(prompt("Ingrese cantidad de entradas (maximo 2): "));
    formaDePago = String(prompt("Ingrese forma de pago (efectivo o tarjeta): "));
    cobrarEntrada(cantidadEntradas,valorEntrada,formaDePago);
}

function cobrarArdiles(valorEntrada) {
      
    alert("Posición elegida: Platea Ardiles");
    cantidadEntradas =Number(prompt("Ingrese cantidad de entradas (maximo 2): "));
    formaDePago = String(prompt("Ingrese forma de pago (efectivo o tarjeta): "));
    cobrarEntrada(cantidadEntradas,valorEntrada,formaDePago);
}
function cobrarWillington(valorEntrada) {
      
    alert("Posición elegida: Popular Willington");
    cantidadEntradas = Number(prompt("Ingrese cantidad de entradas (maximo 2): "));
    formaDePago = String(prompt("Ingrese forma de pago (efectivo o tarjeta): "));
    cobrarEntrada(cantidadEntradas,valorEntrada,formaDePago);
}

function cobrarArtime(valorEntrada) {
      
    alert("Posición elegida: Popular Artime");
    cantidadEntradas = Number(prompt("Ingrese cantidad de entradas (maximo 2): "));
    formaDePago = String(prompt("Ingrese forma de pago (efectivo o tarjeta): "));
    cobrarEntrada(cantidadEntradas,valorEntrada,formaDePago);
}

function cobrarEntrada(cantidad,valor,formaPago){
    
    let total = 0.0;
    let montoEfectivo = 0.0;
    let numeroTarjeta = '1';
    total = cantidad * valor;
    if (formaDePago === 'Efectivo'){
        //montoEfectivo += prompt("Abone dinero: ");
        calculo(montoEfectivo, total);
    }
    else if(formaPago === 'Tarjeta'){
        numeroTarjeta = String(prompt(`Valor Total: $${total}. Ingrese numero tarjeta débito (16 dígitos): `));
        console.log(numeroTarjeta.length);
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

function calculo(monto, total) {
    let cambio = 0.0;
    while (monto < total) {
        monto += Number(prompt(`El valor de su compra es ${total}, ingrese dinero: `));
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