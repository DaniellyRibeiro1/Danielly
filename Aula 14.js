function Linha (){
    console.log('-*-*-*-*-*')
}

//Função sem parâmetros e sem retorno
function Cabecalho (){
    
Linha();
console.log('SESI / SENAI');
Linha ();
}
Cabecalho ();

//





CabecalhoEscola('USP');
CabecalhoEscola('SESI');

function Soma (nr1, nr2){
    let resultado = nr1 + nr2;
    console.log (resultado);
}

Soma (5, 8);
Soma(123321, 567765);

//Função com parâmetros e retorno
function Media (n1, n2){
    let resultado = (n1 + n2) / 2;
  return resultado;
}

let valor = Media(5, 8);
