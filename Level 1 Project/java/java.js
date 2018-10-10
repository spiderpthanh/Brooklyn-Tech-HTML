function initialize()
{
	power = 0;
	speed = 0;
	integrity = 0;
	scanners = false;
	defenses = false;
	powerType = "none";
	powerOutput = document.getElementById("powerLevel");
	speedOutput = document.getElementById("topSpeed");
	integrityOutput = document.getElementById("structuralIntegrity");
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
function togglescanners()
{
	if (scanners == false){
		scanners = true;
	} else {
		scanners = false;
	}
}
function toggledefenses()
{
	if (defenses == false){
		defenses = true;
	} else {
		defenses = false;
	}
}
function solarSelect()
{
	document.getElementById("powerColor").style.backgroundColor = "#f9e07c";
}
function hydroSelect()
{
	document.getElementById("powerColor").style.backgroundColor = "#c7eff9";
}
function nuclearSelect()
{
	document.getElementById("powerColor").style.backgroundColor = "#b9fcb0";
}
function test()
{
	console.log("test");
}