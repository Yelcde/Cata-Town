import { writeOnTable } from './writeOnTable.js';

const svgBairros = document.querySelector('.map-area');
const paths = Array.from(svgBairros.querySelectorAll('path'));
let lastClicked = undefined;

const filteredArr = paths.filter(path => path.id.slice(0,4) != 'path');

filteredArr.forEach((path) => {
	path.style.fill = 'transparent';
	path.addEventListener('click', (event) => {
		const clickedPath = event.target;
		if (lastClicked) { lastClicked.style.fill = 'transparent' };
		lastClicked = clickedPath;
		lastClicked.style.fill = 'rgba(0, 74, 26, .4)'
		writeOnTable(clickedPath.id)
	});

	// Fazendo efeito do hover entre os bairros sem incluir o Oceano
	path.addEventListener('mouseover', (event) => {
		const hoverPath = event.target;
		if (lastClicked != hoverPath) {
			hoverPath.style.fill = 'rgba(0, 74, 26, .2)';
		}
	})

	// Saída do Hoverjb 
	path.addEventListener('mouseout', (event) => {
		const hoverPath = event.target;
		if (lastClicked != hoverPath) {
			path.style.fill = 'transparent';
		}
	})
});