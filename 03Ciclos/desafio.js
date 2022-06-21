///Condición de alumno de ingeniería

let nombreUsuario = String(prompt("Ingrese nombre del alumno: "));
let cantidadMaterias = Number(prompt("Cantidad de materias cursadas en el cuatrimestre: "))
let materia = "";
let promedio = 0.0;
let salidaFinal = "";
let condicion = "";

for (let i = 1 ; i <= cantidadMaterias; i++){
    materia = String(prompt("Materia " + i + ": "));
    let nota1 = Number(prompt("Nota 1: "));
    let nota2 = Number(prompt("Nota 2: "));
    let promedio = ((nota1 + nota2) / 2)
    console.log("Materia: " + materia + " - Notas: " + nota1 + " y " + nota2 + " respectivamente.");
    console.log("Promedio: " + promedio);

    if (promedio < 6 ){
        condicion = "Libre";
        salidaFinal = "Alumno: " + nombreUsuario + " - Materia: " + materia + " - Condición: " + condicion;    
    }
    else if (promedio >= 6 && promedio < 7 ){
        condicion = "Regular";
        salidaFinal = "Alumno: " + nombreUsuario + " - Materia: " + materia + " - Condición: " + condicion;
        
    }
    else if (promedio >= 7 && promedio < 8 ){
        condicion = "Promoción Práctica";
        salidaFinal = "Alumno: " + nombreUsuario + " - Materia: " + materia + " - Condición: " + condicion;
        
    }
    else if (promedio > 8 ){
        condicion = "Aprobación Directa";
        salidaFinal = "Alumno: " + nombreUsuario + " - Materia: " + materia + " - Condición: " + condicion;
        
    }
    alert(salidaFinal);
    console.log(salidaFinal);
}


alert(nombreUsuario + ", le agradecemos por utilizar el optimizador de condiciones academicas");




