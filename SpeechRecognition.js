// Obtenemos los elementos HTML que necesitamos
const startBtn = document.getElementById('start-btn');
const recognition = new webkitSpeechRecognition();
const iconContainer = document.getElementById('icon-container');
const output = document.getElementById('output');

// Configuramos el reconocimiento de voz
recognition.lang = 'es-ES';
recognition.continuous = true;

// Agregamos un event listener al botón de inicio de grabación
startBtn.addEventListener('click', () => {
    // Iniciamos la grabación de voz y agregamos la animación al icono
    recognition.start();
    iconContainer.classList.add('animate__heartBeat');
});

// Evento que se dispara cuando hay resultados en la grabación de voz
recognition.onresult = (event) => {
    // Obtenemos el último elemento p del contenedor de salida
    const lastP = output.querySelector('p:last-of-type');
    // Recorremos los resultados y creamos nuevos elementos para cada parte de la transcripción
    for (const result of event.results) {
        const text = result[0].transcript;
        const p = document.createElement('p');
        p.id = `result-${Date.now()}`; // Generamos un ID único para cada elemento
        p.textContent = text;
        // Si ya existe un último elemento p, eliminamos su contenido antes de agregar el nuevo elemento p
        if (lastP) {
            output.innerHTML = '';
        }
        output.appendChild(p);
    }
};

// Evento que se dispara cuando se detiene la grabación de voz
recognition.onend = () => {
    // Detenemos la animación del icono
    iconContainer.classList.remove('animate__heartBeat');
};
