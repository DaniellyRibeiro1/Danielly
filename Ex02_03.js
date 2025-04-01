const prompt = require('prompt-sync')();

let num = Number(prompt("Digite o numero:"));
if(num %2 == 0 ) {
    console.log('é par')
}else{
    console.log('é ímpar')
} 