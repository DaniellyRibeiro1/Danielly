//Estruturas condicionais aninhadas
//Switch case 
const prompt = require('prompt-sync')();

let valorCompra = 120;
let clienteVIP = true;

if (valorCompra >= 100) {
    if (clienteVIP == true) {
        console.log(`Você ganhou R$ ${valorCompra * 10 / 100}`);
    } else {
        let desconto = valorCompra * 5 / 100
        console.log(`Você ganhou R$ ${desconto} de desconto`)
    }
} else {
    let restante = 100 - valorCompra;
    console.log(`Compre mais R$ ${restante} e ganhe desconto`);
}



let idade = Number(prompt('Digite sua idade:'));
if (idade < 16) {
    console.log('Você não pode votar');
} else if (idade >= 18 && idade <= 70) {
    console.log('Você é obrigado a votar');
} else {
    console.log('Seu voto é facultativo');
}

//Switch case é uma alternativa ao if else 
let n1 = Number(prompt('Digite um n°:'));
let n2 = Number(prompt('Digite outro n°: '));
let op = Numberprompt('Digite o operador (+ - / * **): ');
switch (op) {
    case '+':
        console.log(n1 + n2);
        break;
    case '-':
        console.log(n1 - n2);
        break;
    case '/':
        console.log(n1 / n2);
        break;
    case '*':
        console.log(n1 * n2);
        break;
    case '**':
        console.log(n1 ** n2);
        break;
    default:
        console.log('Operador inválido');
}
 
