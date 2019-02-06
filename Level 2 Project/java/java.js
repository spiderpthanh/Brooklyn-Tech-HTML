function initialize()
{
	amountPlayerTokens = 12;
	amountComputerTokens = 12;
	currentDiceValue = 0;
}
function rollDie()
{
	currentDiceValue = getRandomInteger(1,6)
}
function getRandomInteger(lower, upper)
{
	var multiplier = upper - (lower - 1);
	var rnd = parseInt(Math.random() * multiplier) + lower;
	return rnd;
}
function display()
{
	
}