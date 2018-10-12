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
var wordObj = {}
var lettersGuessed = []

var getRandomWord = function() {
    randomWord = wordsArr[Math.floor(Math.random()* wordsArr.length)];
    wordObj = new Word(randomWord);
    console.log(wordObj.getWord())
}

var resetGame = function(){
    numGuesses = 10
    lettersGuessed = [];

    //toDO ask user if they want to play again.
    //if yes, call runGame()
}

var getInput = function(){
   
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Enter a letter.",
            validate: function(value){
                //validate input before "then" so user can be prompted for valid input

                if (value.length != 1){
                    return "\nPlease enter 1 character."
                } 
            
                if (!value.match(/^[a-zA-Z]+$/)){
                    return "\nCharacter must be a letter."
                }

                if (lettersGuessed.includes(value)){
                    return "\nLetter has already been guessed."
                }
                
                return true;
            }
        }
    ]).then(function(data) {
        //Decrease the amount of guesses left
        numGuesses--
        
        //Get current guess from data object and make sure it's always lower case
        var currentGuess = data.guess.toLowerCase()

        //store the current guess for future validation
        lettersGuessed.push(currentGuess)

        //Check to see if guess is in the word
        wordObj.checkGuess(currentGuess);

        //check to see if won
        if (wordObj.isSolved) {
            console.log("You won!")  
            resetGame()  
        } else {
            //recursion, call function again until out of guesses
            if (numGuesses){
                getInput();
            } else {
                //game over - ran out of guesses - lost the game
                console.log("You lost!")
                resetGame()
            }
        }
    })

        
    
}

var runGame = function() {
    console.log("Welcome to 90's Artist Word Guess Game!")
    //Randomly selects a word and uses the `Word` constructor to store it
    getRandomWord();

    //Prompts the user for each guess and keeps track of the user's remaining guesses
    //This function uses recursion and will call itself until user wins or until numGuesses = 0
    getInput();
}


runGame()