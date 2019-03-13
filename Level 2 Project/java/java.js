function initialize()
{
	currentTurn = "player";
	amountPlayerRedTokens = 12;
	amountPlayerBlackTokens = 12;
	amountComputerRedTokens = 12;
	amountComputerBlackTokens = 12;
	redDiceValue = 0;
	blackDiceValue = 0;
	currentEventLog = "";
	redDieFaceOutput = document.getElementById("redDieFace");
	blackDieFaceOutput = document.getElementById("blackDieFace");
	computerTokenOutput = document.getElementById("computerTokenDisplay");
	playerTokenOutput = document.getElementById("playerTokenDisplay");
	eventLogOutput = document.getElementById("eventLog");
	playerLastRedRollOutput = document.getElementById("playerLastRedRoll");
	playerLastBlackRollOutput = document.getElementById("playerLastBlackRoll");
	computerLastRedRollOutput = document.getElementById("computerLastRedRoll");
	computerLastBlackRollOutput = document.getElementById("computerLastBlackRoll");
}
function rollDice()
{
	if (currentTurn == "player") {
		redDiceValue = getRandomInteger(1,6);
		blackDiceValue = getRandomInteger(1,6);
	}
	if (currentTurn == "computer") {
		redDiceValue = getRandomInteger(1,6);
		blackDiceValue = getRandomInteger(1,6);
	}
	display();
}
function computerTurn()
{
	if () {}
}
function endPlayerTurn()
{
	currentTurn = "computer";
	
}
function getRandomInteger(lower, upper)
{
	var multiplier = upper - (lower - 1);
	var rnd = parseInt(Math.random() * multiplier) + lower;
	return rnd;
}
function changeTokens(functionNumber)
{
	if (functionNumber == 1) {
		amountPlayerRedTokens += redDiceValue;
		amountComputerBlackTokens -= blackDiceValue;
		concatenateEventLog("added to", "red", "removed from", "black");\
		end
	}
	if (functionNumber == 2) {
		amountPlayerBlackTokens += blackDiceValue;
		amountComputerRedTokens -= redDiceValue;
		concatenateEventLog("added to", "black", "removed from", "red");
	}
	if (functionNumber == 3) {
		amountPlayerRedTokens -= redDiceValue;
		amountComputerBlackTokens += blackDiceValue;
		concatenateEventLog("removed from", "red", "added to", "black");
	}
	if (functionNumber == 4) {
		amountPlayerBlackTokens -= blackDiceValue;
		amountComputerRedTokens += redDiceValue;
		concatenateEventLog("removed from", "black", "added to", "red");
	}
}
function concatenateEventLog(playerPile, playerColor, computerPile, computerColor)
{
	currentEventLog = "<br>" + redDiceValue + " tokens " + playerPile + " your " + playerColor + " pile and " + blackDiceValue + " tokens " + computerPile + " the computer's " + computerColor + " pile.";
	display();
}
function reset()
{
	redDieFaceOutput.src = "images/red-0.png";
	blackDieFaceOutput.src = "images/black-0.png";
	redDiceValue = 0;
	blackDiceValue = 0;
	eventLogOutput.innerHTML = "";
	computerTokenOutput.innerHTML = "";
	playerTokenOutput.innerHTML = "";
	eventLogOutput.innerHTML = "";
}
function display()
{
	redDieFaceOutput.src = "images/red-" + redDiceValue + ".png";
	blackDieFaceOutput.src = "images/black-" + blackDiceValue + ".png";
	computerTokenOutput.innerHTML = "The Computer has " + amountComputerRedTokens + " red tokens and " + amountComputerBlackTokens + " black tokens."
	playerTokenOutput.innerHTML = "You have " + amountPlayerRedTokens + " red tokens and " + amountPlayerBlackTokens + " black tokens."
	playerLastRedRollOutput.innerHTML = redDiceValue;
	playerLastBlackRollOutput.innerHTML = blackDiceValue;
	computerLastRedRollOutput.innerHTML = redDiceValue;
	computerLastBlackRollOutput.innerHTML = blackDiceValue;
	eventLogOutput.innerHTML += currentEventLog;
}