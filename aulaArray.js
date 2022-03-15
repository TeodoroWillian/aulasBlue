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


console.log(numeros,impares, pares)


// Exercício 02

let idade = [];
let altura = [];
let contagemIdade = 0;
let contagemAltura = 0;

for (let i = 0; i < 5; i++){
    idade[i] = prompt("Digite sua idade: ");
    altura[i] = prompt("Digite a altura: ");
    contagemIdade = contagemIdade + idade[i];
    contagemAltura = contagemAltura + altura[i];
}
let mediaIdade = contagemIdade / idade.length;
let mediaAltura = contagemAltura / altura.length;

console.log(`A média de idade foi de: ${mediaIdade} e a média de Altura foi de: ${mediaAltura}`)