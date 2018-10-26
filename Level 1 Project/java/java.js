function initialize()
{
	power = 0;
	speed = 0;
	integrity = 0;
	scanners = false;
	defenses = false;
	energyType = "none";
	powerType = document.getElementById("powerTitle");
	powerOutput = document.getElementById("powerLevel");
	speedOutput = document.getElementById("topSpeed");
	integrityOutput = document.getElementById("structuralIntegrity");
	defenseOutput = document.getElementById("defenseStatus");
	scannerOutput = document.getElementById("scannerStatus");
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
		alert("There's no power installed!");
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
		speed = 12;
	} else if (energyType == "nuclear" && speed > 14) {
		speed = 14;
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
		scannerOutput.innerHTML = "scanners: yur"
	} else {
		scanners = false;
		scannerOutput.innerHTML = "scanners: nur"
	}
}
function toggledefenses()
{
	if (defenses == false){
		defenses = true;
		defenseOutput.innerHTML = "defenses: yur"
	} else {
		defenses = false;
		defenseOutput.innerHTML = "defenses: nur"
	}
}

function solarSelect()
{
	energyType = "solar";
	document.getElementById("powerColor").style.backgroundColor = "#f9e07c";
	powerType.innerHTML = "Solar Power Installed!";
	if (power > 10) {
		power = 10
	}
	if (speed > 10) {
		speed = 10
	}
	if (integrity > 10) {
		integrity = 10
	}
}
function hydroSelect()
{
	energyType = "hydro";
	document.getElementById("powerColor").style.backgroundColor = "#c7eff9";
	powerType.innerHTML = "Hydro Power Installed!";
	if (power > 8) {
		power = 8
	}
	if (speed > 12) {
		speed = 12
	}
	if (integrity > 10) {
		integrity = 10
	}
}
function nuclearSelect()
{
	energyType = "nuclear";
	document.getElementById("powerColor").style.backgroundColor = "#b9fcb0";
	powerType.innerHTML = "Nuclear Power Installed!";
	if (power > 12) {
		power = 12
	}
	if (speed > 14) {
		speed = 14
	}
	if (integrity > 4) {
		integrity = 4
	}
	display();
}
function changeImageBlack() 
{
	bigThumbnailImage.src = "images/black_zord.png"
}
function changeImageBlue() 
{
	bigThumbnailImage.src = "images/blue_zord.png"
}
function changeImageGreen() 
{
	bigThumbnailImage.src = "images/green_zord.png"
}
function changeImageRed() 
{
	bigThumbnailImage.src = "images/red_zord.png"
}
function changeImageYellow() 
{
	bigThumbnailImage.src = "images/yellow_zord.png"
}
function finalize()
{

}