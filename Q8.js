const prompt = require("prompt-sync")()

var nome = prompt("Digite seu nome completo: ")

lista = nome.split(" ")

sobrenome = lista[lista.length - 1]

lista.pop()

console.log(sobrenome, ",", lista.join(" "))
