const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');

// Ruta para la página de inicio
router.get('/', homeController.getHome);

// Rutas para las páginas legales
router.get('/privacy', homeController.getPrivacyPolicy);
router.get('/cookies', homeController.getCookiesPolicy);
router.get('/terms', homeController.getTermsAndConditions);
router.get('/legal-notice', homeController.getLegalNotice);

// Ruta para manejar el formulario de contacto
router.post('/contact', homeController.postContactForm);

module.exports = router;
