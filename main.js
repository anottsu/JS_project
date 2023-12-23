let a = 23, b=2678.5;     // a notação .5 equivale a 0.5
let result= b/a;
console.log(result);

//CITAÇÃO COM ASPAS SIMPLES ''
const myString = "anottsu haomaru"

//USANDO VAR NA OUTPUT
console.log(`Bem vindo ${myString}`); // passando uma var na output 
console.log(`${myString} says:'Olá Mundo'`); // citação com var na output

//PASSANDO PARA LETRAS  MAIUSCULAS E MINUSCULAS
console.log(myString.toUpperCase());    // todas em maiusculas
console.log(myString.toLowerCase());    // todas em minusculas
console.log(myString.replace(/\b\w/g, (char)=>char.toUpperCase()));// as primeiras letras em maiusculas
//                                  DETALHAMENTO

// myString.replace(...): replace() é um método de strings em JavaScript que substitui 
// parte de uma string por outra. No caso, estamos usando replace() em myString

// /\b\w/g: Esta é uma expressão regular:

// \b representa uma fronteira de palavra, indicando o início de uma palavra.
// \w corresponde a qualquer caractere alfanumérico ou sublinhado (equivalente a [a-zA-Z0-9_]).
// /g é a flag global que mencionamos anteriormente, fazendo com que a busca 
// seja feita em toda a string, não apenas na primeira ocorrência.

// (char) => char.toUpperCase(): Isso é uma função de callback passada para o replace().
// Para cada correspondência encontrada pela expressão regular, esta função é chamada com o caractere correspondente como argumento (char).
// O que ela faz é converter esse caractere para maiúscula usando toUpperCase().




//TRABALHANDO COM CASAS DECIMAIS E ARREDONDAMENTOS
// console.log(Math.round(result)); // arredonda o valor
// console.log(Math.ceil(result)); // arredonda o valor para CIMA
// console.log(Math.floor(result)); // arredonda o valor para BAIXO

console.log(result.toFixed(4)); // fixa as casas decimais em quantos numeros selecionar

console.log(result.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})); // transforma
//data,moeda e horario conforme a região pretendida
console.log(result.toLocaleString('pt-PT',{style:'currency',currency:'EUR'}));

console.log("-------------------------------------------");

//TRABALHANDO COM DATA
const date = new Date(); // aqui colocamos um tipo de data

console.log(date.getUTCHours(),"horas"); // retorna somente a hora atual.

console.log(date.toLocaleString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }));
// Saída: Terça-feira, 19 de dezembro de 2023 (data por extenso em Português Brasileiro)

//**** LISTAS OU ARRAYS ****

var lista=[15,13,2,99,12,16,54,1,34]; // criando uma lista em JS
console.log(lista.sort()); // usando lista.sort() podemos ordenar a lista, porém ele retorna os valores
//fora de ordem, isso porque ele segue a tabela UNICODE.

//ORDENANDO UMA LISTA COM UMA FUNÇÃO

// O sort recebe opcionalmente uma função de comparação que, dados dois valores, deve devolver um número inteiro:

//     Se for 0 indica que são iguais
//     Se for -1 indica que o primeiro valor é menor
//     Se for 1, o segundo é menor.

function ordenalista (x,y){if (x==y) return 0; if(x<y) return -1; else return 1};
console.log("usando a função de ordenação\n",lista.sort(ordenalista));

//PODEMOS SIMPLIFICAR USANDO UMA ARROW FUNCTION DO ES6

// Simplicando a implementação

// E, claro, podemos simplificar bastante esse código.

// É possível trocar a função nomeada pra ser anônima. E trocar os três IFs por uma conta simples: a - b.

// Repare que o resultado dessa conta é sempre 0 se forem iguais, -1 se a é menor e 1 se b é menor. Exatamente o que precisamos.

// Juntanto tudo isso com a sintaxe de arrow functions do ES6 para escrever menos código, podemos simplesmente fazer:
console.log("ordenando a lista com arrow functior\n",lista.sort((x,y)=> x-y));

