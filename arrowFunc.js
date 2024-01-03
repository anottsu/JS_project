// FUNÇÃO DECLARADA
function soma(x,y){
    return x+y;
}
console.log(soma(1,2)); // saída 3


// EXPRESSIONS
const soma2 = function (x,y){return x+y;}
console.log(soma2(3,2)); //saída 5

//ARROW FUNCTION
const var1 = variavel => `minha variavel é ${variavel}`; // USANDO 1 PARÂMETRO
console.log(var1("string"));

const soma3 = (x,y) => {return x + y;} // USANDO DOIS PARÂMETROS
console.log(soma3(3,3));

const calculaResto = (x,y) => {
    if(x-y < 0){ 
        console.log(" valor negativo");
        return x-y;
    }

    else if(x-y == 0){
        console.log(" valor 0");
        return x-y;
    }

    else {
        console.log(" valor positivo");
        return x-y;
    }
}
console.log(calculaResto(5,3));
console.log(calculaResto(5,5));
console.log(calculaResto(5,9));
