/* Guess Game: Random Integer-Driven JavaScript While Loop
 * Format: while (boolean expression) {} -- indent block code 
 */

var answer = Math.floor(Math.random()*100)+1;
var guess = 0;
while (guess != answer) {
     guess = prompt("choose a number between 1 and 100");
    if (guess>answer) alert("too high");
      else if (guess<answer) alert("too low");
}
alert("you got it");