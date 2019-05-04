var inquirer = require("inquirer");
var fs = require("fs")
var wordJS = require("./word.js")
var guessedLetter = ""
var wordConstruct    
var revealedLetters = 0

fs.readFile("randomWord.txt", 'utf8', (err, data) => {
        if (err) throw err;
        data = data.split(",")

        var randomNumber = Math.floor(Math.random() * data.length);
        console.log(randomNumber)
        var selectedWord = data[randomNumber]
        console.log(selectedWord)

        var splitWord = selectedWord.split("")
        var wordVar = wordJS.createLetters(splitWord)
        wordConstruct = new wordJS.Word(wordVar, wordVar.length)

        wordConstruct.printWord()
        promptLetter()
        
    })

function promptLetter(){
    inquirer.prompt([
        {
        name: "guessedLetter",
        message: "What letter do you guess?"
        }
    ]).then(function(answer) {
        guessedLetter = (answer.guessedLetter);
        revealLetter()
    })
}

function revealLetter(){
    for (i=0; i<wordConstruct.letters.length; i++){
        revealedLetters = wordConstruct.letters[i].setGuessed(guessedLetter)
    }
    wordConstruct.printWord()
    checkSolved()
}

function checkSolved(){
    if (revealedLetters == wordConstruct.solved){
        console.log("You win!")
        inquirer.prompt([
            {
                type:  "list",
                name: "playAgain",
                message: "Would you like to play again?",
                choices: ["Yes", "No"],
                default: "Yes"
                }
        ]).then(function(val){
            console.log(val)
        })
    }
    else{
        promptLetter()
    }
}