// script.js

document.addEventListener('DOMContentLoaded', function() {
    const musicaFondo = document.getElementById('musicaFondo');
    const btnConMusica = document.getElementById('btnConMusica');
    const btnSinMusica = document.querySelector('.buttons-container a:last-child'); // Selecciona el segundo botón

    // Manejador para el botón "Ingresar con música"
    if (btnConMusica) {
        btnConMusica.addEventListener('click', function(event) {
            event.preventDefault(); // Detiene la navegación predeterminada del enlace

            musicaFondo.play()
                .then(() => {
                    // La música empezó a reproducirse con éxito
                    console.log('Música iniciada. Redirigiendo...');
                    window.location.href = 'pagina principal.html';
                })
                .catch(error => {
                    // Hubo un error al intentar reproducir (ej: autoplay bloqueado)
                    console.error('Error al reproducir la música:', error);
                    // Aún así, intenta redirigir para no dejar al usuario atascado
                    alert('La reproducción automática de música fue bloqueada por el navegador. Se redirigirá sin música.');
                    window.location.href = 'pagina principal.html';
                });
        });
    }

    // Manejador para el botón "Ingresar sin música"
    if (btnSinMusica) {
        btnSinMusica.addEventListener('click', function(event) {
            event.preventDefault(); // Detiene la navegación predeterminada
            
            // Asegúrate de que la música no esté reproduciéndose si se hace clic aquí
            if (!musicaFondo.paused) {
                musicaFondo.pause();
                musicaFondo.currentTime = 0; // Reinicia la música si se detiene
            }
            console.log('Redirigiendo sin música...');
            window.location.href = 'pagina principal.html';
        });
    }
});

