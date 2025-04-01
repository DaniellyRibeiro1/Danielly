const prompt = require('prompt-sync')();

let numero1 = Number(prompt('Qual n° você quer?'));
if(numero1 >= 0){
    console.log('Positivo');
} else {
    console.log('Negativo');
}