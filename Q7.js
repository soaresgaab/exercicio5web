const prompt = require("prompt-sync")()

var frase = prompt("Digite uma frase: ")

espaco = frase.split(" ").join("")

let resultado = frase.length - espaco.length

console.log(resultado)
