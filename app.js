const express = require('express');
const i18n = require('i18n');
const path = require('path');
const fs = require('fs');
const axios = require('axios'); // Reemplaza node-fetch por axios
require('dotenv').config(); // Cargar las variables de entorno desde .env
const routes = require('./routes/routes.js');
const app = express();

// Importa tus rutas

// Usa las rutas

// Configuración de i18n
i18n.configure({
  locales: ['en', 'es', 'de'],  
  directory: path.join(__dirname, 'static/lang'),  
  defaultLocale: 'en',
  cookie: 'lang', 
  queryParameter: 'lang',
  autoReload: false,  
  syncFiles: false, 
  updateFiles: false, 
  objectNotation: true
});

// Middleware de i18n
app.use(i18n.init);

// Configurar express.static para servir archivos estáticos desde la carpeta "static"
app.use('/static', express.static(path.join(__dirname, 'static')));
app.use('/', routes);

// Middleware adicional
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// Configuración del motor de plantillas
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Ruta principal
app.get('/', (req, res) => {
  res.render('index', {
      t: res.__,  // Alias de `__` para `t`
      language: req.getLocale(),
  });
});

if (!process.env.HCAPTCHA_SECRET) {
    throw new Error('HCAPTCHA_SECRET no está definido en .env');
}

// Servidor
const PORT = process.env.PORT || 8060;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
