const path = require('path');

exports.getHome = (req, res) => {
    console.log('Rendering Home Page');
    res.render('index', {
        t: res.__,
        language: req.getLocale(),
    });
};

exports.getPrivacyPolicy = (req, res) => {
    console.log('Rendering Privacy Policy Page');
    res.render('privacy', {
        t: res.__,
        language: req.getLocale(),
    });
};

exports.getCookiesPolicy = (req, res) => {
    console.log('Rendering Cookies Policy Page');
    res.render('cookies', {
        t: res.__,
        language: req.getLocale(),
    });
};

exports.getTermsAndConditions = (req, res) => {
    console.log('Rendering Terms and Conditions Page');
    res.render('terms', {
        t: res.__,
        language: req.getLocale(),
    });
};

exports.getLegalNotice = (req, res) => {
    console.log('Rendering Legal Notice Page');
    res.render('legal-notice', {
        t: res.__,
        language: req.getLocale(),
    });
};

exports.postContactForm = (req, res) => {
    const { name, email, message } = req.body;
    console.log(`Received contact form from ${name} (${email}): ${message}`);
    res.status(200).json({ message: 'Thank you for contacting us! We will get back to you soon.' });
};
