// Scripts for interactivity can be added here
// menu.js

// Verificación de compatibilidad del <dialog>
if (!window.HTMLDialogElement) {
    var contactModal = document.getElementById('contactModal');
    if (contactModal) {
        contactModal.style.display = 'none'; // Oculta el modal
        alert('El navegador no soporta la etiqueta <dialog>. Considera actualizar tu navegador.');
    }
}

// Toggle de menú de idioma
var languageButton = document.getElementById('languageButton');
if (languageButton) {
    languageButton.addEventListener('click', function() {
        var languageMenu = document.getElementById('languageMenu');
        if (languageMenu) {
            languageMenu.classList.toggle('hidden');
        }
    });
}

// Toggle de menú en dispositivos móviles
var menuButton = document.getElementById('menuButton');
if (menuButton) {
    menuButton.addEventListener('click', function() {
        var menu = document.getElementById('menu');
        if (menu) {
            menu.classList.toggle('hidden');
        }
    });
}

// Cerrar menús al hacer clic fuera
window.addEventListener('click', function(e) {
    var languageMenu = document.getElementById('languageMenu');
    var menu = document.getElementById('menu');

    if (languageMenu && menu) {
        if (!languageButton.contains(e.target) && !menuButton.contains(e.target)) {
            languageMenu.classList.add('hidden');
            menu.classList.add('hidden');
        }
    }
});
