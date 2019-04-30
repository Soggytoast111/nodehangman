function Letter(l, guessed, returnLetter, setGuessed){
    this.l = l
    this.guessed = guessed
    this.returnLetter = function(input){
        if (input == this.l){
            return this.l
        }
        else {
            return "_"
        }
    }
    this.setGuessed = function(input){
        if (input == this.l){
            this.guessed = true
        }
    }
}

module.exports = Letter