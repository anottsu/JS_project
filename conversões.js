//IMPLICITA E EXPLICITA

//IMPLICITA converte automaticamente sem que percebamos conforme o exemplo abaixo
let x = 32;
let y = '32';

console.log(x == y)// comparação somente de valores vai retornar TRUE
// ele compara os valores guardados que são iguais

console.log(x === y)// comparação de  valores e tipos vai retornar FALSE
// ele compara os valores guardados que são iguais e o tipo de variavel que é diferente
//por isso da false

//EXPLICITA
//É necessário deixar explícito para JS o que queremos

console.log(x+y); // Aqui ele vai entender como concatenação trazendo o resultado 3232
// Usando a função Number() e String() deixamos explicito que queremos converter para um dos tipos
console.log(x+Number(y));// Convertemos a string para numero explicitamente com a função
//Resultado 64