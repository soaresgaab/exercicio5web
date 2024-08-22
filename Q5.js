const prompt = require("prompt-sync")()

var a = prompt("Digite uma palavra: ")

var b = a.split("").reverse().join("")

if (a === b)  {
    console.log("A palavra é um palíndromo")
} else {
    console.log("A palavra não é um palíndromo")
}


