//Create a random number
function randomNumber(range){
	return Math.floor(Math.random() * range);
}
function getColor(){
	var colorArray = new Array ("white", "green", "blue", "red", "yellow", "Cyan", "pink" , "purple", "Brown");
	var colorIndex = Math.floor(Math.random() * colorArray.length);	
	return colorArray[colorIndex];	
}