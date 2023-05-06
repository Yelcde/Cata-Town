
const jpMap = document.getElementById('svgBairros');

jpMap.addEventListener('click', function(e) {
    const bairro = e.target.addEventListener('click', function(e) {
		const bairro = e.target;
		const svg = bairro.getAttribute('src');
		console.log(svg);
	})
});
