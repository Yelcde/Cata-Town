import { writeOnTable } from './writeOnTable.js';

const svgBairros = document.querySelector('.map-area');
const paths = svgBairros.querySelectorAll('path');
let lastClicked = undefined;

paths.forEach((path) => {
	if (path.id.slice(0,4) != 'path'){
		path.style.fill = '#E0FFEB';
		path.addEventListener('click', (event) => {
			const clickedPath = event.target;
			if (lastClicked) { lastClicked.style.fill = '#E0FFEB' };
			lastClicked = clickedPath;
			lastClicked.style.fill = '#9DE0AD'
			writeOnTable(clickedPath.id)
		});
	};
});