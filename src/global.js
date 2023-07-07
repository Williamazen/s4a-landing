import en from './locale/en';
import pt from './locale/pt';

const colors = {
    "primary": "#1DA492",
    "onSecondary": "#FFFFFF",
    "secondary": "#11284B",
    "offWhite": "#1DA492"
}

const links = {
    "playStore": "https://play.google.com",
    "appStore": "https://www.apple.com/app-store/",
    "instagram": "https://www.instagram.com/ambigramapt/",
    "facebook": "https://facebook.com/ambigramaportugal/",
    "email": "mailto:danielalves@ambigrama.pt?subject=Spaces4Us%20-%20Contacto",
    "github": "https://github.com/Williamazen/spaces4all"
}

const locale = navigator.language.split('-')[0] === "pt" ? "pt" : "en"
const language = locale === "pt" ? pt : en;

export { colors, links, language, locale }