
let numero = Number(prompt("Ingrese un numero para calcular su factorial: "));
let factorial = 0;
predecesor = 0;
let factorial2;
//5


for (let i = 1 ; i <= numero ; i++){
        
    if ( i === 1){
        predecesor = (numero - 1);
        factorial = numero * predecesor;
        numero -= 1;
    } 
    else {
        predecesor = numero - 1;
        factorial *= predecesor;
        numero -= 1;
    }    
    
}

console.log("Factorial: " + factorial);

