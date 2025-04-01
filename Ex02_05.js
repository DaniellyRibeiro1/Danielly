const prompt = require('prompt-sync')();

let ano = Number(prompt('Qual ano de nascimento?'));
let idade = 2025- ano 
if(idade<18){
    console.log('Menor de idade');
} else {
    console.log('Maior de idade');
}