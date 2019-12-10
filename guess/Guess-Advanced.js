//* Guess Validator Function: Bage 2
// * Adds counting turns, quit with q, and validating guess
// * By Max Spoth



var games = 0; 
var again = true;
var totalTurns = 0;
while (again == true) {
	var answer = Math.floor(Math.random()*100)+1;
	console.log(answer);
	var guess = 0;
	var turns = 0;
	games++;
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
	if (guess == answer) {
	 	gameStats(turns); 
	 	again = newGame();
	 }
	else break; 
 	}

function validator(guess) {
	if (guess > 0 && guess < 101) return true;
	else return false;
}

function gameStats(turns) {
	alert("you guessed it in "+turns+" turns ");
	 totalTurns = totalTurns + turns;
	 var averageTurns = totalTurns/games; 
	alert("you won "+games+" games with an average of "+averageTurns+"  turns per game");
}

function newGame() {
	again = confirm("would you like to play again");
	return again;
}
