// Dice

var rollDice = function() {
  return Math.floor(Math.random() * 6) + 1;
}

// PLayer tracker
var turnNumber = 1;

var displayPlayerFunction = function(turnNumber) {
  if (turnNumber % 2 !== 0) {
    var displayCurrentPlayer = "Player 1's";
  } else {
    var displayCurrentPlayer = "Player 2's";
  };
  return displayCurrentPlayer;
};


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
};

Player.prototype.roll1 = function() {
  this.score = 0;
  turnNumber ++;
};

Player.prototype.victory = function() {
  if ((this.total + this.score) >= 20){
    $('.victory').show();
  }
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
      if (newRoll !== 1) {
        player1.updateCurrentScore(newRoll);
        $("#display-dice").text(newRoll);
        player1.victory();
      } else {
        player1.roll1();
        $("#display-dice").text(newRoll);
      }
    } else if (turnNumber % 2 == 0) {
      if (newRoll !== 1) {
        player2.updateCurrentScore(newRoll);
        $("#display-dice").text(newRoll);
        player2.victory();

      } else {
        player2.roll1();
        $("#display-dice").text(newRoll);
      }
    } else {
      console.log('something broke');
    };
    console.log(newRoll);
    console.log(player1);
    console.log(player2);
    $('#current-player').html(displayPlayerFunction(turnNumber));
  });


  $("#end-turn").click(function(event){
    event.preventDefault();
    $("#display-dice").text("");
    if (turnNumber % 2 !== 0) {
      player1.endTurn();
    } else if (turnNumber % 2 == 0) {
      player2.endTurn();
    } else {
      console.log('something broke');
    };
    $('#current-player').html(displayPlayerFunction(turnNumber));
  });
});



/// click endTurn
// user clicks end turn -> endTurn -> display grand total
// user rolls 1 -> roll1 -> endTurn -> display grand total
