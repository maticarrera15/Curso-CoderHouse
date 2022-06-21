


// function suma(num1, num2){
//     return num1 + num2;
// }


// function mostrar(mensaje){
//     console.log(mensaje);
// }

// let resultado = suma(3,4);
// suma(3,56);
// mostrar("El resultado es: " + resultado );

function calculadora(num1,num2,operador){

    switch(operador){
        case "+":
            return num1 + num2;
            break;
        case "-":
            return num1 - num2;
            break;
        case "*":
            return num1 * num2;
            break;
        case "/":
            return num1 / num2;
            break;
        default:
            return 0;
            break;
    }


}

console.log('El resultado es: ' + calculadora(8,8,'/'));

