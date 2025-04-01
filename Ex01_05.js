//Crie um programa que leia o valor em metros e o exiba convertido em centímetros, milésimos e km
const prompt = require('prompt-sync')();

//Lendo o valor em metros
let valor = Number(prompt('Digite o valor em metros'));
//Convertendo em cm
let centímetro = metros * 100;
//Convertendo em mm
let milímetro = metros * 1000;
//Convertendo em km
let km = metros * 1000;
//Exibindo o valor
console.log(`${metros}m é ${cm}, ${mm}mm e ${km}km`);