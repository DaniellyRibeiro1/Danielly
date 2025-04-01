//Variáveis Compostas / Vetores / Arrays

//Variável simples, cabe apenas 1 dado por vez
let fruta = 'Maçã';
fruta = 'Banana';

//Variável composta, cabe mais de 1 dado
let frutas = ["Maçã", "Banana", "Abacaxi", "Uva"]

console.log(frutas);
console.log(frutas[1]);

//Declarando uma lista vazia
let listaVazia = [];

//Declaração de uma lista de números
let numeros = [1,2,8,5, 9];

//Declaração de uma lista de strings
let nomes = ['Ana', 'João', 'Maria'];

//Declração de uma lista mista
let listaMista = [4, 'feijão', true, 7.55];
let listaDeVetores = [[], []]
console.log(listaDeVetores[0],[1]);



console.log(frutas);
//alterando o conteúdo de um item da lista
frutas[3] = 'Melancia';
console.log(frutas);

//Inserindo um novo item na lista
//frutas [4]= 'laranja';
frutas.push('Laranja'); //utilizando o método push
futas =[...frutas, 'Laranja']; //utilizando o operador spread

//Inserindo um novo item em posição específica
fruta.splice(2,0, 'Morango');
//  2 - posição
//  0 - quantidade de itens a serem removidos

//Excluindo item da lista 
frutas.splice(3, 1);
// 3- posição
// 1- quantidade de itens a serem removidos
frutas.shift(); //remove o primeiro
frutas.pop();//remove o último
console.log(frutas);


frutas = ['Maçã', 'Banana', 'Morango', 'Abacaxi', 'Melancia', 'Laranja', 'Uva' ];
console.log(frutas[4]);//posição específica
console.log(frutas.slice(0,4));//Da posição 0 pegar 4 itens
console.log(frutas.slice(1));//Da posição 1 até a última
console.log(frutas.slice(-1));//número de itens do fim pro início
console.log(frutas.lenght);//total de itens da lista


frutas = ['Maçã', 'Banana', 'Morango', 'Abacaxi', 'Melancia', 'Laranja', 'Uva' ];
frutas.short()//Ordenando a lista em ordem crescente 
console.log(frutas);
frutas.reverse()//Ordenando a lista em ordem decrescente 
console.log(frutas);

