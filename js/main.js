const svgBairros = document.querySelector('.map-area');
const paths = svgBairros.querySelectorAll('path');

paths.forEach((path) => {
	if (path.id.slice(0,4) != 'path'){
		// path.style.fill = '#fff';
		path.addEventListener('click', (event) => {
			const clickedPath = event.target;
			console.log(clickedPath.id);
		});
	};
});