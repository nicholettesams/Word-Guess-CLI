# Word-Guess-CLI
Command line word guess game

## Assignment
Create a Word Guess command-line game using constructor functions.

## Solution
A Letter constructor was created to contain properties for each Letter in a word (character and if it has been guessed). It also contains methods to get the isGuessed property and to return the letter or underscore ("_") based on if the letter has been guessed.  The Word constructor requires the Letter constructor.  It contains an array of Letter objects, and methods such as checkGuess (checks to see if user's guess is in the word), showWord(shows the letters or underscores for the word), and isSolved (checks is all isGuessed properties are true).  The index.js file requires the Word constructor and contains the game play logic.

## Technologies
Node.js, inquire NPM module

## How to Play
In the command line type "npm run start".

The game only contains single word answers.  The user will be presented with a "blank" word made up of all underscores.  The user guesses one letter at a time.  After each guess, the guessed letter will either be revealed in the word or the number of lives remaining will decrease.  You start with a total of 10 lives at the beginning of each game.  If you run out of lives before you guess the word, you lose.  If you guess the word, you win!  
