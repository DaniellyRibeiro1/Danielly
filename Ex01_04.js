//Crie um programa que leia duas notas de um aluno, calcule e mostre sua mádia

const prompt = require('prompt-sync')();

let nota1 = Number(prompt("Digite o 1° nota:"));
let nota2 = Number(prompt("Digite o 2° nota:"));
let media = (nota1 + nota2) / 2

console.log (`A média é ${media}`);