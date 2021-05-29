import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
        resources: {
            en: {
                translation: {
                    "hi": "Hi, I'm Marcin",
                    "I program": "I program things to make the world a simpler place",
                    "And this is my portfolio": "And this is my portfolio",
                    "Allow me to introduce myself": "Allow me to introduce myself",
                    "You can scroll through this section": "You can scroll through this section, if you are only here to see my projects",
                    "Short story of my life": "Short story of my life",
                    "Hi. My name is Marcin Parda.": "Hi. My name is Marcin Parda. I am 23 years old and a React developer with one year of commercial experience. From the teenage years I was interested in creating games and athletics.",
                    "When I realized that running": "When I realized that running was not something I wanted to do professionally, I started training in the field of game design. By the end of high school, I got to know javascript and soaked up in this technology. At the beginning, I created browser games, then I became interested in designing websites.",
                    "I started IT studies": "I started IT studies. In 2020 after classes with Ermlab Softwere, I got an offer to start internships in this company and this is how my adventure with commercial programming of web applications began.",
                    "Projects": "Projects",
                    "Contact": "Contact"
                },
            },
            pl: {
                translation: {
                    "hi": "Cześć, jestem Marcin",
                    "I program": "Tworzę oprogramowanie, aby uczynić świat prostszym miejscem",
                    "And this is my portfolio": "A to jest moje portfolio",
                    "Allow me to introduce myself": "Pozwól, że się przedstawię",
                    "You can scroll through this section": "Możesz przewinąć tę sekcję, jeśli jesteś tu, aby zobaczyć moje projekty",
                    "Short story of my life": "Moja krótka historia",
                    "Hi. My name is Marcin Parda.": "Cześć. Nazywam się Marcin Parda. Jestem 23-letnim React deweloperem z rokiem doświadczenia komercyjnego. Od nastoletnich lat interesowałem się tworzeniem gier oraz lekkoatletyką.",
                    "When I realized that running": "Gdy zorientowałem się, że bieganie nie jest rzeczą, którą chcę zająć profesjonalnie zacząłem się dokształcać w dziedzinie game designu. Pod koniec liceum poznałem javascript i wsiąknąłem w tę technologię. Na początku tworzyłem gry przeglądarkowe, później zainteresowałem się projektowaniem stron internetowych.",
                    "I started IT studies": "Zacząłem studia informatyczne. Po zajęciach z firmą Ermlab Softwere dostałem ofertę rozpoczęcia staży w tej firmie i tak rozpoczęła się moja przygoda z komercyjnym programowaniem aplikacji webowych.",
                    "Projects": "Projekty",
                    "Contact": "Kontakt"
                },
            },
        },
        lng: "en",
        fallbackLng: "en",
        defaultNS: "translation",
    });

export default i18n;
