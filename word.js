var Letter = require("./letter")

var testWord = "beetlejuice"

var splitWord = testWord.split("")
var trueLetter= []

function createLetters(splitWord){
    for (i=0; i<splitWord.length;i++){
        var letterFunction = Letter(splitWord[i, false])
        letters.push(letterFunction)
    }

}

function Word(letters, printWord, guessLetter){
    this.letters = letters,
    this.printWord = function{
        var typeString = []
        for (i=0; i<this.letters; i++){
            typeString.push(this.letters.returnLetter(input))
        }

    }

    


}



console.log(splitWord)