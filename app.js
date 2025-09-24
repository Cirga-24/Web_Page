// Todo el codigo que tiene que ver con la modificacion de las imagenes
document.querySelectorAll('.imagenes-iniciales img').forEach(function(img) {
    //Si no tiene title, le pone el nombre del alt
    if (!img.hasAttribute('title') && img.hasAttribute('alt')) {
        img.setAttribute('title', img.getAttribute('alt'));
    }

    //Reproduce el sonido y cambia el color
    let bloqueado = true;
    img.addEventListener('click', function() {

        //Reproduce el sonido al hacer click sobre la imagen
        if (bloqueado) return;
        const sonido = img.getAttribute('data-sonido');
        if (sonido) {
            const audio = new Audio(sonido);
            audio.volume = 1;
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

        //Cambia el texto de la imagen
        const nombre = img.getAttribute('alt');
        const textP = contenedor.querySelector('p');
        const numero = img.getAttribute('data-numero');
        if (textP) {
            textP.textContent =  "Nombre: " + nombre + " - Tipo: " + tipo +
            " - Numero: " + numero;
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

//Presionar voltorbs
document.querySelectorAll('.voltorb-img-1, .voltorb-img-2').forEach(function(voltorb) {
    
    voltorb.addEventListener('click', function() {
        let onomatopeya;
        if (voltorb.classList.contains('voltorb-img-1')) {
            onomatopeya = document.querySelector('.onomatopeya-der');
        } else {
            onomatopeya = document.querySelector('.onomatopeya-izq');
        }
        if (onomatopeya) {
            onomatopeya.style.display = 'block';
            onomatopeya.style.opacity = '1';
            // Reinicia la animación
            onomatopeya.style.animation = 'none';
            void onomatopeya.offsetWidth;
            onomatopeya.style.animation = null;
            // Oculta después de 1 segundo
            setTimeout(() => {
                onomatopeya.style.display = 'none';
                onomatopeya.style.opacity = '0';
            }, 1000);
        } else {
            console.log('No se encontró el elemento de onomatopeya.');
        }
    });
});