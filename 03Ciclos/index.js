const datoIngresado = Number(prompt("Ingresa un número: "));


if (!isNaN(datoIngresado)){

    for(let i=1 ; i <= datoIngresado; i++){
        console.log(i);
    }


}
else{
    alert("No ingresó un dato válido");
}