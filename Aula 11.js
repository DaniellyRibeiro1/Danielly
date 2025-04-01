//Estrutura de laço de repetição for
const prompt = require('prompt-sync')();

//inicialização da variável ; condição do for; incremento da variável
for (let contador = 1; contador <= 5; contador++){
    console.log(contador);
}
console.log('FIM')

for (let contador1 = 5; contador1 <= 50; contador1 ++){
    console.log(contador1);
}
console.log('FIM')

//Neste for iniciamos a partir do n° , até o n° 50
//incrementando de 3 em 3 no contador
for (let contador1 = 5; contador1 <= 50; contador1 +=3){
    console.log(contador1);
}
console.log('FIM')

for (let contador1 = 100; contador1 <= 1000; contador1 +=10){
    console.log(contador1);
}
console.log('FIM')

//Utilizando o break para parar o for
for (let contador = 1; contador <=500; contador++)
    console.log(contador == 50)
if (contador == 50 ){
   
}

console.log('Entregando os notebooks');
for (let nr = 1; nr <= 32; nr++){
    let nome = prompt(`Quem é o n° ${nr}: `)
    let presente = prompt(`O(A) ${nome} está presente (S ou N)?`)
    }


//Tabuada com o for
    let nr = 6;
    for(let contadora = 1; contadora <= 10; contador ++){
    console.log(`${nr} x ${contadora} = ${nr * contadora}`);
    }