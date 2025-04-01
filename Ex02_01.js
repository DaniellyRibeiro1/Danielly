const prompt = require('prompt-sync')();

let nota1 = Number(prompt("Digite o 1° nota:"));
let nota2 = Number(prompt("Digite o 2° nota:"));
let media = (nota1 + nota2) / 2

if (media >= 7) {
    console.log("Parabéns, você passou")
} else {
    console.log("não passou")
}