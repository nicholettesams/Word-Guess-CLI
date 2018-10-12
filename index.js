var Word = require("./Word");
var inquirer = require('inquirer');

var wordsArr = ["fugees", "jewel", "chumbawamba", "envogue",  
                "nirvana", "radiohead", "oasis", "outkast", 
                "tlc", "nsync", "weezer"]

var randomWord = "";
var numGuesses = 10;
var wordObj = {}
var lettersGuessed = []

var getRandomWord = function() {
    randomWord = wordsArr[Math.floor(Math.random()* wordsArr.length)];
    wordObj = new Word(randomWord);
    console.log(wordObj.showWord())
}

var resetGame = function(){
    numGuesses = 10
    lettersGuessed = [];

    //Ask user if they want to play again.
    inquirer.prompt([
        {
            type: "confirm",
            name: "playAgain",
            message: "Do you want to play another game?"
        }
    ]).then(function(data){
        if (data.playAgain){
            runGame()
        }
    })
}

var getInput = function(){
   
    inquirer.prompt([
        {
            type: "input",
            name: "guess",
            message: "Enter a letter:",
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
       
        //Get current guess from data object and make sure it's always lower case
        var currentGuess = data.guess.toLowerCase()

        //store the current guess for future validation
        lettersGuessed.push(currentGuess)

        var beforeGuess = wordObj.showWord()

        //Check to see if guess is in the word
        wordObj.checkGuess(currentGuess);

        var afterGuess = wordObj.showWord()

        //Decrease the amount of guesses left if the guess was wrong
        if (beforeGuess === afterGuess){
            numGuesses--
            console.log("Lives remaining: " + numGuesses)
        } 

        //show word with guesses to user
        console.log(afterGuess)
    
        //check to see if won
        if (wordObj.isSolved()) {
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