const hue = document.querySelector("#hue");
const sat = document.querySelector("#sat");
const light = document.querySelector("#light");
const alpha = document.querySelector("#alpha");
let hueVal = hue.value;
let hueOff = Number(hueVal) + 20;
let satVal = sat.value;
let lightVal = light.value;
let alphaVal = alpha.value;
hue.style.color = `hsl(${String(hueOff)}, 50%, 50%)`;
document.body.style.backgroundColor = `hsla(${hueVal}, ${satVal}%, ${lightVal}%, ${alphaVal})`;

hue.addEventListener('input', changeBG);
hue.addEventListener('change', changeBG);
sat.addEventListener('input', changeBG);
sat.addEventListener('change', changeBG);
light.addEventListener('input', changeBG);
light.addEventListener('change', changeBG);
alpha.addEventListener('input', changeBG);
alpha.addEventListener('change', changeBG);

function changeBG(e) {
	let hueVal = hue.value;
	let hueOff = Number(hueVal) + 20;
	let satVal = sat.value;
	let lightVal = light.value;
	let alphaVal = alpha.value;
	hue.style.color = `hsl(${String(hueOff)}, 50%, 50%)`;
	document.body.style.backgroundColor = `hsla(${hueVal}, ${satVal}%, ${lightVal}%, ${alphaVal})`;
};
