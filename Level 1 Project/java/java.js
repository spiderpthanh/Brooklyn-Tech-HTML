function initialize()
{
	power = 0;
	speed = 0;
	integrity = 0;
	scanners = false;
	defenses = false;
	energyType = "none";
	powerOutput = document.getElementById("powerLevel");
	speedOutput = document.getElementById("topSpeed");
	integrityOutput = document.getElementById("structuralIntegrity");
}
function powercounterUp()
{
	power = power + 1;
	if (energyType == "none") {
		alert("YOU AINT GOT POWER B");
		power = 0;
	} else if (energyType == "solar" && power > 10) {
		power = 10;
	} else if (energyType == "hydro" && power > 8) {
		power = 8;
	} else if (energyType == "nuclear" && power > 12) {
		power = 12;
	}
	display();
}
function powercounterDown()
{
	power = power - 1;
	if (power < 0) {
		power = 0;
		alert("YOU AINT GOT POWER B");
	}
	display();
}
function speedcounterUp()
{
	speed = speed + 1;
	if (energyType == "none") {
		alert("YOU AINT GOT POWER B");
		speed = 0;
	} else if (energyType == "solar" && speed > 10) {
		speed = 10;
	} else if (energyType == "hydro" && speed > 12) {
		speed = 8;
	} else if (energyType == "nuclear" && speed > 14) {
		speed = 12;
	}
	display();
}
function speedcounterDown()
{
	speed = speed - 1;
	if (speed < 0) {
		speed = 0;
		alert("YOU AINT GOT POWER B");
	}
	display();
}
function integritycounterUp()
{
	integrity = integrity + 1;
	if (energyType == "none") {
		alert("YOU AINT GOT POWER B");
		integrity = 0;
	} else if (energyType == "solar" && integrity > 10) {
		integrity = 10;
	} else if (energyType == "hydro" && integrity > 10) {
		integrity = 10;
	} else if (energyType == "nuclear" && integrity > 4) {
		integrity = 4;
	}
	display();
}
function integritycounterDown()
{
	integrity = integrity - 1;
	if (integrity < 0){
		alert("YOU AINT GOT POWER B");
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
	energyType = "solar";
	document.getElementById("powerColor").style.backgroundColor = "#f9e07c";
}
function hydroSelect()
{
	energyType = "hydro";
	document.getElementById("powerColor").style.backgroundColor = "#c7eff9";
}
function nuclearSelect()
{
	energyType = "nuclear";
	document.getElementById("powerColor").style.backgroundColor = "#b9fcb0";
}
function test()
{
	console.log("test");
}