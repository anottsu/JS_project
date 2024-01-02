//FUNÇÕES SÃO PEQUENOS TRECHOS DE CODIGOS QUE PODEM SER REUTILIZADOS E IMPLEMENTADOS DE FORMA PRÁTICA

let frase = "um novo dia";
let saudacao = "ohayo";
let  b = 2, h = 3;

function exibeTexto(texto){ // podemos passar um parâmetro qualquer ele irá interpretar o valor do parâmetro quando for CHAMADA A FUNÇÃO ---> console.log(exibeTexto(frase));  o valor de FRASE irá pra TEXTO.
 
texto = "uma nova noite"; // podemos modificar o valor do parâmetro e retorna-lo para fora da função
return texto; // saida: será a variavel alterada na função: "UMA NOVA NOITE"
}

console.log(exibeTexto(frase),"Original:",frase); // saída: "UMA NOVA NOITE" /ORIGINAL: "UM NOVO DIA"

//REUTILIZANDO A MESMA FUNÇÃO MAS USANDO A VAR SAUDAÇÃO COMO PARÂMETRO
console.log(exibeTexto(saudacao)); // saída: "OHAYO" / "UMA NOVA NOITE"

console.log("___________________________________________________________________________");

                    // SOMANDO NÚMEROS EM UMA FUNÇÃO PASSANDO PARÂMETROS

function calculaAreaTriangulo(b,h){ // aqui passamos os parametros b,h, portanto quando modificarmos para 10 e 100,conforme o codigo abaixo, será nas variaveis locais(b e h assumem o valor de 10 e 100 localmente) porém se imprimirmos depois as variaveis globais elas terão os valores inicias de 2 e 3 para b e h.

    b = 10, h = 100; // modificamos os valores localmente
    console.log(` os valores locais de b é ${b} e de h é ${h} `) // saída: 10 e 100
    area = (b * h)/2; // calculo sobre as variaveis locais
    return area; // retorno do resultado 
}
calculaAreaTriangulo(b,h);// CHAMANDO A FUNÇÃO
 let resultado = area; // armazenando o return area em uma var resultado

console.log(`a area do triangulo calculada sobre as variaveis locais é :${resultado}, o valor global de b é ${b} e de h é ${h}`); // //saida 500 b = 2 e h = 3

console.log("___________________________________________________________________________");

// SE NÃO PASSARMOS PARÂMETRO ALGUM NA CRIAÇÃO DA FUNÇÃO E PRECISARMOS ALTERAR OS VALORES DENTRO DA MESMA PARA UM CALCULO POR EXEMPLO ELA MODIFICARÁ O VALOR DA VARIAVEL GLOBAL.

function calculaAreaQuadrado( ){// <-- NÃO PASSAMOS VARIAVEIS NENHUMA NESSA FUNÇÃO
    b = 10, h = 100; // modificando o valor de b e h 
    console.log(` os valores locais de b é ${b} e de h é ${h} `) // saída: 10 e 100
    area = (b * h)/2; // calculo sobre b e h modificada local
    return area; // retorno do resultado.
}
calculaAreaQuadrado(b,h) // CHAMANDO A FUNÇÃO 
resultado = area; // armazenando o return de area em resultado
console.log(`a area do quadrado calculada sobre as variaveis locais é :${resultado}, o valor global de b é ${b} e de h é ${h}`); //saida 500 b = 10 e h = 100 -->AQUI B E H DECLARADAS NO INICIO COMO 2 E 3 AGORA ASSUMEM O VALOR DE 10 E 100. POIS NAO PASSAMOS PARAMETRO ALGUM QUANDO CRIAMOS A FUNÇÃO, PORTANTO ELA UTILIZA E MODIFICA AS VARIAVEIS GLOBAIS.

console.log("___________________________________________________________________________");

//                  CHAMANDO UMA FUNÇÃO DENTRO DA OUTRA

function soma(x=1,y=1){ // FUNC SOMA COM 2 PARAMETROS INICIAMOS COM 1 POIS CASO SE NÃO PASSARMOS O 2  NA CHAMADA DA FUNÇÃO O MESMO INTERPRETA COMO VALOR 1 DECLARADO
    return x + y ;
}

function multiplica(x=1,y=1){ // FUNC MULTIPLICA  COM 2 PARAMETROS NICIAMOS COM 1 POIS CASO SE NÃO PASSARMOS O 2  NA CHAMADA DA FUNÇÃO O MESMO INTERPRETA COMO VALOR 1 DECLARADO
    return x * y;
}

console.log(multiplica(soma(1,0),soma(2,0))); // AQUI CHAMAMOS A FUNÇÃO SOMA DENTRO DA FUNÇÃO MULTIPLICA

console.log("___________________________________________________________________________");

//                  TRABALHANDO COM  FUNÇÕES PARA CASAS DECIMAIS E ARREDONDAMENTOS

// console.log(Math.round(result)); // arredonda o valor
// console.log(Math.ceil(result)); // arredonda o valor para CIMA
// console.log(Math.floor(result)); // arredonda o valor para BAIXO
//Math.trunc() : Desconsidera os números decimais, o que é conhecido como truncamento.
// Math.trunc(4.3) retorna 4
// Math.trunc(4.8) retorna 4



// Math.pow() : Faz a exponenciação de 2 números, quando for simples, como ao quadrado(2) ou cubo(3). Recomenda-se usar a multiplicação por ser mais rápido.

//     Math.pow(4 , 2) retorna 4^2 = 16
//     Math.pow(2.5 , 1.5) retorna 2.5^(3/2) = 3.9528 ...

// Math.sqrt() : Retorna a raiz quadrada de um número.

//     Math.sqrt(64) retorna 8

// Math.min(): Retorna o menor valor entre os argumentos.

//     Math.min(0, 150, 30, 20, -8, -200) retorna -200

// Math.max(): Retorna o maior valor entre os argumentos.

//     Math.max(0, 150, 30, 20, -8, -200) retorna 150

// Math.random(): Retorna um valor randômico (random em inglês) entre 0 e 1, então não teremos um valor esperado para receber.

//     Math.random() retorna 0.7456916270759015
//     Math.random() retorna 0.15449802102729304
//     Math.random() retorna 0.4214269561951203

//LINK PARA DOCUMENTAÇÃO PARA A FUNÇÃO MATH.()
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math#description

function comParametro(param) {
    console.log(param)
}
comParametro()
