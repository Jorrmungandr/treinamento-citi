const colorDiv = document.querySelector('.color-changing');

let colors = ['blue', 'red', 'green', 'yellow', 'purple'];
let i = 0;

document.addEventListener('click', (event) => {
	event.target.style.backgroundColor = colors[i];
	i === colors.length - 1 ? i = 0 : i++;
})