const welcome = document.getElementById('continuar');
const button = document.getElementById('liberar');

function fechaPopup() {
    welcome.classList.add('hidden');
}

function hiddenPopup() {
    button.addEventListener('click', fechaPopup);
}

hiddenPopup();