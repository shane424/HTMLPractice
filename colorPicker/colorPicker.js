window.onload = function(){
	// find input IDs
	var redSlider = document.getElementById("redSlider");
	var greenSlider = document.getElementById("greenSlider");
	var blueSlider = document.getElementById("blueSlider");
	// set values to 0
	redSlider.value = 0;
	greenSlider.value = 0;
	blueSlider.value = 0;
	
	var redValue = document.getElementById("redValue");
	var greenValue = document.getElementById("grennValue");
	var blueValue = document.getElementById("blueValue");
}

function moveSlider(){
	// get value of slider
	var red = redSlider.value;
	var green = greenSlider.value;
	var blue = blueSlider.value;
	// update textboxes
	redValue.value = red;
	greenValue.value = green;
	blueValue.value = blue;
	
	changeColor(red, green, blue);
}

function changeColor(r, g, b){
	var div = document.getElementById("divOutput");
	// change background color of div
	div.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';
}