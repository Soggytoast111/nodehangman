var revealedLetters = 0
var incorrectGuess = 0

function Letter(l, guessed){
    this.l = l
    this.guessed = guessed
    this.incorrectGuess = incorrectGuess
    this.returnLetter = function(){
        if (this.guessed){
            return this.l
        }
        else {
            return "_"
        }
    }
    this.setGuessed = function(input){
        if (input == this.l){
            revealedLetters = revealedLetters + 1
            this.guessed = true
        }
        else{
            this.incorrectGuess++
        }
        return revealedLetters
    }
    this.initialize = function(){
        revealedLetters = 0
        incorrectGuess = 0
    }
}

module.exports = Letter