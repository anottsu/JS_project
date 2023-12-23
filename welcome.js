const date = new Date();
console.log(date.toLocaleString('pt-BR',{weekday:"long",year:"numeric",month:"long",day:"numeric"}));
//teste
console.log("BEM VINDO USER.")
console.log(date.toLocaleDateString('pt-BR',{weekday:"long",day:"numeric",month:"numeric",year:"numeric"}));