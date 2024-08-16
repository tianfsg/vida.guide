const path = require('path');

exports.getHome = (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
};

exports.getPrivacyPolicy = (req, res) => {
    res.sendFile(path.join(__dirname, '/privacy.html'));
};

exports.getCookiesPolicy = (req, res) => {
    res.sendFile(path.join(__dirname, '/cookies.html'));
};

exports.getTermsAndConditions = (req, res) => {
    res.sendFile(path.join(__dirname, '/terms.html'));
};

exports.getLegalNotice = (req, res) => {
    res.sendFile(path.join(__dirname, '/legal-notice.html'));
};

exports.postContactForm = (req, res) => {
    const { name, email, message } = req.body;

    // Lógica para manejar el formulario de contacto, por ejemplo, enviar un correo o guardar en la base de datos.
    // Ejemplo básico de respuesta:
    console.log(`Received contact form from ${name} (${email}): ${message}`);
    
    res.status(200).json({ message: 'Thank you for contacting us! We will get back to you soon.' });
};
