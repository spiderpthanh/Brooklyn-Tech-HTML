function initialize()
{
	amountPlayerTokens = 12;
	amountComputerTokens = 12;
	redDiceValue = 0;
	whiteDiceValue = 0;
	redDieFaceOutput = document.getElementById("redDieFace");
	whiteDieFaceOutput = document.getElementById("whiteDieFace");
}
function rollDice()
{
	redDiceValue = getRandomInteger(1,6);
	whiteDiceValue = getRandomInteger(1,6);
	display();
}
function getRandomInteger(lower, upper)
{
	var multiplier = upper - (lower - 1);
	var rnd = parseInt(Math.random() * multiplier) + lower;
	return rnd;
}
function reset()
{
	redDieFaceOutput.src = "images/red-0.png";
	whiteDieFaceOutput.src = "images/white-0.png";
}
function display()
{
	redDieFaceOutput.src = "images/red-" + redDiceValue + ".png";
	whiteDieFaceOutput.src = "images/white-" + whiteDiceValue + ".png";
}