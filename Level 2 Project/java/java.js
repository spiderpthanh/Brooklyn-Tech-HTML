function initialize()
{
	currentTurn = "player";
	amountPlayerRedTokens = 12;
	amountPlayerBlackTokens = 12;
	amountComputerRedTokens = 12;
	amountComputerBlackTokens = 12;
	playerRedDiceValue = 0;
	playerBlackDiceValue = 0; 
	computerRedDiceValue = 0;
	computerBlackDiceValue = 0;
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
	// MAKE DIFFERENT DICE FOR PLAYER AND COMPUTER
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 
// 	
}
function rollDice()
{
	if (currentTurn == "player") {
		playerRedDiceValue = getRandomInteger(1,6);
		playerBlackDiceValue = getRandomInteger(1,6);
	}
	if (currentTurn == "computer") {
		computerRedDiceValue = getRandomInteger(1,6);
		computerBlackDiceValue = getRandomInteger(1,6);
	}
	display();
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
		amountPlayerRedTokens += playerRedDiceValue;
		amountComputerBlackTokens -= computerBlackDiceValue;
		concatenateEventLog("added to", "red", "removed from", "black");
	}
	if (functionNumber == 2) {
		amountPlayerBlackTokens += playerBlackDiceValue;
		amountComputerRedTokens -= computerRedDiceValue;
		concatenateEventLog("added to", "black", "removed from", "red");
	}
	if (functionNumber == 3) {
		amountPlayerRedTokens -= playerRedDiceValue;
		amountComputerBlackTokens += computerBlackDiceValue;
		concatenateEventLog("removed from", "red", "added to", "black");
	}
	if (functionNumber == 4) {
		amountPlayerBlackTokens -= playerBlackDiceValue;
		amountComputerRedTokens += computerRedDiceValue;
		concatenateEventLog("removed from", "black", "added to", "red");
	}
}
function concatenateEventLog(playerPile, playerColor, computerPile, computerColor)
{
	currentEventLog = "<br>" + playerRedDiceValue + " tokens " + playerPile + " your " + playerColor + " pile and " + playerBlackDiceValue + " tokens " + computerPile + " the computer's " + computerColor + " pile.";
	display();
}
function reset()
{
	redDieFaceOutput.src = "images/red-0.png";
	blackDieFaceOutput.src = "images/black-0.png";
	redDiceValue = 0;
	blackDiceValue = 0;
	computerTokenOutput.innerHTML = "";
	playerTokenOutput.innerHTML = "";
	eventLogOutput.innerHTML += "";
}
function display()
{
	redDieFaceOutput.src = "images/red-" + playerRedDiceValue + ".png";
	blackDieFaceOutput.src = "images/black-" + playerBlackDiceValue + ".png";
	computerTokenOutput.innerHTML = "The Computer has " + amountComputerRedTokens + " red tokens and " + amountComputerBlackTokens + " black tokens."
	playerTokenOutput.innerHTML = "You have " + amountPlayerRedTokens + " red tokens and " + amountPlayerBlackTokens + " black tokens."
	playerLastRedRollOutput.innerHTML = playerRedDiceValue;
	playerLastBlackRollOutput.innerHTML = playerBlackDiceValue;
	computerLastRedRollOutput.innerHTML = computerRedDiceValue;
	computerLastBlackRollOutput.innerHTML = computerBlackDiceValue;
	eventLogOutput.innerHTML += currentEventLog;
}