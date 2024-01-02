// EXPRESSOES SAO FORMAS ABREVIADAS DE ESCREVER FUNÇÕES, PORÉM DEVEMOS PERCEBER ALGUMAS DIFERENÇAS ENTRE EXPRESSÕES E FUNÇÕES

//FUNÇÃO - NESSE CASO ESTOU CHAMANDO A FUNÇÃO ANTES DE DECLARÁ-LA POIS O JS PERMITE FAZER ISSO EM FUNÇÕES  E DECLARAÇÕES DE VÁRIAVEIS DO TIPO VAR. ISSO É CHAMADO DE HOISTING(BASICAMENTE ELE LÊ TODO O CODIGO E PROCURA FUNÇÕES E VARS EXECUTANDO-AS PRIMEIRO)

console.log(myFunction(1,2)) //saída 3

function myFunction(x,y) // PASSAGEM DE PARÂMETROS
{
    return x + y; // calculo
}

//EXIBINDO UMA VÁRIAVEL DO TIPO VAR ANTES DE DECLARÁ-LA
console.log(nome);
var nome ="anottsu"; // saída ficou como undefined????? Entender o por que. ?????

 console.log("______________________________________________________________________________")

// EXPRESSÕES - DE FORMA PRÁTICA PODEMOS DECLARÁ-LAS EM UMA LINHA, MAS NÃO PODEMOS CHAMÁ-LAS ANTES DA DECLARAÇÃO CONFORME FIZEMOS COM A FUNÇÃO myFunction() acima

const soma = function(x,y){return x + y;}
console.log(soma(5,5)) // saída 10
