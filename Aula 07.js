const prompt = require('prompt-sync')();

// Operadores relacionais
// Quer dizer igual, igualdade 
// != quer dizer diferente

let a = 2;
let b = 3;
console.log(a > b); //false
console.log(a == b); //false
console.log(a != b); //true
console.log(a > 2); //false
console.log(a >= 2); //true

//if estrutura de condição muito utilizada na programação
let tenhoIngresso = true;
if (tenhoIngresso == true) { //Se a condição for verdadeira
    console.log(' Posso entrar no show');
}


let idade = Number(prompt('Qual é a sua idade? '));
if (idade >= 18) {
    console.log('Maior de idade');
} else {
    console.log("menor de idade")
}







//Else=Senão 

tenhoIngresso = false
if (tenhoIngresso = true) { //Se a condição for verdadeira
    console.log("posso entrar no show?");
} else {      //Se a primeira condição for false
    console.log('Estou barrado na portaria');
}