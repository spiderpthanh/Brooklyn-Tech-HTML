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
	htmlButtonsArray = document.getElementsByClassName("tokenActions")
}
function rollDice()
{
	redDiceValue = getRandomInteger(1,6);
	blackDiceValue = getRandomInteger(1,6);
	redDieFaceOutput.src = "images/red-" + redDiceValue + ".png";
	blackDieFaceOutput.src = "images/black-" + blackDiceValue + ".png";
}
function computerTurn()
{
	rollDice();
	changeTokens(getRandomInteger(1,4));
	// var x = getRandomInteger(1,4);
	// if (x > 1) {
	// 	if (amountComputerRedTokens > amountPlayerRedTokens) {
	// 		if (amountComputerRedTokens - redDiceValue > amountPlayerRedTokens)
	// 			console.log("can maintain lead")
	// 	} else {
	// 		console.log("can't maintain lead")
	// 	}
	// } else {
		
	// }
	computerLastRedRollOutput.innerHTML = redDiceValue;
	computerLastBlackRollOutput.innerHTML = blackDiceValue;
	currentTurn = "player";
	for (var i = 0; i < htmlButtonsArray.length; i++) {
		htmlButtonsArray[i].disabled = false;
	}
}
function endPlayerTurn()
{
	for (var i = 0; i < htmlButtonsArray.length; i++) {
		htmlButtonsArray[i].disabled = true;
	}
	playerLastRedRollOutput.innerHTML = redDiceValue;
	playerLastBlackRollOutput.innerHTML = blackDiceValue;
	currentTurn = "computer";
	setTimeout(computerTurn, 1000);
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
		concatenateEventLog("added to", "red", "removed from", "black");
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
	if (amountPlayerBlackTokens <= 0 || amountComputerBlackTokens <= 0) {
		checkWinner();
	}
	if (currentTurn == "player") {
		endPlayerTurn();
	}
}
function checkWinner()
{
	if (amountPlayerRedTokens > amountComputerRedTokens) {
		alert("You win! Congrats!")
	} else {
		alert("The Computer wins! Better luck next time!")
	}
}
function concatenateEventLog(playerPile, playerColor, computerPile, computerColor)
{
	currentEventLog = "<br>" + redDiceValue + " tokens " + playerPile + " your " + playerColor + " pile and " + blackDiceValue + " tokens " + computerPile + " the computer's " + computerColor + " pile.";
	display();
}
function display()
{
	computerTokenOutput.innerHTML = "The Computer has " + amountComputerRedTokens + " red tokens and " + amountComputerBlackTokens + " black tokens."
	playerTokenOutput.innerHTML = "You have " + amountPlayerRedTokens + " red tokens and " + amountPlayerBlackTokens + " black tokens."
	eventLogOutput.innerHTML += currentEventLog;
}