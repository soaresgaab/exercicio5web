prompt = require("prompt-sync")()

let raio = prompt("Digite o valor do raio em centimetros: ");

let vol = (4/3) * Math.PI * Math.pow(raio, 3);

console.log("Volume é aproximadamente:", vol.toFixed(2), "centimetros cubico");