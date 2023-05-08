const svg = document.getElementById('svgBairros');
    svg.addEventListener('click', (event) => {
    const clickedPath = event.target;
    console.log(clickedPath.id);
});