/* Guess Validator Function: Bage 2
 * Adds counting turns, quit with q, and validating guess
 */ By Max Spoth


var answer = Math.floor(Math.random()*100)+1;
console.log(answer);
var guess = 0;
var turns = 0;
while (guess != answer) {
	guess = prompt("Choose a number between 1 and 100");
	if (guess == "q") break;
	if (validator(guess)==true) {
		turns++;
		if (guess>answer) alert("too high");
		else if (guess<answer) alert("too low");
	}
	else alert("invalid guess please retry");
}
if (guess == answer) alert("you got it in "+turns+". ");
else alert("quitter");
function validator(guess) {
	if (guess > 0 && guess < 101) return true;
	else return false;
}
