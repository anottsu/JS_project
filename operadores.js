//VALOR BOLEANO
let a=1, b=2;
const nome = "anottsu";
console.log("A e B tem valores iguais? ", a === b); // O VALOR BOLEANO RETORNA TRUE OR FALSE
//COMPARANDO OS VALORES PELO OPERADOR === (tipo e valor)
console.log(null === undefined); // false NESSE CASO ELE É MAIS ESPECIFICO POR TIPO E VALOR

//SE USARMOS == ELE IRÁ COMPARAR (somente valor) 0 FALSO E 1 VERDADEIRO (CHAMADOS DE TRUTHY OR FALSY)
console.log(null == undefined); // true NESSE CASO ELE ENCARA OS DOIS COMO VAZIO
console.log("" == false); // true NESSE CASO "" VAZIO É CONSIDERADO FALSO PARA O JS
console.log(0 == false); // true NESSE CASO 0 É CONSIDERADO FALSO PARA O JS]
console.log(1 == true); // true NESSE CASO 1  É CONSIDERADO true PARA O JS


//NULL: VARIAVEL DECLARADA E INICIALIZADA MAS SEM VALOR. GOSTO DE PENSAR COMO VAZIO
//UNDEFINED: VARIAVEL DECLARADA MAS NÃO INICIALIZADA

console.log("_____________________________________________________________________ ");

//OPERADORES >= , <= OU == (MAIOR IGUAL, MENOR IGUAL OU IGUAL) PODEM SER APLICADOS TAMBÉM.
console.log("A é B maior ou igual a B? ", a >= b); // false 
console.log("A é B menor ou igual a B? ", a <= b); // true
console.log("A é B maior ou igual a B? ", a == b); // false





