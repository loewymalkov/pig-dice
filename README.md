# PIG DICE

Interactive pig dice game

### USE/SET-UP

_Open up the index in a web browser_

### HOW TO PLAY

The object of the game is to accumulate 100 points. The number displayed in the white box at the center is the last roll of the dice. You can keep accumulating your score by hitting role again, or store your current streak in the stack. If you roll a 1, you will loose your current streak.
Player 1 always starts. You can use either roll button (at bottom of each player stats sections) to roll the dice. The current player is displayed at the bottom. When either player reaches 100, the game will display the victor at the bottom of the screen. 

### KNOWN BUGS

Game does not reset itself after victory condition (100 points) is met, must manual refresh the page.

### SPEC SHEET

| Behavior |  Input | Output |
|:----:|:----:|:----:|
| will reset game score count when prompted |(click event) - "Start New Game"| (refresh page) |
| will randomly generate a number between 1-6 | (click event) - "Roll!" | 5 |
| will add all numbers rolled in a single turn | 5, 6 | 11 |
| will add current turn points to grand total points if turn manually ended | 4 (currentPoints) | 30 (grandTotal) |
| will end turn when player uses button to do so, and switch to next player input | (click event) - "End turn" | next player turn, add totals, change player info display |
| will end turn and set currentPoints to 0 if user rolls a 1 | 1 | 0 (currentPoints) + 30 (grandTotal) |
| will declare a winner if a user scores 100 points or more | 102 | congrats |

## AUTHOR

_Brendon Tse and Loewy Malkovich_
loewymalkov@gmail.com

## LICENSE

_Licensed under the MIT license_
