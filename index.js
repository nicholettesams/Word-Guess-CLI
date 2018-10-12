var Word = require("./Word");
var inquirer = require('inquirer');

var wordsArr = ["goo goo dolls", "bon jovi", "hootie and the blowfish", 
                "barenaked ladies", "fugees", "meredith brooks", 
                "jewel", "kris kross", "chumbawamba", "soul asylum", 
                "houe of pain","britney spears", "christina agulera", 
                "envogue", "janet jackson", "pearl jam", "alanis morissette", 
                "blind melon", "third eye blind", 
                "the offspring", "foo fighters", "nine inch nails", 
                "stone temple pilots", "vanilla ice", "savage garden", 
                "the verve", "nirvana", "radiohead", "mariah carey", 
                "puff daddy", "notorious big", "oasis", "outkast", 
                "green day", "tlc", "boys ii men", "backstreet boys", 
                "nsync", "ace of base", "weezer", "snoop dogg", "dr dre", 
                "ice cube", "beastie boys", "run dmc", "salt n pepa", 
                "naughty by nature", "digital underground"]

var randomWord = "";
var numGuesses = 10;
var word = {}

var getRandomWord = function() {
    randomWord = wordsArr[Math.floor(Math.random()* wordsArr.length)];
    word = new Word(randomWord);
    console.log(word.getWord())
}

var checkGuess = function(guess) {
    word.checkGuess(guess.toLowerCase());
}

var resetGame = function(){
    numGuesses = 10
}

var getInput = function(){
    if (numGuesses){
        inquirer.prompt([
            {
                type: "input",
                name: "guess",
                message: "Enter a letter.",
                validate: function(value){
                    if (value.length != 1){
                        return "\nPlease enter 1 character."
                    } else {
                        var pass = value.match(/^[a-zA-Z]+$/);
                        if (!pass){
                            return "\nCharacter must be a letter."
                        }
                    }
                    return true;
                }
            }
        ]).then(function(data) {
            numGuesses--
            checkGuess(data.guess);
            //recursion, call funciton again until game is over
            //TODO: check to see if won before guesses run out
            getInput();
        })
    } else {
        //game over - ran out of guesses - lost the game
        console.log("You lost!")
        resetGame()
    }
}

var runGame = function() {
    console.log("Welcome to 90's Artist Word Guess Game!")
    //Randomly selects a word and uses the `Word` constructor to store it
    getRandomWord();

    //Prompts the user for each guess and keeps track of the user's remaining guesses
    getInput();
}


runGame()