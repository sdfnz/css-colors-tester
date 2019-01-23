const red = document.querySelector("#red");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const alpha = document.querySelector("#alpha");
let redVal = red.value;
let greenVal = green.value;
let blueVal = blue.value;
let alphaVal = alpha.value;
document.body.style.backgroundColor = `rgba(${redVal},${greenVal},${blueVal},${alphaVal})`;

red.addEventListener('input', changeBG);
red.addEventListener('change', changeBG);
green.addEventListener('input', changeBG);
green.addEventListener('change', changeBG);
blue.addEventListener('input', changeBG);
blue.addEventListener('change', changeBG);
alpha.addEventListener('input', changeBG);
alpha.addEventListener('change', changeBG);

function changeBG(e) {
	let redVal = red.value;
	let greenVal = green.value;
	let blueVal = blue.value;
	let alphaVal = alpha.value;
	document.body.style.backgroundColor = `rgba(${redVal},${greenVal},${blueVal},${alphaVal})`;
};
