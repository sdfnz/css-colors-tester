const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
let redVal = red.value;
let greenVal = green.value;
let blueVal = blue.value;
document.body.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`;

red.addEventListener('input', changeBG);
red.addEventListener('change', changeBG);
green.addEventListener('input', changeBG);
green.addEventListener('change', changeBG);
blue.addEventListener('input', changeBG);
blue.addEventListener('change', changeBG);

function changeBG(e) {
	let redVal = red.value;
	let greenVal = green.value;
	let blueVal = blue.value;
	document.body.style.backgroundColor = `rgb(${redVal},${greenVal},${blueVal})`;
};
