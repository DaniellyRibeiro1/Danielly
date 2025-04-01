//Crie um programa que leia um número inteiro e mostre seu dobro, triplo e o vallor dele elevado ao cubo
const prompt = require('prompt-sync')();

let numero = Number(prompt('Qual é o número?'));
let dobro = numero * 2;
let triplo = numero * 3;
let elevadoAoCubo = numero ** 3;
console.log(`O dobro do número é: ${dobro}, o triplo do número é: ${triplo}, o número elevado ao cubo é : ${elevadoAoCubo}`);