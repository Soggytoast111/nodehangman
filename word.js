var Letter = require("./letter")
//var revealedLetters = 0
var testWord = "beetlejuice"

var splitWord = testWord.split("")
var keyPress = "j"
var letters = []

function createLetters(splitWord){
    for (i=0; i<splitWord.length;i++){
        var letterFunction = new Letter(splitWord[i], false)
        letters.push(letterFunction)
    }
    return letters
}

function Word(letters, solved){
    this.letters = letters,
    this.solved = solved,
    this.printWord = function(){
        var typeString = []
        for (i=0; i<this.letters.length; i++){
            typeString.push(this.letters[i].returnLetter())
        }
        typeString = typeString.join("")
        console.log(typeString)
        return typeString
    }
    this.guess = function(keypress){
        for (i=0; i<this.letters.length; i++){
            this.letters[i].returnLetter(keypress)
            this.letters[i].setGuessed(keypress)
        }

    }
}




//var wordVar = createLetters(splitWord)

//var wordConstruct = new Word(wordVar)

//wordConstruct.printWord()
//wordConstruct.guess(keyPress)
//wordConstruct.printWord()
//wordConstruct.guess("r")
//wordConstruct.printWord()
//wordConstruct.guess("e")
//wordConstruct.printWord()
//wordConstruct.guess("c")
//wordConstruct.printWord()

module.exports = {
    createLetters: createLetters,
    Word: Word
}
