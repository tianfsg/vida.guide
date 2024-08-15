// Definimos las traducciones
const translations = {
    en: {
        header: "Hi, I'm",
        name: "Sebastian Fco. Gutierrez Rojas",
        role: "Software Engineer",
        description: "Specialist in Big Data and Deep Learning. I love solving complex problems and creating innovative solutions...",
        CV: "Preview CV",
        talk: "Let's Talk",
        lang: "EN",
        flag: "/static/images/flags/EN/24-2.png",
        menuHome: "Home",
        menuAbout: "Journey",
        menuSkills: "Skills",
        menuPortfolio: "Portfolio",
        menuContact: "Contact",
        journeyTitle: "My Journey",
        educationTitle: "Education",
        experienceTitle: "Experience",
        educationDetails: [
            { title: "Software Engineering - U-tad", details: "Graduated: 2024. Specialization in Big Data with strong skills in full-stack development, cloud computing, and distributed systems." },
        ],
        experienceDetails: [
            { title: "Product and Service Developer - Worksync.ai", details: "January 2024 – Currently. Developed and launched an AI-powered Chrome extension to streamline job application processes." },
            { title: "Professor of IOS - U-tad", details: "September 2023 – Currently. Developed and delivered course materials in operating systems, facilitating a collaborative learning environment." },
            { title: "Web Development and Design Lead - Sleepzzone", details: "June 2022 –  September 2022. Redesigned the company's landing page and e-commerce platform using Webflow, improving user experience and functionality." }
        ],
        skillsTitle: "My Skills",
        technicalSkills: "Technical Skills",
        complementarySkills: "Complementary Skills",
        contactTitle: "Contact Me",
        contactDescription: "Feel free to reach out to me via email or connect on social media.",
        emailLabel: "Email:",
        phoneLabel: "Phone:",
        footerPrivacy: "Privacy",
        footerCookies: "Cookies",
        footerTerms: "Terms and Conditions",
        footerLegal: "Legal Notice"
    },
    es: {
        header: "Hola, Soy",
        name: "Sebastián Fco. Gutiérrez Rojas",
        role: "Ingeniero de Software",
        description: "Especialista en Big Data y Deep Learning. Me encanta resolver problemas complejos y crear soluciones innovadoras...",
        CV: "Visualizar CV",
        talk: "Conversemos",
        lang: "ES",
        flag: "/static/images/flags/ES/24.png",
        menuHome: "Inicio",
        menuAbout: "Trayectoria",
        menuSkills: "Habilidades",
        menuPortfolio: "Portafolio",
        menuContact: "Contacto",
        journeyTitle: "Mi Trayectoria",
        educationTitle: "Educación",
        experienceTitle: "Experiencia",
        educationDetails: [
            { title: "Ingeniería de Software - U-tad", details: "Graduado: 2024. Especialización en Big Data con fuertes habilidades en desarrollo full-stack, computación en la nube y sistemas distribuidos." },
        ],
        experienceDetails: [
            { title: "Desarrollador de Productos y Servicios - Worksync.ai", details: "Enero 2024 – Actualmente. Desarrollé y lancé una extensión de Chrome impulsada por IA para optimizar los procesos de solicitud de empleo." },
            { title: "Profesor de IOS - U-tad", details: "Septiembre 2023 – Actualmente. Desarrollé y entregué materiales de curso en sistemas operativos, facilitando un entorno de aprendizaje colaborativo." },
            { title: "Líder de Desarrollo Web y Diseño - Sleepzzone", details: "Junio 2022 – Septiembre 2022. Rediseñé la página de aterrizaje y la plataforma de comercio electrónico de la empresa utilizando Webflow, mejorando la experiencia del usuario y la funcionalidad." }
        ],
        skillsTitle: "Mis Habilidades",
        technicalSkills: "Habilidades Técnicas",
        complementarySkills: "Habilidades Complementarias",
        contactTitle: "Contáctame",
        contactDescription: "No dudes en comunicarte conmigo por correo electrónico o conectarte en las redes sociales.",
        emailLabel: "Correo electrónico:",
        phoneLabel: "Teléfono:",
        footerPrivacy: "Privacidad",
        footerCookies: "Cookies",
        footerTerms: "Términos y Condiciones",
        footerLegal: "Aviso Legal"
    },
    de: {
        header: "Hi, Ich bin",
        name: "Sebastián Fco. Gutiérrez Rojas",
        role: "Softwareingenieur",
        description: "Spezialist für Big Data und Deep Learning. Ich liebe es, komplexe Probleme zu lösen und innovative Lösungen zu schaffen...",
        CV: "Vorschau Lebenslauf",
        talk: "Lass uns reden",
        lang: "DE",
        flag: "/static/images/flags/DE/24-3.png",
        menuHome: "Startseite",
        menuAbout: "Reise",
        menuSkills: "Fähigkeiten",
        menuPortfolio: "Portfolio",
        menuContact: "Kontakt",
        journeyTitle: "Meine Reise",
        educationTitle: "Bildung",
        experienceTitle: "Erfahrung",
        educationDetails: [
            { title: "Softwaretechnik - U-tad", details: "Absolviert: 2024. Spezialisierung auf Big Data mit starken Fähigkeiten in der Full-Stack-Entwicklung, Cloud-Computing und verteilten Systemen." },
        ],
        experienceDetails: [
            { title: "Produkt- und Servicentwickler - Worksync.ai", details: "Januar 2024 – Gegenwart. Entwicklung und Einführung einer KI-gestützten Chrome-Erweiterung zur Optimierung des Bewerbungsprozesses." },
            { title: "Professor für IOS - U-tad", details: "September 2023 – Gegenwart. Entwicklung und Bereitstellung von Kursmaterialien in Betriebssystemen und Förderung einer kollaborativen Lernumgebung." },
            { title: "Leiter der Webentwicklung und des Designs - Sleepzzone", details: "Juni 2022 – September 2022. Neugestaltung der Landingpage und der E-Commerce-Plattform des Unternehmens mit Webflow zur Verbesserung der Benutzererfahrung und der Funktionalität." }
        ],
        skillsTitle: "Meine Fähigkeiten",
        technicalSkills: "Technische Fähigkeiten",
        complementarySkills: "Ergänzende Fähigkeiten",
        contactTitle: "Kontaktieren Sie mich",
        contactDescription: "Zögern Sie nicht, mich per E-Mail zu kontaktieren oder in den sozialen Medien zu verbinden.",
        emailLabel: "E-Mail:",
        phoneLabel: "Telefon:",
        footerPrivacy: "Datenschutz",
        footerCookies: "Cookies",
        footerTerms: "Geschäftsbedingungen",
        footerLegal: "Rechtlicher Hinweis"
    }
};


// Función para actualizar el contenido según el idioma
function setLanguage(language) {
    const translation = translations[language.toLowerCase()];

    if (!translation) {
        console.error(`No translation found for language: ${language}`);
        return;
    }

    // Actualiza los textos en la página
    const aboutHeader = document.querySelector('.about-header');
    const name = document.querySelector('.name');
    const role = document.querySelector('.role');
    const description = document.querySelector('.description');
    const CVButton = document.querySelector('.cv-button');
    const TalkButton = document.querySelector('.talk-button');


    if (aboutHeader) aboutHeader.textContent = translation.header;
    if (name) name.textContent = translation.name;
    if (role) role.textContent = translation.role;
    if (description) description.textContent = translation.description;
    if (CVButton) CVButton.textContent = translation.CV;
    if (TalkButton) TalkButton.textContent = translation.talk;


    // Menu items
    const homeSection = document.querySelector('[aria-label="Home Section"]');
    const aboutSection = document.querySelector('[aria-label="About Section"]');
    const skillsSection = document.querySelector('[aria-label="Skills Section"]');
    const portfolioSection = document.querySelector('[aria-label="Portfolio Section"]');
    const contactSection = document.querySelector('[aria-label="Contact Section"]');

    if (homeSection) homeSection.textContent = translation.menuHome;
    if (aboutSection) aboutSection.textContent = translation.menuAbout;
    if (skillsSection) skillsSection.textContent = translation.menuSkills;
    if (portfolioSection) portfolioSection.textContent = translation.menuPortfolio;
    if (contactSection) contactSection.textContent = translation.menuContact;

    // Journey section
    const journeyTitle = document.querySelector('#my-journey h2');
    const educationTitle = document.querySelector('.education-title');
    const experienceTitle = document.querySelector('.experience-title');

    if (journeyTitle) journeyTitle.textContent = translation.journeyTitle;
    if (educationTitle) educationTitle.textContent = translation.educationTitle;
    if (experienceTitle) experienceTitle.textContent = translation.experienceTitle;

    const educationItems = document.querySelectorAll('.education-item');
    translation.educationDetails.forEach((item, index) => {
        if (educationItems[index]) {
            educationItems[index].querySelector('h4').textContent = item.title;
            educationItems[index].querySelector('p').textContent = item.details;
        }
    });

    const experienceItems = document.querySelectorAll('.experience-item');
    translation.experienceDetails.forEach((item, index) => {
        if (experienceItems[index]) {
            experienceItems[index].querySelector('h4').textContent = item.title;
            experienceItems[index].querySelector('p').textContent = item.details;
        }
    });

    // Skills section
    const skillsTitle = document.querySelector('#my-skills h2');
    const technicalSkillsTitle = document.querySelector('#technical-skill h3');
    const complementarySkillsTitle = document.querySelector('#complementary-skill h3');

    if (skillsTitle) skillsTitle.textContent = translation.skillsTitle;
    if (technicalSkillsTitle) technicalSkillsTitle.textContent = translation.technicalSkills;
    if (complementarySkillsTitle) complementarySkillsTitle.textContent = translation.complementarySkills;

    // Contact section
    const contactTitle = document.querySelector('#contact h2');
    const contactDescription = document.querySelector('#contact p');
    const emailLabel = document.querySelector('#contact strong:nth-of-type(1)');
    const phoneLabel = document.querySelector('#contact strong:nth-of-type(2)');

    if (contactTitle) contactTitle.textContent = translation.contactTitle;
    if (contactDescription) contactDescription.textContent = translation.contactDescription;
    if (emailLabel) emailLabel.textContent = translation.emailLabel;
    if (phoneLabel) phoneLabel.textContent = translation.phoneLabel;

    // Footer
    const footerLinks = document.querySelectorAll('footer #terms a');
    if (footerLinks.length > 0) {
        footerLinks[0].textContent = translation.footerPrivacy;
        footerLinks[1].textContent = translation.footerCookies;
        footerLinks[2].textContent = translation.footerTerms;
        footerLinks[3].textContent = translation.footerLegal;
    }

    // Cambia la bandera y el texto del botón de idioma
    const languageButton = document.querySelector('#languageButton');
    const languageButtonImage = languageButton?.querySelector('img');
    const languageButtonText = languageButton?.querySelector('span');

    if (languageButtonImage && languageButtonText) {
        languageButtonImage.src = translation.flag;
        languageButtonText.textContent = translation.lang;
    } else {
        console.error('No se encontraron los elementos del botón de idioma');
    }

    // Guarda el idioma en localStorage
    safeSetLocalStorage('preferredLanguage', language);

    // Cierra el menú de idiomas
    const languageMenu = document.getElementById('languageMenu');
    if (languageMenu) languageMenu.classList.add('hidden');
}

// Manejo seguro de localStorage
function safeSetLocalStorage(key, value) {
    try {
        localStorage.setItem(key, value);
    } catch (e) {
        console.warn('localStorage no está disponible o accesible:', e);
    }
}

function safeGetLocalStorage(key, defaultValue) {
    try {
        return localStorage.getItem(key) || defaultValue;
    } catch (e) {
        console.warn('localStorage no está disponible o accesible:', e);
        return defaultValue;
    }
}

// Verifica el idioma preferido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const preferredLanguage = safeGetLocalStorage('preferredLanguage', 'en');
    setLanguage(preferredLanguage);
});

// Añadir evento para el cambio de idioma
document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => {
        const newLanguage = button.getAttribute('data-language');
        setLanguage(newLanguage);
    });
});
