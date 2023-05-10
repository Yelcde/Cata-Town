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
});