var inquirer = require("inquirer");
var fs = require("fs")
var wordJS = require("./word.js")

fs.readFile("randomWord.txt", 'utf8', (err, data) => {
    if (err) throw err;
    data = data.split(",")

    var randomNumber = Math.floor(Math.random() * data.length);
    console.log(randomNumber)
    var selectedWord = data[randomNumber]
    console.log(selectedWord)

    var splitWord = selectedWord.split("")
    var wordVar = wordJS.createLetters(splitWord)
    var wordConstruct = new wordJS.Word(wordVar)

    wordConstruct.printWord()

    inquirer.prompt([
        {
        name: "guessedLetter",
        message: "What letter do you guess?"
        }
    ]).then(function(answer) {
        var guessedLetter = (answer.guessedLetter);
        console.log(guessedLetter)
    });
});