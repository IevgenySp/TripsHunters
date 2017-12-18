var screen = document.getElementById('root')

var landScape = new Terrain.LandScape(screen, {
    width: 1024,
    height: 1024,
    primitives:'POINTS',
    src: '/img/textureHeightMap3.png'
});

landScape.resize(screen.offsetWidth,screen.offsetHeight);
screen.insertBefore(landScape.display.canvas.context,screen.childNodes[0]);
window.addEventListener('resize', function() {
    landScape.resize(screen.offsetWidth,screen.offsetHeight);
});

landScape.start();