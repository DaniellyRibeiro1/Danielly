const prompt = require('prompt-sync')();

//Exercício 01 
let n1 = prompt('Digite um n° de 1 a 7:');

switch (n1) {
    case '1':
        console.log('Domingo');
        break;
    case '2':
        console.log('Segunda-feira');
        break;
    case '3':
        console.log('Terça-feira');
        break;
    case '4':
        console.log('Quarta-feira');
        break;
    case '5':
        console.log('Quinta-feira');
        break;
    case '6':
        console.log('Sexta-feira');
        break;
    case '7':
        console.log('Sabado');
        break;
    default:
        console.log('Dia da semana inválido');
}

//Exercício 02

let anoAtual = Number(prompt('Digite o ano atual:'));
let anoNascimento = Number(prompt('Digite seu ano de nascimento:'));

if (anoAtual - anoNascimento <= 10) {
    console.log('Você é Criança');
} else if (anoAtual - anoNascimento >= 11 && anoAtual - anoNascimento <= 17) {
    console.log('Você é adolescente')
} else if (anoAtual - anoNascimento >= 18 && anoAtual - anoNascimento <= 59) {
    console.log('Você é adulto');
} else {
    console.log('Você é idoso');
}

//Exercício 03
let mes = prompt('Digite um n° de 1 a 12: ');

switch (mes) {
    case '1':
        console.log('Janeiro');
        break;
    case '2':
        console.log('Fevereiro');
        break;
    case '3':
        console.log('Março');
        break;
    case '4':
        console.log('Abril');
        break;
    case '5':
        console.log('Maio');
        break;
    case '6':
        console.log('Junho');
        break;
    case '7':
        console.log('Julho');
        break;
    case '8':
        console.log('Agosto');
        break;
    case '9':
        console.log('Setembro');
        break;
    case '10':
        console.log('Outubro');
        break;
    case '11':
        console.log('Novembro');
        break;
    case '12':
        console.log('Dezembro');
        break;
    default:
        console.log('Mês inválido');
}

//Exercício 04
let meses = prompt('Digite o mês:');
if (meses == 'Janeiro' || meses == 'Março' || meses == 'Maio' || meses == 'Julho' || meses == 'Agosto' || meses == 'Outubro' || meses == 'Dezembro') {
    console.log('Tem 31 dias');
} else if (meses == 'Abril' || meses == 'Junho' || meses == 'Setembro' || meses == 'Novembro') {
    console.log('Tem 30 dias');

} else if (meses == 'Fevereiro') {
    console.log('28 dias');
}

//Exercício 05
let nota1 = Number(prompt('Digite a primeira nota:'));
let nota2 = Number(prompt('Digite a segunda nota:'));
let media = (nota1 + nota2) / 2

if (media > 7) {
    console.log('Aprovado');
    
} else if (media >= 5 && media < 7 ) {
    console.log('Recuperação');
    
} else if (media < 5){
    console.log('Reprovado');
    
}

//Exercício 06
let salário =  Number(prompt('Qual seu salário:'));
if (salário <=2000) {
    let reajuste = 0.12 * salário
    console.log(reajuste + salário);
}else if (salário >2000 && salário <=4000){
    let reajuste2 = 0.10 * salário
    console.log (reajuste2 + salário);
} else if ( salário >4000){
    let reajuste3 = 0.08 * salário
    console.log (reajuste3 + salário);
}