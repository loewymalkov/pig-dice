// Dice

var rollDice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// PLayer tracker
var turnNumber = 1;

// /  Player constructor and prototypes
function Player (playerName) {
  this.score = 0;
  this.total = 0;
  this.name = playerName;
};

Player.prototype.updateCurrentScore = function(newRoll) {
  this.score += newRoll;
  return newRoll;
};

Player.prototype.displayScores = function() {
  var currentScoreToDisplay = this.score.text();
  var grandTotalToDisplay = this.total.text();
};

Player.prototype.endTurn = function() {
   this.total += this.score;
   this.score = 0;
   turnNumber ++;
   return this.total;
};

Player.prototype.roll1 = function() {
  this.score = 0;
  turnNumber ++;
};

// ui logic
var player1 = new Player("player1");
var player2 = new Player("player2");

// (displayDice).text(newRoll);


// front end ui
$(document).ready(function() {


  $("#roll-dice").click(function(event) {
    event.preventDefault();
    var newRoll = rollDice();
    if (turnNumber % 2 !== 0) {
      player1.updateCurrentScore(newRoll);
      $("#displayDice").text(newRoll);
    } else if (turnNumber % 2 == 0){
      player2.updateCurrentScore(newRoll);
      $("#displayDice").text(newRoll);
    } else {
      console.log('something broke');
    };
    console.log(newRoll);
    console.log(player1);
    console.log(player2);
  });
});



/// click endTurn
// user clicks end turn -> endTurn -> display grand total
// user rolls 1 -> roll1 -> endTurn -> display grand total
