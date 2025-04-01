const prompt = require('prompt-sync')();

let vendeu = Number(prompt("Quanto ele vendeu?:"));
if(vendeu >5000){
    let comissao = 5/100 * vendeu
    console.log( comissao )
} else{
    console.log( 3/100 * vendeu)
}