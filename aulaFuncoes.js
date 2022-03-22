const prompt = require('prompt-sync')();

function operacoesMatematicas (numeroUm, numeroDois){

    let soma = numeroUm + numeroDois;
    console.log(`A soma dos números ${numeroUm} e do ${numeroDois} é: ${soma}`);
    let divisao = numeroUm / numeroDois;
    console.log(`A divisão do número ${numeroUm} pelo ${numeroDois} é: ${divisao}`);
    let multiplicacao = numeroUm * numeroDois;
    console.log(`A multiplicação do número ${numeroUm} pelo ${numeroDois} é: ${multiplicacao}`);

}

let primeiroNumero = +prompt("Digite o primeiro valor para realizar as operações matemáticas: ");
let segundoNumero = +prompt("Digite o segundo valor para realizar as operações matemáticas: ");

operacoesMatematicas(primeiroNumero, segundoNumero);