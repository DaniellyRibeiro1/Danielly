const prompt = require('prompt-sync')();

let somaIdadeM = 0
let qtdeM
let somaIdadeF = 0
let qtdeF

for (let x = 1; x <= 10; x ++) {
let idade = Number(prompt('Digite sua idade:'))
let sexo = prompt('Digite seu sexo: (M/F) ')

if(sexo == 'M'){
qtdeM++;
somaIdadeM = somaIdadeM + idade;
}else if (sexo == 'F'){
atdeF++;
somaIdadeF = somaIdadeF + idade;
}
}

console.log(`A média dos sexo M é de ${somaIdadeM / qtdeM}`)
console.log(`A média dos sexo F é de ${somaIdadeF / qtdeF}`)
console.log(`A média dos sexo M é de ${(somaIdadeF + somaIdadeM) /10}`)