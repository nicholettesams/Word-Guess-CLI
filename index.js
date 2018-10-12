var Word = require("./Word");
var inquirer = require('inquirer');

var wordsArr = ["goo goo dolls", "bon jovi", "hootie and the blowfish", 
                "barenaked ladies", "fugees", "meredith brooks", 
                "jewel", "kris kross", "chumbawamba", "soul asylum", 
                "houe of pain","britney spears", "christina agulera", 
                "envogue", "janet jackson", "pearl jam", "alanis morissette", 
                "matchbox 20", "blind melon", "third eye blind", 
                "the offspring", "foo fighters", "nine inch nails", 
                "stone temple pilots", "vanilla ice", "savage garden", 
                "the verve", "nirvana", "radiohead", "mariah carey", 
                "puff daddy", "notorious big", "oasis", "outkast", 
                "green day", "tlc", "boys ii men", "backstreet boys", 
                "nsync", "ace of base", "weezer", "snoop dogg", "dr dre", 
                "ice cube", "beastie boys", "run dmc", "salt n pepa", 
                "naughty by nature", "digital underground"]

var randomWord = "";

//Randomly selects a word and uses the `Word` constructor to store it
var getRandomWord = function() {
    randomWord = wordsArr[Math.floor(Math.random()* wordsArr.length)];
    word = new Word(randomWord);
}
//Prompts the user for each guess and keeps track of the user's remaining guesses