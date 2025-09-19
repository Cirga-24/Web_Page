// Todo el codigo que tiene que ver con la modificacion de las imagenes
document.querySelectorAll('.imagenes-iniciales img').forEach(function(img) {
    //Si no tiene title, le pone el nombre del alt
    if (!img.hasAttribute('title') && img.hasAttribute('alt')) {
        img.setAttribute('title', img.getAttribute('alt'));
    }

    //Reproduce el sonido y cambia el color
    let bloqueado = false;
    img.addEventListener('click', function() {

        //Reproduce el sonido al hacer click sobre la imagen
        if (bloqueado) return;
        const sonido = img.getAttribute('data-sonido');
        if (sonido) {
            const audio = new Audio(sonido);
            audio.volume = 0.2;
            audio.play();
        }
    
        //Evita que se pueda spamear el click
        bloqueado = true;
        setTimeout(() => {
            bloqueado = false;
        }, 2000);

        //Cambia el color de fondo segun el tipo
        const tipo = img.getAttribute('tipo');
        const contenedor = img.closest('section');
        if (tipo == "planta") {
            contenedor.style.backgroundColor = "lightgreen";
        } else if (tipo == "fuego") {
            contenedor.style.backgroundColor = "lightcoral";
        } else if (tipo == "agua") {
            contenedor.style.backgroundColor = "lightblue";
        } else {
            contenedor.style.backgroundColor = "#fff";
        }
    })
});

// Codigo Konami para sorpresa
const konami = [38,38,40,40,37,39,37,39,66,65];
let konamiPos = 0;
document.addEventListener('keydown', function(e) {
    console.log(e.keyCode);
    if (e.keyCode === konami[konamiPos]) {
        konamiPos++;
        if (konamiPos === konami.length) {
            // Abre una nueva página con un Pikachu
            window.open('https://www.youtube.com/watch?v=xvFZjo5PgG0', '_blank');
            konamiPos = 0;
        }
    } else {
        konamiPos = 0;
    }
});