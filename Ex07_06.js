const prompt = require('prompt- sync')();
let palavra= prompt('Digite a palavra: ')
let vogais= ['a','e','i','o','u']
let nrvogais=0
for (const vogais of palavra){
    if(vogais.includes(p.toLowerCase())){
        nrvogais++
    }
}
console.log(`a palavra ${palavra}tem ${nrvogais}vogais`)