// Scripts for interactivity can be added here
// menu.js

// Verificación de compatibilidad del <dialog>
if (!window.HTMLDialogElement) {
    document.getElementById('contactModal').style.display = 'none'; // Oculta el modal
    // Aquí puedes implementar una alternativa, como un modal basado en CSS o JavaScript
    alert('El navegador no soporta la etiqueta <dialog>. Considera actualizar tu navegador.');
}

document.getElementById('languageButton').addEventListener('click', function() {
    document.getElementById('languageMenu').classList.toggle('hidden');
});

document.getElementById('menuButton').addEventListener('click', function() {
    document.getElementById('menu').classList.toggle('hidden');
});

window.addEventListener('click', function(e) {
    if (!document.getElementById('languageButton').contains(e.target) && !document.getElementById('menuButton').contains(e.target)) {
        document.getElementById('languageMenu').classList.add('hidden');
        document.getElementById('menu').classList.add('hidden');
    }
});

