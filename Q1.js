prompt = require("prompt-sync")()

let altura = prompt("Digite sua altura: ");
let peso = prompt("Digite seu peso: ");

let imc = peso/(Math.pow(altura, 2));

console.log("Seu IMC é", imc.toFixed(1));