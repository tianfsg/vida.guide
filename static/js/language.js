// Definir idiomas soportados globalmente
const supportedLanguages = ['en', 'es', 'de'];

// Funciones auxiliares para manejo seguro de localStorage
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
// Función para establecer el idioma
window.setLanguage = function (lang) {
    const supportedLanguages = ['en', 'es', 'de'];
    if (!supportedLanguages.includes(lang)) lang = 'en';

    fetch(`/static/lang/${lang}.json`)
        .then(response => response.json())
        .then(translation => {
            // Actualiza los textos en la landing page
            const aboutHeader = document.querySelector('.about-header');
            if (aboutHeader) {
                document.querySelector('.about-header').textContent = translation.header;
                document.querySelector('.name').textContent = translation.name;
                document.querySelector('.role').textContent = translation.role;
                document.querySelector('.description').textContent = translation.description;
                document.querySelector('.cv-button').textContent = translation.CV;
                document.querySelector('.talk-button').textContent = translation.talk;

                document.querySelector('[aria-label="Home Section"]').textContent = translation.menuHome;
                document.querySelector('[aria-label="About Section"]').textContent = translation.menuAbout;
                document.querySelector('[aria-label="Skills Section"]').textContent = translation.menuSkills;
                // document.querySelector('[aria-label="Portfolio Section"]').textContent = translation.menuPortfolio;
                document.querySelector('[aria-label="Contact Section"]').textContent = translation.menuContact;

                document.querySelector('#my-journey h2').textContent = translation.journeyTitle;
                document.querySelector('.education-title').textContent = translation.educationTitle;
                document.querySelector('.experience-title').textContent = translation.experienceTitle;

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

                document.querySelector('#my-skills h2').textContent = translation.skillsTitle;
                document.querySelector('#technical-skill h3').textContent = translation.technicalSkills;
                document.querySelector('#complementary-skill h3').textContent = translation.complementarySkills;

                document.querySelector('#contact h2').textContent = translation.contactTitle;
                document.querySelector('#contact p').textContent = translation.contactDescription;
                document.querySelector('#contact strong:nth-of-type(1)').textContent = translation.emailLabel;
                document.querySelector('#contact strong:nth-of-type(2)').textContent = translation.phoneLabel;

                const footerLinks = document.querySelectorAll('footer #terms a');
                if (footerLinks.length > 0) {
                    footerLinks[0].textContent = translation.footerPrivacy;
                    footerLinks[1].textContent = translation.footerCookies;
                    footerLinks[2].textContent = translation.footerTerms;
                    footerLinks[3].textContent = translation.footerLegal;
                }
            }

            // Aplicar traducciones en la página de Cookies
            const cookiesTitle = document.querySelector('#cookiesTitle');
            if (cookiesTitle) {
                document.querySelector('#cookiesTitle').textContent = translation.cookies_policy.title;
                document.querySelector('#whatAreCookies').textContent = translation.cookies_policy.what_are_cookies;
                document.querySelector('#whatAreCookiesDetails').textContent = translation.cookies_policy.what_are_cookies_details;
                document.querySelector('#howWeUseCookies').textContent = translation.cookies_policy.how_we_use_cookies;
                document.querySelector('#howWeUseCookiesDetails').textContent = translation.cookies_policy.how_we_use_cookies_details;
                document.querySelector('#typesOfCookies').textContent = translation.cookies_policy.types_of_cookies;
                document.querySelector('#typesOfCookiesDetails').textContent = translation.cookies_policy.types_of_cookies_details;
                document.querySelector('#yourChoices').textContent = translation.cookies_policy.your_choices;
                document.querySelector('#yourChoicesDetails').textContent = translation.cookies_policy.your_choices_details;
                document.querySelector('#contactUs').textContent = translation.cookies_policy.contact_us;
                document.querySelector('#contactUsDetails').innerHTML = translation.cookies_policy.contact_us_details;
            }

            // Aplicar traducciones en otras páginas (Legal Notice, Terms, Privacy)
            const legalNoticeTitle = document.querySelector('#legalNoticeTitle');
            if (legalNoticeTitle) {
                document.querySelector('#legalNoticeTitle').textContent = translation.legal_notice.title;
                document.querySelector('#legalNoticeContent').innerHTML = translation.legal_notice.content;
                document.querySelector('#websiteOwner').textContent = translation.legal_notice.website_owner;
                document.querySelector('#websiteOwnerDetails').innerHTML = translation.legal_notice.website_owner_details;
                document.querySelector('#disclaimer').textContent = translation.legal_notice.disclaimer;
                document.querySelector('#disclaimerDetails').innerHTML = translation.legal_notice.disclaimer_details;
                document.querySelector('#governingLaw').textContent = translation.legal_notice.governing_law;
                document.querySelector('#governingLawDetails').innerHTML = translation.legal_notice.governing_law_details;
            }

            const termsTitle = document.querySelector('#termsTitle');
            if (termsTitle) {
                document.querySelector('#termsTitle').textContent = translation.terms_and_conditions.title;
                document.querySelector('#termsContent').innerHTML = translation.terms_and_conditions.content;
                document.querySelector('#useOfSite').textContent = translation.terms_and_conditions.use_of_site;
                document.querySelector('#useOfSiteDetails').innerHTML = translation.terms_and_conditions.use_of_site_details;
                document.querySelector('#intellectualProperty').textContent = translation.terms_and_conditions.intellectual_property;
                document.querySelector('#intellectualPropertyDetails').innerHTML = translation.terms_and_conditions.intellectual_property_details;
                document.querySelector('#limitationOfLiability').textContent = translation.terms_and_conditions.limitation_of_liability;
                document.querySelector('#limitationOfLiabilityDetails').innerHTML = translation.terms_and_conditions.limitation_of_liability_details;
                document.querySelector('#changesToTerms').textContent = translation.terms_and_conditions.changes_to_terms;
                document.querySelector('#changesToTermsDetails').innerHTML = translation.terms_and_conditions.changes_to_terms_details;
            }

            const privacyTitle = document.querySelector('#privacyTitle');
            if (privacyTitle) {
                document.querySelector('#privacyTitle').textContent = translation.privacy_policy.title;
                document.querySelector('#privacyContent').innerHTML = translation.privacy_policy.content;
                document.querySelector('#informationWeCollect').textContent = translation.privacy_policy.information_we_collect;
                document.querySelector('#informationWeCollectDetails').innerHTML = translation.privacy_policy.information_we_collect_details;
                document.querySelector('#howWeUseInformation').textContent = translation.privacy_policy.how_we_use_information;
                document.querySelector('#howWeUseInformationDetails').innerHTML = translation.privacy_policy.how_we_use_information_details;
                document.querySelector('#cookies').textContent = translation.privacy_policy.cookies;
                document.querySelector('#cookiesDetails').innerHTML = translation.privacy_policy.cookies_details;
                document.querySelector('#yourRights').textContent = translation.privacy_policy.your_rights;
                document.querySelector('#yourRightsDetails').innerHTML = translation.privacy_policy.your_rights_details;
            }

            // Cambia la bandera y el texto del botón de idioma
            const languageButton = document.querySelector('#languageButton img');
            const languageButtonText = document.querySelector('#languageButton span');
            if (languageButton) {
                languageButton.src = translation.flag;
                languageButtonText.textContent = translation.lang;
            }

            safeSetLocalStorage('preferredLanguage', lang);

            // Cierra el menú de idiomas
            const languageMenu = document.getElementById('languageMenu');
            if (languageMenu) {
                languageMenu.classList.add('hidden');
            }
        })
        .catch(error => console.error('Error loading language file:', error));
}

// Verifica el idioma preferido al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    let preferredLanguage = safeGetLocalStorage('preferredLanguage', null);

    if (!preferredLanguage) {
        // Si no hay idioma almacenado, obtenemos el idioma del navegador
        preferredLanguage = navigator.language.split('-')[0];
        console.log(`No language in localStorage, detected browser language: ${preferredLanguage}`);
    }

    if (!supportedLanguages.includes(preferredLanguage)) {
        preferredLanguage = 'en'; // Fallback to English if the detected language is not supported
    }

    console.log(`Setting language to ${preferredLanguage}`);
    setLanguage(preferredLanguage);
});

// Añadir evento para el cambio de idioma
document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => {
        const newLanguage = button.getAttribute('data-language');
        console.log('Language selected:', newLanguage);
        setLanguage(newLanguage);
    });
});
