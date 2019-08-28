//  Player constructor and prototypes

function Player (playerName) {
  this.score = 0;
  this.total = 0;
  this.name = playerName;
};

Player.prototype.rollDice = function(diceRoll) {
  this.score += diceRoll;
};

Player.protype.updateScores = function() {
  var currentScoreToDisplay = this.score.text();
  var grandTotalToDisplay = this.total.text();
};


Player.prototype.endTurn = function() {
   this.total += this.score;
   this.score = 0;
   return this.total
};

Player.prototype.roll1 = function() {
  this.score = 0;
}

/// click endTurn
user clicks end turn -> endTurn -> display grand total
user rolls 1 -> roll1 -> endTurn -> display grand total
