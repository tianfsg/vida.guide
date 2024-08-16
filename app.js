const express = require('express');
const path = require('path');
const i18n = require('i18n');  // Importar i18n
const routes = require('./routes/routes');

const app = express();

// Configuración de i18n
i18n.configure({
    locales: ['en', 'es'],  // Idiomas soportados
    directory: path.join(__dirname, 'static/locales'),  // Carpeta donde se almacenan las traducciones
    defaultLocale: 'en',  // Idioma por defecto
    cookie: 'lang',  // Nombre de la cookie que almacena el idioma seleccionado
    queryParameter: 'lang',  // Parámetro en la URL para cambiar el idioma
    autoReload: true,  // Recargar automáticamente los archivos de traducción si se modifican
    syncFiles: true,  // Crear archivos de traducción si no existen
    objectNotation: true  // Permite la notación de objetos en las claves de traducción
});

// Middleware de i18n
app.use(i18n.init);  // Inicializar i18n en la aplicación

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware para servir archivos estáticos
app.use('/static', express.static(path.join(__dirname, 'static')));

// Usar las rutas definidas
app.use('/', routes);

// Manejo de errores 404
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views/templates/404.html'));
});

// Iniciar el servidor
app.listen(8060, () => {
    console.log('Server is running on http://localhost:8060');
});
