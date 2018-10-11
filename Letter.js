var Letter = function(character){
    this.character = character;
    this.isGuessed = false;
    this.getCharacter = function(){
        if (this.isGuessed){
            return this.character
        } else {
            return "_"
        }
    }
    this.updateGuessed = function(guess){
        if (this.character===guess){
            this.isGuessed = true;
        }
    }
}

module.exports = Letter;