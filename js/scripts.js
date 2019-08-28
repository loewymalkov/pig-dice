//  Player constructor and prototypes
function Player (playerName) {
  this.score = 0;
  this.total = 0;
  this.name = playerName;
};

Player.prototype.rollDice = function() {
  var newRoll = Math.floor(Math.random() * 6) + 1;
  this.score += newRoll;
  return newRoll;
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
};

// ui logic


(displayDice).text(newRoll);


// front end ui
$(document).ready(function() {
  var player1 = new Player(player1)
  $("#roll-dice").click(function(event) {
    event.preventDefault();
    player1.rollDice();
    console.log(newRoll)
    $("#displayDice").text(newRoll);
  });
});



/// click endTurn
// user clicks end turn -> endTurn -> display grand total
// user rolls 1 -> roll1 -> endTurn -> display grand total
