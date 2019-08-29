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
function Player(playerName) {
  this.score = 0;
  this.total = 0;
  this.name = playerName;
};

Player.prototype.updateCurrentScore = function(newRoll) {
  this.score += newRoll;
  return newRoll;
};

Player.prototype.displayTotal = function(outputCurrent, outputTotal) {
  outputCurrent.text(this.score);
  outputTotal.text(this.total);
};

Player.prototype.endTurn = function() {
  this.total += this.score;
  this.score = 0;
  turnNumber++;
};

Player.prototype.roll1 = function() {
  this.score = 0;
  turnNumber++;
};

Player.prototype.victory = function() {
  if ((this.total + this.score) >= 100) {
    $('.victory').show();
  }
};

// ui logic
var player1 = new Player("player1");
var player2 = new Player("player2");

// front end ui
$(document).ready(function() {

  $(".roll-dice").click(function(event) {
    event.preventDefault();
    var newRoll = rollDice();
    if (turnNumber % 2 !== 0) {
      if (newRoll !== 1) {
        player1.updateCurrentScore(newRoll);
        $("#display-dice-roll").text(newRoll);
        player1.victory();
      } else {
        player1.roll1();
        $("#display-dice-roll").text(newRoll);
      }
    } else if (turnNumber % 2 == 0) {
      if (newRoll !== 1) {
        player2.updateCurrentScore(newRoll);
        $("#display-dice-roll").text(newRoll);
        player2.victory();
      } else {
        player2.roll1();
        $("#display-dice-roll").text(newRoll);
      }
    } else {
      console.log('something broke');
    };
    $('#current-player').html(displayPlayerFunction(turnNumber));
    $('#display-winner').html(displayPlayerFunction(turnNumber))
    player1.displayTotal($("#player-1-current"), $("#player-1-total"));
    player2.displayTotal($("#player-2-current"), $("#player-2-total"));
  });

  $(".end-turn").click(function(event) {
    event.preventDefault();
    $("#display-dice-roll").text("-");
    if (turnNumber % 2 !== 0) {
      player1.endTurn();
    } else if (turnNumber % 2 == 0) {
      player2.endTurn();
    } else {
      console.log('something broke');
    };
    $('#current-player').html(displayPlayerFunction(turnNumber));
    player1.displayTotal($("#player-1-current"), $("#player-1-total"));
    player2.displayTotal($("#player-2-current"), $("#player-2-total"));

  });
});