const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
// Rutas para las páginas principales
router.get('/', homeController.getHome);

// Rutas para las páginas legales
router.get('/privacy', homeController.getPrivacyPolicy);
router.get('/cookies', homeController.getCookiesPolicy);
router.get('/terms', homeController.getTermsAndConditions);
router.get('/legal-notice', homeController.getLegalNotice);

// Ruta para el formulario de contacto
router.post('/contact', homeController.postContactForm);

// Ruta para manejar la descarga del CV
router.post('/download-cv', async (req, res) => {
    const token = req.body['h-captcha-response'];
    const secretKey = process.env.HCAPTCHA_SECRET;
    const lang = req.body.language;

    try {
        const response = await axios.post('https://hcaptcha.com/siteverify', null, {
            params: {
                response: token,
                secret: secretKey
            }
        });

        const data = response.data;

        if (data.success) {
            const filePath = `static/content/${lang}-cv.pdf`;
            const fileName = `Sebastian_GutierrezCV_${lang.toUpperCase()}.pdf`;

            res.download(filePath, fileName, (err) => {
                if (err) {
                    console.error('Error al descargar el archivo:', err);
                    res.status(500).send('Error interno del servidor');
                }
            });
        } else {
            res.status(400).send('Verificación fallida! Intenta nuevamente.');
        }
    } catch (error) {
        console.error('Error al verificar hCaptcha:', error);
        res.status(500).send('Error interno del servidor');
    }
});

module.exports = router;
