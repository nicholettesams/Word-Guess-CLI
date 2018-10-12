var Letter = require("./Letter");

var Word = function(word){
    this.letters = []
    
   
    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    for (var i = 0; i < word.length; i++){
        var newLetter = new Letter(word[i])
        this.letters.push(newLetter)
    }

    this.checkGuess = function(guess){
        //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
        for (var i = 0; i < this.letters.length; i++){
            this.letters[i].updateGuessed(guess)
        }
    }
    this.showWord = function(){
        //clear each time or else it will append
        this.output = []
        for (var i = 0; i < this.letters.length; i++) {
            this.output.push(this.letters[i].getCharacter())
        }
        return this.output.join(" ")
    }
    this.isSolved = function(){

        for (var i = 0; i < this.letters.length; i++) {
            if (!this.letters[i].isGuessed){
                //if any of the letter has not been guesses, then return false and exit out of this function
                return false;
            }
        }
        //should only get to this line if all letters were guessed
        return true;
    }
}

module.exports = Word;