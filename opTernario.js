            // OPERADOR TERNÁRIO é um modo de abreviar um bloco de if com um else

let idadeMin = 18;
let idade = 22;

if (idade <= idadeMin){
    console.log("Você não pode conduzir um veículo");
}

else{console.log("***Você pode conduzir um veículo***");
}

                        //USANDO  O OPERADOR TERNÁRIO

idadeMin= 20
//              condição   verificador         saídas
console.log(idade  > idadeMin && idade < 30 ? "na faixa etária de 20 a 30" : "***fora da faixa etária***" );

// Podemos ainda simular um comportamento semelhante ao else if encadeando múltiplos operadores ternários. PORÉM NÃO É RECOMENDADO POR DIFICULTAR A COMPREENSÃO DO CÓDIGO.

let numero = 10;
let resultado = (numero > 0) ? "Maior que zero" : (numero < 0) ? "Menor que zero" : "É zero";

console.log(resultado); // Saída: Maior que zero
