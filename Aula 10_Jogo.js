const prompt = require('prompt-sync')();

console.log("===============================");
console.log("🤔    JOGO DA ADIVINHAÇÃO   🤔");
console.log("===============================");

let nrSecreto = Math.floor(Math.random() * 100) +1;
let acertou = false;

while (acertou == false){
    let chute = Number(prompt('Digite um número de 1 e 100: '))
    if(chute == nrSecreto){
        console.log(`Parabéns, você acertou!❤`);
        acertou = true;
    } else if (chute > nrSecreto){
        console.log(`Você chutou ${chute},tente um número MENOR`)
    
    } else if (chute < nrSecreto){
        console.log(`Você chutou ${chute},tente um número MAIOR`)
    }
}
console.log ('FIM')