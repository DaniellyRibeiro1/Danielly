let filmes = ['rapunzel','a cinco passos de voce', 'como eu era antes de voce', 'titanic', 'depois do universo','atraves da minha janela', 'nos vemos em venus'] ;

console.log(filmes)[0];

console.log(filmes)[4];

filmes[6] = 'rapunzel';
console.log(filmes);
//inserindo no final da lista
fruta.push('Frozen');
filmes = [...filmes,'meu primeiro amor']
console.log(filmes);
//inserindo na posição 5
fruta.splice(5,0, 'branca de neve');
console.log(filmes);
//excluindo primeiro item da lista
filmes.shift();
console.log(filmes);
//excluindo o último item da lista
filmes.splice(-1, 1);
filmes.pop();
console.log(filmes);
//exibindo os 3 primeiros itens
console.log(filmes.slice(0,3));
//exibindoos 4 últimos itens
console.log(filmes.slice(-4));
//exibindo o tamanho da lista
console.log(filmes.lenght)
//invertendo a ordem
filmes.reverse();



