let cantPaquetes = Number(prompt("Ingrese cantidad de paquetes que ingresaron en el dia: "));
let acumulador = 0;
let promedio = 0.0;
let menor = 0;
let mayor = 0;

for(let i = 1 ; i <= cantPaquetes ; i ++){
    
    let pesoPaquete = Number(prompt(`Ingrese peso del paquete ${i}`));
    console.log(`peso del paquete ${i}:  ${pesoPaquete} + ' kg`);
    acumulador += pesoPaquete
    
    if(i == 1){
        menor = pesoPaquete;
    }
    if(menor > pesoPaquete){
        menor = pesoPaquete;
    }
    if(mayor < pesoPaquete){
        mayor = pesoPaquete;
    }
    
    




}

console.log("El promedio es: " + acumulador/cantPaquetes);
console.log("El mayor es: " + mayor);
console.log("El menor es: " + menor);
