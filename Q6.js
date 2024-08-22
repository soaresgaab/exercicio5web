const prompt = require("prompt-sync")()

var palavra1 = prompt("Digite a primeira palavra: ")
var palavra2 = prompt("Digite a segunda palavra: ")

anagrama1 = palavra1.split("").sort().join("")
anagrama2 = palavra2.split("").sort().join("")

if (anagrama1 === anagrama2) {
    console.log("As palavras são anagramas")
} else {
    console.log("As palavras não são anagramas")
}


