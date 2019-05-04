var revealedLetters = 0

function Letter(l, guessed){
    this.l = l
    this.guessed = guessed
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
            console.log("new test on revealed letters:  " + revealedLetters)
            revealedLetters = revealedLetters + 1
            this.guessed = true
        }
        return revealedLetters
    }
    this.initialize = function(){
        revealedLetters = 0
    }
}

module.exports = Letter