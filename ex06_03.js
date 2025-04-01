
let comidas = [];
for (let x = 1; x <= 6; x++){
   let comida = prompt('Digite uma comida: ');
   comidas.push(comida);
}

console.log(comidas[0]);

console.log(comidas[4]);
//alterando item da lista
comidas[6] = 'rapunzel';
console.log(comidas);
//inserindo no final da lista
fruta.push('Frozen');
comidas = [...comidas,'meu primeiro amor']
console.log(comidas);
//inserindo na posição 5
fruta.splice(5,0, 'branca de neve');
console.log(comidas);
//excluindo primeiro item da lista
comidas.shift();
console.log(comidas);
//excluindo o último item da lista
comidas.splice(-1, 1);
comidas.pop();
console.log(comidas);
//exibindo os 3 primeiros itens
console.log(comidas.slice(0,3));
//exibindoos 4 últimos itens
console.log(comidas.slice(-4));
//exibindo o tamanho da lista
console.log(comidas.lenght)
//invertendo a ordem
comidas.reverse();



