import { writeOnTable } from './writeOnTable.js';

const svgBairros = document.querySelector('.map-area');
const paths = Array.from(svgBairros.querySelectorAll('path'));
let lastClicked = undefined;

const filteredArr = paths.filter(path => path.id.slice(0,4) != 'path');

filteredArr.forEach((path) => {
	path.style.fill = '#E0FFEB';
	path.addEventListener('click', (event) => {
		const clickedPath = event.target;
		if (lastClicked) { lastClicked.style.fill = '#E0FFEB' };
		lastClicked = clickedPath;
		lastClicked.style.fill = '#9DE0AD'
		writeOnTable(clickedPath.id)
	});

	// Fazendo efeito do hover entre os bairros sem incluir o Oceano
	path.addEventListener('mouseover', (event) => {
		const hoverPath = event.target;
		hoverPath.style.filter = 'brightness(.9)';
	})

	// Saída do Hoverjb 
	path.addEventListener('mouseout', (event) => {
		const hoverPath = event.target;
		hoverPath.style.filter = 'brightness(1)';
	})
});