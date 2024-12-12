var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Todo conocimiento conlleva una gran responsabilidad')
    .pauseFor(2)
    .start();