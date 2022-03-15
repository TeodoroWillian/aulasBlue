const prompt = require('prompt-sync')();

console.clear();

let numeros = [];
let pares = [];
let impares = [];

for (let i = 0; i < 20; i++){
    numeros[i] = prompt("Digite o número");
    if(numeros[i] % 2 == 0){
        pares.push(numeros[i]);
    } else {
        impares.push(numeros[i]);
    }
} 


console.log(numeros,impares, pares);