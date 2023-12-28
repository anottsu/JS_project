// // RangeError: Quando o código recebe um dado do tipo certo, porém não dentro do formato aceitável. Por exemplo, um processamento que só pode ser feito com números inteiros maiores ou iguais a zero, mas recebe -1.

// // ReferenceError: Normalmente ocorre quando o código tenta acessar algo que não existe, como uma variável que não foi definida; muitas vezes é causado por erros de digitação ou confusão nos nomes utilizados, mas também pode indicar um erro no programa.

// // SyntaxError: Na maior parte dos casos ocorre quando há erros no programa e o JavaScript não consegue executá-lo. Os erros podem ser métodos ou propriedades escritos ou utilizados de forma incorreta, por exemplo, operadores ou sinais gráficos com elementos a menos, como esquecer de fechar chaves ou colchetes.

// // TypeError: Indica que o código esperava receber um dado de um determinado tipo, tal qual uma string de texto, mas recebeu outro, como um número, booleano ou null.

// // pagina do node de erros https://nodejs.org/api/errors.html#errors_errors


// //                              USANDO O MÉTODO CONSOLE

// //PODEMOS USAR O COMANDO console.error("Deu erro!") para tratamento de erros. 

// Entre os outros métodos, existem:

//     console.error() para exibir mensagens de erro;
//     console.table() para visualizar de forma mais organizada informações tabulares;
//     console.time() e console.timeEnd() para temporizar período que uma operação de código leva para ser iniciada e concluída;
//     console.trace() para exibir a stacktrace de todos os pontos (ou seja, os arquivos chamados) por onde o código executado passou durante a execução.

//pagina do node sobre o console   https://nodejs.org/api/console.html

// console.log("deu erro");
// console.error("deu erro");

console.log("deu erro"); 
console.error(new Error("Erro detalhado leia de baixo para cima"));