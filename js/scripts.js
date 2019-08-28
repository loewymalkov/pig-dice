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

// next two methods should be combined, w/ this following code in the jQuery front end calls
// player1.displayCurrent($("#player-1-current"))
// player1.displayTotal($("player-1-total"));
// player2.displayCurrent($("#player-2-current"))
// player2.displayTotal($("player-2-total"));
Player.prototype.displayCurrent = function(outputCurrent) {
  outputCurrent.text(this.score);
};

Player.prototype.displayTotal = function(outputTotal) {
outputTotal.text(this.total);
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

Player.prototype.victory = function() {
  if ((this.total + this.score) >= 100){
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
    // call for display needs to be condensed
    $("#player-1-current").text(player1.score);
    $("#player-1-total").text(player1.total);
    $("#player-2-current").text(player2.score);
    $("#player-2-total").text(player2.total);
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
    // needs to be condensed
    $("#player-1-current").text(player1.score);
    $("#player-1-total").text(player1.total);
    $("#player-2-current").text(player2.score);
    $("#player-2-total").text(player2.total);
  });
  // may not be necessary
  $("#player-1-current").text(player1.score);
  $("#player-1-total").text(player1.total);
  $("#player-2-current").text(player2.score);
  $("#player-2-total").text(player2.total);



});



/// click endTurn
// user clicks end turn -> endTurn -> display grand total
// user rolls 1 -> roll1 -> endTurn -> display grand total
