function mostrarMenu(num1, num2) {

    let resultado = 0;
    let opcion = 0;

    while(opcion !== 5) {

        opcion = Number(prompt(`Ingrese opción: 
                                1. Suma
                                2. Resta
                                3. Producto
                                4. División
                                5. Fin`));
        switch(opcion){
            case 1:
                resultado = num1 + num2;
                console.log(resultado);
                break;
            case 2:
                resultado = num1 - num2;
                console.log(resultado);
                break;
            case 3:
                resultado = num1 * num2;
                console.log(resultado);
                break;
            case 4:
                resultado = num1 / num2;
                console.log(resultado);
                break;
            case 5:
                alert("Gracias por su confianza");
                break;
            default:
                alert("Opción inválida, ingrese una correcta");
                break;
        }

    }


}

mostrarMenu(8,4);