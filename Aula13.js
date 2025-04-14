//Interação sobre nossos vetores (arrays / listas)

//Vetor         0        1          2       3
let frutas = ['Maçã','Banana', 'Abacaxi', 'Uva'];
//Para iterar sobre um vetor, utilizamos o for
for (let x = 0; x < frutas.length; x++){
    let frutaAtual = frutas [x]
    console.log(`A fruta da posição ${x} é ${frutas[x]}`);
}
console.log('FIM')

//Interando sobre uma lista usando o for of
let listaJogadores = ['Pelé', 'Maradona', 'Messi', 'CR7']
for (let Jogador of listaJogadores) {
    console.log(`O jogador é ${Jogador}`)
}

let listaNmr = [1, 2, 3, 4, 5 ]
for (let nr of listaNmr) {
    console.log(`O n° é ${nr}`)    
}



console.log(soma);
// Verificando se um elemento existe em um array usando includes()

let vog = ['a','e', 'i', 'o', 'u'];
let con = ['b','c', 'd', 'f', 'g','h','j', 'k', 'l', 'm','n','p', 'q', 'r', 's','t','v', 'w', 'x', 'y','z']
let num = ['1','2', '3', '4', '5','6','7', '8', '9'];

let letraVerif = prompt('Digite uma letra: ');
if (vogais.includes(letraVerif.toLowerCase())){
    console.log(`A letra ${letraVerif} é uma vogal`);
}else if  (consoantes.includes(letraVerif.toLowerCase())){
    console.log(`A letra ${letraVerif} é uma consoante`);
}else if  (num.includes(letraVerif.toLowerCase())){
    console.log(`A letra ${letraVerif} é um n°`);

}else {
    console.log(`A letra ${letraVerif}não é uma letra, nem n°`);
}

// obtendo a posição de um item em um array usando o for of e a função entries ()
//         posição   0       1          2        3
let listaFrutas = ['Maçã','Banana', 'Abacaxi', 'Uva'];
for (const [pos,fruta] of listaFrutas.entries()){
    console.log(`A fruta da posição${pos} é ${fruta}`)
}

let produtos = 'celular, notebook, TV, tablet, monitor';
let listaProdutos = produtos.split(',');
console.log(produtos);
console.log(listaProdutos);


//Strings são lista (vetores/ arrays) de caracteres
//            01234
let escola = 'SENAI'; //['S', 'E', 'N', 'A', 'I']
console.log(escola[0]); //S
//Utilizando o for of exibir a palavra da seguinte forma:
//S
//E
//N
//A
//I

for (let letra of escola){
    console.log(letra)
}