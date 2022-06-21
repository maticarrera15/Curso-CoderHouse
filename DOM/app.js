let paises = document.getElementsByClassName("paises");


// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);
// console.log(paises[2].innerHTML);

let contenedores = document.getElementsByTagName("div");
console.log(contenedores[0].innerHTML);
console.log(contenedores[1].innerHTML);
console.log(contenedores[2].innerHTML);


for (const test of paises){
    console.log(test.innerHTML);
}

const titulo = document.getElementById("titulo");
console.log(titulo.innerHTML);

titulo.innerText = 'Hola rey';
console.log(titulo.innerHTML)
