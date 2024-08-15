const express = require('express');
const path = require('path');
const app = express();

// Servir archivos estáticos
app.use('/static', express.static(path.join(__dirname, 'static')));

// Opcional: Servir el favicon directamente si está en una ubicación específica
app.use('/favicon.ico', express.static(path.join(__dirname, 'static/images/favicon/favicon.ico')));


const routes = require('./routes/routes');
app.use('/', routes);

app.listen(8060, 'localhost', () => {
  console.log('Server is running on http://localhost:8060');
});
