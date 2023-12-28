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

console.log(x + y); // Aqui ele vai entender como concatenação trazendo o resultado 3232
// Usando a função Number() e String()/toString() deixamos explicito que queremos converter para um dos tipos
console.log(x+Number(y));// Convertemos a string para numero explicitamente com a função
//Resultado 64
// podemos também usar o operador + antes de uma string para convertermos o mesmo para number
console.log(x+ +y) // resultado 64 
console.log(x- +y)// resultado 0 

x = true;
y = false;

console.log(+x)// transforma true em numero que seria o 1
console.log(+y)// transforma false em numero que seria o 0
