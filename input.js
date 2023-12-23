// PROCESSO PARA SOLICITAR UM INPUT NO JAVASCRIPT

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// DATA 
const date = new Date();
console.log(date.toLocaleString('pt-BR',{weekday:"long",year:"numeric",month:"long",day:"numeric"}));

//AQUI CONVERTEMOS A PRIMEIRA LETRA PARA MAIUSCULO
rl.question('Qual o seu nome? : ', (input) => {
  console.log(`Bem vindo: ${input.replace(/\b\w/g, (input)=>input.toUpperCase())}`);
  rl.close();
});



