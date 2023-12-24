//VALOR BOLEANO
let a=1, b=2;
const nome = "anottsu";
console.log("A e B tem valores iguais? ", a === b); // O VALOR BOLEANO RETORNA TRUE OR FALSE
//COMPARANDO OS VALORES PELO OPERADOR ===
//SE USARMOS == ELE IRÁ COMPARAR TRUE OR FALSE ASSUMINDO 0 TRUE E 1 FALSE
console.log(null == undefined); // true NESSE CASO ELE ENCARA OS DOIS COMO VAZIO
console.log(null === undefined); // false NESSE CASO ELE É MAIS ESPECIFICO DIFERENCIANDO

//NULL: VARIAVEL DECLARADA E INICIALIZADA MAS SEM VALOR. GOSTO DE PENSAR COMO VAZIO
//UNDEFINED: VARIAVEL DECLARADA MAS NÃO INICIALIZADA

console.log("_____________________________________________________________________ ");
//OPERADORES >= , <= OU == (MAIOR IGUAL, MENOR IGUAL OU IGUAL) PODEM SER APLICADOS TAMBÉM.
console.log("A é B maior ou igual a B? ", a >= b); // false 
console.log("A é B menor ou igual a B? ", a <= b); // true
console.log("A é B maior ou igual a B? ", a == b); // false


console.log(`O nome ${nome.replace(/\b\w/g, (nome)=> nome.toUpperCase())} possui ${nome.length} caracteres`);

