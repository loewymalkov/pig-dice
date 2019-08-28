# PIG DICE

### USE/SET-UP

_Web Browser_

### SPEC SHEET

| Behavior |  Input | Output |
|:----:|:----:|:----:|
| will reset game score count when prompted |(click event) - "Start New Gane"| (refresh page) |
| will randomly generate a number between 1-6 | (click event) - "Roll!" | 5 |
| will end turn when player uses button to do so, and switch to next player input | (click event) - "End turn" | next player turn, add totals, change player info display |
| will add all numbers rolled in a single turn | 5, 6 | 11 |
| will add current turn points to grand total points if turn manually ended | 4 (currentPoints) | 30 (grandTotal) |
| will end turn and set currentPoints to 0 if user rolls a 1 | 1 | 0 (currentPoints) + 30 (grandTotal) |
| will declare a winner if a user scores 100 points or more | 102 | congrats |

## AUTHOR

_Brendon Tse and Loewy Malkovich_

## LICENSE

_Licensed under the MIT license_
