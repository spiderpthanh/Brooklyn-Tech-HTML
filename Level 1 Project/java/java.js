function initialize()
{
	power = 0;
	speed = 0;
	integrity = 0;
	powerOutput = document.getElementById("power-level");
	speedOutput = document.getElementById("top-speed");
	integrityOutput = document.getElementById("structural-integrity");
}
function powercounterUp()
{
	power = power + 1;
	display();
}
function powercounterDown()
{
	power = power - 1;
	if (power < 0){
		power = 0;
	}
	display();
}
function speedcounterUp()
{
	speed = speed + 1;
	display();
}
function speedcounterDown()
{
	speed = speed - 1;
	if (speed < 0){
		speed = 0;
	}
	display();
}
function integritycounterUp()
{
	integrity = integrity + 1;
	display();
}
function integritycounterDown()
{
	integrity = integrity - 1;
	if (integrity < 0){
		integrity = 0;
	}
	display();
}
function display()
{
	powerOutput.innerHTML = power;
	speedOutput.innerHTML = speed;
	integrityOutput.innerHTML = integrity;
}
