const prompt = require('prompt-sync')();

//Estrutura condicional composta e encadeada 
//Operadores lógicos
// && - e 
// || - ou
// ! - não

let a = 2;
let b = 3;
let c = 5;
console.log(a > 2 && b < 2);//falsa, pois apenas 2 condição é F 
console.log(a > 1 && b < 2);//falsa, pois apenas 1 condição é verdadeira 
console.log(a > 1 && b < 4);//true, pois as 2 condições são verdadeiras 
console.log(a > 1 && b < 4 && c > 4);//true, pois todas as condições são verdadeiras 
console.log(a > 1 && b < 4 && c > 5);//true, pois todas as condições são verdadeiras

console.log(a > 2 || b < 2);//false, pois nenhuma condição é verdadeira
console.log(a > 1 || b < 2);//true, 1 verdadeira
console.log(a > 1 || b < 4);//true, 2 verdadeiras
console.log(a > 1 || b < 4 || c > 4);//true

let altura = Number(prompt('Digite sua altura'));
let peso = Number(prompt('Digite seu peso'));
let imc = peso / (altura ** 2);
if (imc < 18.5) {
    console.log('Você está abaixo do peso');
} else if (imc > 18.5 && imc < 24) {
    console.log('Você está no peso ideal')
} else if (imc > 25 && imc < 29.9){
    console.log(' Você está sobrepeso');
} else if (imc > 30){
    console.log('Você está obeso');
}

let lado1 = Number(prompt('Digite o lado 1:'));
let lado2 = Number(prompt('Digite o lado 2:'));
let lado3 = Number(prompt('Digite o lado 3:'));
if(lado1 == lado2 && lado2 == lado3 && lado3 == lado1 ){
    console.log('é equilátero');
} else if (lado1 != lado2 && lado2 != lado3 && lado3 != lado1 ){
    console.log ('é escaleno');
}else{
    console.log ('é isósceles');
}

//Exercícios utilizando o ||

let vendas = Number(prompt(' Digite o valor das vendas'));
let horas = Number(prompt('Digite as horas trabalhadas'));

if (vendas> 5000 || horas>40 ){
    console.log('tem direito ao bônus')
}else {
    console.log('não tem direito ao bônus')
}
let letra = prompt('Digite a letra');
if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u' ) {
    console.log('é vogal')
}else {
    console.log('é consoante')
}