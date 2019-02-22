const numColors = document.querySelector(".number");
const boxContainer = document.querySelector(".colorBoxes");
const direction = document.querySelector(".direction");

numColors.addEventListener("change", addBoxes);
numColors.addEventListener("input", addBoxes);

function addBoxes() {
	let amount = Number(numColors.value);
	if (amount === numBoxes) {
		return;
	} else if (amount < numBoxes) {
		for (x = 0; x < numBoxes - amount; x++) {
			let last = boxContainer.lastChild;
		 	boxContainer.removeChild(last);	
		}
		numBoxes = amount;
		setBackground()
	} else {
		for (let x = numBoxes + 1; x < amount + 1; x++) {
			let name = "color" + String(x);
			let box = document.createElement("input");
			box.className = name;
			box.type = "text";
			box.value = "#FFFFFF";
			box.addEventListener("input", setBackground);
			box.addEventListener("change", setBackground);
			boxContainer.appendChild(box);
		}
		numBoxes = amount;
		setBackground()
	}	
}

function setBackground() {
	let colors = "";
	for (x = 1; x < numBoxes + 1; x++) {
		let name = "color" + String(x);
		let colorBox = document.querySelector("." + name);
		let colorValue = colorBox.value;
		colors = colors + ", " + colorValue;	
	}
	let directValue = direction.value;
	colors = "linear-gradient(" + directValue + colors + ")";
	document.body.style.background = colors;
};

let firstColor = document.createElement("input");
let secondColor = document.createElement("input");
firstColor.className = "color1";
secondColor.className = "color2";
firstColor.type = "text";
secondColor.type = "text";
firstColor.value = "#05FFA1";
secondColor.value = "#01CDFE";
firstColor.addEventListener("input", setBackground);
firstColor.addEventListener("change", setBackground);
secondColor.addEventListener("input", setBackground);
secondColor.addEventListener("change", setBackground);
boxContainer.appendChild(firstColor);
boxContainer.appendChild(secondColor);
let numBoxes = 2;
setBackground();



