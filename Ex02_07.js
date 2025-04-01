const prompt = require('prompt-sync')();
let velocidade = Number(prompt("Qual a velocidade do carro?:"));
if(velocidade> 80){
    let multa = (velocidade - 80) * 7
    console.log("Você foi multado", multa)
}