//Modo de exibir muitas variáveis de forma legível e simples

//NESSE PRIMEIRO EXEMPLO CONCATENAMOS COM O OPERADOR +, O QUE FICOU UM POUCO TRABALHOSO.

const  nome= "Anottsu", idade = 2023 - 1988, naturalidade = "Otawa"

console.log("o meu nome é",nome,"tenho",idade, "anos e nasci em",naturalidade);


//                              USANDO TEMPLATE STRING
// observações: usamos Crase no lugar de aspas duplas ou simples, também usamos a sintaxe ${} para colocarmos as variáveis dentro

console.log(`Olá o meu nome é ${nome} tenho ${idade} anos e nasci em ${naturalidade}`);

