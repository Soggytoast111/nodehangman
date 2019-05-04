var inquirer = require("inquirer");
var fs = require("fs")
var wordJS = require("./word.js")
var guessedLetter = ""
var wordConstruct    
var revealedLetters = 0
var usedLetter = []


startGame()

function startGame(){
fs.readFile("randomWord.txt", 'utf8', (err, data) => {
        if (err) throw err;
        data = data.split(",")

        var randomNumber = Math.floor(Math.random() * data.length);
        var selectedWord = data[randomNumber]
        console.log(selectedWord)

        var splitWord = selectedWord.split("")
        var wordVar = wordJS.createLetters(splitWord)
        
        wordConstruct = new wordJS.Word(wordVar, wordVar.length)
        
        wordConstruct.printWord()
        wordConstruct.letters[0].initialize()
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
    for (i=0; i<usedLetter.length;i++){
        if (usedLetter[i] == guessedLetter){
            console.log("You alredy guessed that letter!  Guess again!")
            promptLetter()
            return
        }
    }
    for (i=0; i<wordConstruct.letters.length; i++){
        revealedLetters = wordConstruct.letters[i].setGuessed(guessedLetter)
        
    }
    wordConstruct.printWord()
    usedLetter.push(guessedLetter)
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
            if (val.playAgain == "Yes"){
                
                wordConstruct = {}
                typeString = ""
                wordVar = {}
                letterFunction = {}
                letters = {}
                usedLetter = []
                revealedLetters = 0
                startGame()
            }
            else if (val.playAgain == "No"){
                console.log("Goodbye!")
            }
        })
    }
    else{
        promptLetter()
    }
}
}