const input = document.querySelector("input");
document.body.style.backgroundColor = '#' + input.value;

input.addEventListener('input', changeBG);
input.addEventListener('change', changeBG);

function changeBG(e) {
	let color = input.value;
	document.body.style.backgroundColor = '#' + color;
};
