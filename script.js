// cache selectors
var css = document.querySelector("h3"); 
var color1 = document.querySelector(".color1"); // use '.' to select classes with querySelector
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient"); // this will be the background gradient

// check selectors
// console.log(css)
// console.log(color1)
// console.log(color2)
// console.log(body);

// add eventlistener function
// color1.addEventListener("input", function() {
// 	// console.log(color1.value);
// 	body.style.background = "linear-gradient(to right, "
// 	+ color1.value
// 	+ ", "
// 	+ color2.value
// 	+ ")";
// })

// color2.addEventListener("input", function() {
// 	// console.log(color2.value);
// 	body.style.background = "linear-gradient(to right, " 
// 	+ color1.value 
// 	+ ", " 
// 	+ color2.value 
// 	+ ")";
// })

// do not repeat yourself; extract the eventlistener function and make its own
function setGradient() {
	body.style.background = "linear-gradient(to right, "
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	// add css info text at the bottom
	css.textContent = body.style.background + ";";
}

// eventlistener function AFTER creating the function separately to simplify
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

// eventlistener alternative
// can use the following in the <input> for color1 and color2
// oninput="setGradient()"
// or
// onclick="setGradient()" 
	// this one doesnt work very well bc after you choose the color and click "ok", 
	// you still have to click the  input again for the background to change

// Exercise
// 1. Write code so that the colour inputs match the background generated on the first page load. 
// document.querySelector(".color1").setAttribute("value", red);
// document.querySelector(".color2").setAttribute("value", yellow);
color1.value = "#ff0000"; // can only use #colors
color2.value = "#00FF00";

// 2. Display the initial CSS linear gradient property on page load.
css.textContent = color1.value + " " + color2.value;

// 3. BONUS: Add a random button which generates two random numbers for the colour inputs.
// create button, assign id, assign textnode
var rngbtn = document.createElement("button");
var rngbtntxt = document.createTextNode("Randomise Colors");
// console.log(rngbtntxt);
rngbtn.id = "rng";
rngbtn.setAttribute("type", "color");

// assign button to the body + text to the button
body.appendChild(rngbtn);
rngbtn.appendChild(rngbtntxt);

// add eventlistener function
rngbtn.addEventListener("click", setRandomColor);

// create function to generate random color
// stackoverflow answered how to generate a random hex color ezclap; good job figuring out how to make everything work though!
function getRandomColor() {
	var letters = "0123456789ABCDEF";
	var color = "#";
	for (i=0; i<6;i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

// create function to set background to the random generated color
function setRandomColor() {
	body.style.background = "linear-gradient(to right, "
	+ getRandomColor()
	+ ", "
	+ getRandomColor()
	+ ")";

	css.textContent = body.style.background + ";";
}