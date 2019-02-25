function initialize()
{
	amountPlayerRedTokens = 12;
	amountPlayerBlackTokens = 12;
	amountComputerRedTokens = 12;
	amountComputerBlackTokens = 12;
	redDiceValue = 0;
	blackDiceValue = 0;
	redDieFaceOutput = document.getElementById("redDieFace");
	blackDieFaceOutput = document.getElementById("blackDieFace");
	computerTokenOutput = document.getElementById("computerTokenDisplay")
	playerTokenOutput = document.getElementById("playerTokenDisplay")
	eventLogOutput = document.getElementById("eventLog")
}
function rollDice()
{
	redDiceValue = getRandomInteger(1,6);
	blackDiceValue = getRandomInteger(1,6);
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
		amountPlayerRedTokens += redDiceValue;
		amountComputerBlackTokens -= blackDiceValue;
		display(added);
	}
	if (functionNumber == 2) {
		amountPlayerBlackTokens += blackDiceValue;
		amountComputerRedTokens -= redDiceValue;
		display();
	}
	if (functionNumber == 3) {
		amountPlayerRedTokens -= redDiceValue;
		amountComputerBlackTokens += blackDiceValue;
		display();
	}
	if (functionNumber == 4) {
		amountPlayerBlackTokens -= blackDiceValue;
		amountComputerRedTokens += redDiceValue;
		display();
	}
}
function reset()
{
	redDieFaceOutput.src = "images/red-0.png";
	blackDieFaceOutput.src = "images/black-0.png";
	redDiceValue = 0;
	blackDiceValue = 0;
}
function display(modifyPlayer, )
{
	redDieFaceOutput.src = "images/red-" + redDiceValue + ".png";
	blackDieFaceOutput.src = "images/black-" + blackDiceValue + ".png";
	computerTokenOutput.innerHTML = "The Computer has " + amountComputerRedTokens + " red tokens and " + amountComputerBlackTokens + " black tokens."
	playerTokenOutput.innerHTML = "You have " + amountPlayerRedTokens + " red tokens and " + amountPlayerBlackTokens + " black tokens."
	eventLogOutput.innerHTML += "<br>" + redDiceValue + " was"
}