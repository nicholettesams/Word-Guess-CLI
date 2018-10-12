var Letter = require("./Letter");

var Word = function(word){
    this.letters = []
    this.output = []
   
    //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
    for (var i = 0; i < word.length; i++){
        var newLetter = new Letter(wordArr[i])
        this.letters.push(newLetter)
    }

    this.checkGuess = function(guess){
        //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
        for (var i = 0; i < this.letters.length; i++){
            this.letters[i].updateGuessed(guess)
        }
    }
    this.showWord = function(){
        for (i = 0; i < this.letters.length; i++) {
            this.output.push(this.letters[i].getCharacter())
        }
        console.log(this.output.join(" "))
    }
    this.isSolved = function(){
        for (i = 0; i < this.letters.length; i++) {
            if (!letters[i].isGuessed){
                return false;
            }
        }
        return true;
    }
}

module.exports = Word;