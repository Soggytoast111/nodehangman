var Letter = require("./letter")

var testWord = "beetlejuice"

var splitWord = testWord.split("")
var keyPress = "j"

function createLetters(splitWord){
    for (i=0; i<splitWord.length;i++){
        var letterFunction = Letter(splitWord[i, false])
        letters.push(letterFunction)
    }
    return letterFunction
}

function Word(letters){
    this.letters = letters,
    this.printWord = function(){
        var typeString = []
        for (i=0; i<this.letters; i++){
            typeString.push(this.letters[i].returnLetter())
            typeString = typeString.join("")
        }
        return typeString
    }
    this.guess = function(guessedLetter){
        for (i=0; i<this.letters.length; i++){
            this.letters[i].returnLetter(keypress)
            this.letters[i].setGuessed(keypress)
        }

    }
}



console.log(splitWord)

Word(createLetters(splitWord))