var Letter = require("./Letter");

var Word = function(wordArr){
    this.wordArr = wordArr.split("");
    this.letters = []
    this.getWord = function(){
        //A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.
        for (var i = 0; i < worrdArr.length; i++){
            var letter = new Letter(wordArr[i])
            this.letters.push(letter)
        }
    }
    this.checkGuess = function(guess){
        //A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
        for (var i = 0; i < this.letters.length; i++){
            this.letters[i].check(guess)
        }
    }
}

module.exports = Word;