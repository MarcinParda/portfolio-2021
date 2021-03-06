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
                    "Hi. My name is Marcin Parda.": "Hi. My name is Marcin Parda. I am 23 years old and a React developer since 2020. From the teenage years I was interested in creating games and athletics.",
                    "When I realized that running": "When I realized that running was not something I wanted to do professionally, I started training in the field of game design. By the end of high school, I got to know javascript and soaked up in web development.",
                    "I started IT studies": "In my work, I create a web applications. I adhere to the SOLID and DRY rules and regularly check news in the programming world of the frontend. I speak English well at B2 level. I am happy to attend IT fairs and listen to a few programming podcasts.",
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
                    "Mockups description": "Mockups that I created for a project on a university subject",
                    "Blog description": "Blog created using GraphCMS and Next.js. New content is added to it from time to time"
                },
            },
            pl: {
                translation: {
                    "hi": "Cze????, jestem Marcin",
                    "I program": "Tworz?? oprogramowanie, aby uczyni?? ??wiat prostszym miejscem",
                    "And this is my portfolio": "A to jest moje portfolio",
                    "Allow me to introduce myself": "Pozw??l, ??e si?? przedstawi??",
                    "You can scroll through this section": "Mo??esz przewin???? t?? sekcj??, je??li jeste?? tu, aby zobaczy?? moje projekty",
                    "Short story of my life": "Moja kr??tka historia",
                    "Hi. My name is Marcin Parda.": "Cze????. Nazywam si?? Marcin Parda. Jestem 23-letnim React programist?? pracuj??cym w bran??y od 2020 roku. Od nastoletnich lat interesowa??em si?? tworzeniem gier oraz lekkoatletyk??.",
                    "When I realized that running": "Gdy zorientowa??em si??, ??e bieganie nie jest rzecz??, kt??r?? chc?? zaj???? profesjonalnie zacz????em si?? dokszta??ca?? w dziedzinie game designu. Na pocz??tku studi??w pozna??em javascript i wsi??kn????em w tworzenie stron internetowych.",
                    "I started IT studies": "W swojej pracy tworz?? aplikacje internetowe. Stosuj?? si?? do zasad SOLID i DRY. Regularnie sprawdzam nowinki w programistycznym ??wiecie frontendu. Pos??uguj?? si?? dobrze j??zykiem angielskim na poziomie B2. Ch??tnie uczestnicz?? na targach IT i s??ucham kilku programistycznych podcast??w.",
                    "Projects": "Projekty",
                    "Contact": "Kontakt",
                    "Made with passion": "Stworzone z pasj??",
                    "Years of experience": "Lata do??wiadczenia",
                    "Projects with this technology": "Ilo???? projekt??w w tej technologii",
                    "Technologies I enjoy to use": "Technologie, w kt??rych lubi?? pracowa??",
                    "Amarok page": "Strona Amarok",
                    "My projects": "Moje projekty",
                    "Amarok description": "Strona domowa gry Amarok: Krew p????nocy",
                    "View site": "Strona",
                    "View code": "Kod",
                    "Billing app": "Rejestracja czasu pracy",
                    "Billing description": "Aplikacja rejestruj??ca czas pracy. Dane do logowania na repozutorium (kod)",
                    "LinkedIn Clone description": "Klon strony linedIn, z funkcjonalno??ci?? za??o??enia konta i wysy??ania post??w",
                    "Go browser description": "Przegl??darka tre??ci zbudowana przy pomocy Google Search API. Posiada tryb nocny. Postawiona na Netlify",
                    "Firebase superchat description": "Superchat z funkcjonalno??ci?? tworzenia konta przez google oraz wysy??ania wiadomo??ci",
                    "Asteroid game": "Gra Asteroid",
                    "Asteroid description": "Kopia gry Asteroid z 1979",
                    "Hangman game": "Gra wisielec",
                    "Hangman game description": "Gra wisielec z wgranymi 10 r????nymi has??ami do zgadni??cia",
                    "Tweenmax page": "Strona tweenmax",
                    "Tweenmax description": "Strona stworzona przy u??yciu biblioteki tweenmax, prezentuj??ca album Wilczy humor",
                    "Old portfolio": "Stare portfolio",
                    "Old portfolio description": "Moje portfolio z 2020 roku",
                    "Memo gwent game": "Gra memory",
                    "Memo gwent description": "Gra memory inspirowana gr?? karcian?? Gwint",
                    "Todo app": "Aplikacja todo",
                    "Discord description": "Dashboard inspirowany aplikacj?? Discord stworzony przy u??yciu Tailwind CSS. Zdeployowany za pomoc?? firebase",
                    "Project mockups": "Mockupy do projektu",
                    "Mockups description": "Mockupy, kt??re tworzy??em do projektu na przedmiocie uczelnianym",
                    "Blog description": "Blog stworzony przy u??yciu GraphCMS i Next.js. Od czasu do czasu pojawiaj?? si?? na nim nowe materia??y",
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
