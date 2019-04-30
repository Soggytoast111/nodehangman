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
            this.guessed = true
        }
    }
}

module.exports = Letter