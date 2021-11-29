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
                    "When I realized that running": "When I realized that running was not something I wanted to do professionally, I started training in the field of game design. By the end of high school, I got to know javascript and soaked up in web development.",
                    "I started IT studies": "I have been dealing with programming professionally since 2020. In my work, I create a web application that connects to REST API. I can program object-oriented. I adhere to the SOLID and DRY rules. I regularly check news in the programming world of the frontend. I am fluent in English at B2 level. I am happy to attend IT fairs and listen to a few programming podcasts.",
                    "Projects": "Projects",
                    "Contact": "Contact",
                    "Made with passion": "Made with passion",
                    "My projects": "My projects",
                    "Amarok description": "Home page for game Amarok: Blood of the north",
                    "Billing description": "Working time recording application. Data for logging on the repository (view code)",
                    "LinkedIn Clone description": "A clone of the linedIn website, with the functionality of creating an account and sending posts",
                    "Go browser description": "Browser based on Google Search API. Has a light & dark mode. Deployed on Netlify",
                    "Firebase superchat description": "Superchat with the functionality of creating account via google and posting messages",
                    "Asteroid description": "A copy of the game Asteroid from 1979",
                    "Hangman game description": "Hangman game with 10 different passwords to guess pre-loaded",
                    "Tweenmax description": "Website created using the tweenmax library, presenting the album Wilczy humor",
                    "Old portfolio description": "My portfolio from 2020",
                    "Memo gwent description": "A memory game inspired by the card game Gwent",
                    "Discord description": "Discord inspired dashboard made with Tailwind CSS. Deployed with firebase",
                    "Mockups description": "Mockups that I created for a project on a university subject"
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
                    "When I realized that running": "Gdy zorientowałem się, że bieganie nie jest rzeczą, którą chcę zająć profesjonalnie zacząłem się dokształcać w dziedzinie game designu. Pod koniec liceum poznałem javascript i wsiąknąłem w tworzenie stron internetowych.",
                    "I started IT studies": "Od połowy 2020 roku zajmuję się programowaniem zawodowo. W swojej pracy tworzę aplikację internetowe łączące się z REST API. Potrafię programować obiektowo. Stosuję się do zasad SOLID i DRY. Regularnie sprawdzam nowinki w programistycznym świecie frontendu. Swobodnie posługuję się językiem angielskim na poziomie B2. Chętnie uczestniczę na targach IT i słucham kilku programistycznych podcastów.",
                    "Projects": "Projekty",
                    "Contact": "Kontakt",
                    "Made with passion": "Stworzone z pasją",
                    "Years of experience": "Lata doświadczenia",
                    "Projects with this technology": "Ilość projektów w tej technologii",
                    "Technologies I enjoy to use": "Technologie, w których lubię pracować",
                    "Amarok page": "Strona Amarok",
                    "My projects": "Moje projekty",
                    "Amarok description": "Strona domowa gry Amarok: Krew północy",
                    "View site": "Strona",
                    "View code": "Kod",
                    "Billing app": "Rejestracja czasu pracy",
                    "Billing description": "Aplikacja rejestrująca czas pracy. Dane do logowania na repozutorium (kod)",
                    "LinkedIn Clone description": "Klon strony linedIn, z funkcjonalnością założenia konta i wysyłania postów",
                    "Go browser description": "Przeglądarka treści zbudowana przy pomocy Google Search API. Posiada tryb nocny. Postawiona na Netlify",
                    "Firebase superchat description": "Superchat z funkcjonalnością tworzenia konta przez google oraz wysyłania wiadomości",
                    "Asteroid game": "Gra Asteroid",
                    "Asteroid description": "Kopia gry Asteroid z 1979",
                    "Hangman game": "Gra wisielec",
                    "Hangman game description": "Gra wisielec z wgranymi 10 różnymi hasłami do zgadnięcia",
                    "Tweenmax page": "Strona tweenmax",
                    "Tweenmax description": "Strona stworzona przy użyciu biblioteki tweenmax, prezentująca album Wilczy humor",
                    "Old portfolio": "Stare portfolio",
                    "Old portfolio description": "Moje portfolio z 2020 roku",
                    "Memo gwent game": "Gra memory",
                    "Memo gwent description": "Gra memory inspirowana grą karcianą Gwint",
                    "Todo app": "Aplikacja todo",
                    "Discord description": "Dashboard inspirowany aplikacją Discord stworzony przy użyciu Tailwind CSS. Zdeployowany za pomocą firebase",
                    "Project mockups": "Mockupy do projektu",
                    "Mockups description": "Mockupy, które tworzyłem do projektu na przedmiocie uczelnianym",
                    "My CV": "Moje CV",
                    "Number": "Numer"
                },
            },
        },
        lng: "en",
        fallbackLng: "en",
        defaultNS: "translation",
    });

export default i18n;
