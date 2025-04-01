const prompt = require('prompt-sync')();


let numero1 = Number(prompt("Digite o 1° número:"));
let numero2 = Number(prompt("Digite o 2° número:"));
if(numero1 != numero2){
    console.log ('O 1° número é diferente do 2° número')
}else{
    console.log ('O 2° número é igual o 1° número')
}