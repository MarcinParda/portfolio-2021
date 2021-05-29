import React from 'react'
import { useTranslation } from "react-i18next";

const AboutMeSection = () => {

    const { t } = useTranslation();

    return (
        <section className="section section__about-me section--primary section--under-running-man pt-8 pb-8">
            <header className="text-center">
                <h1 className="text-white">{t("Allow me to introduce myself")}.</h1>
                <h5 className="mt-1 text-white text-center">({t("You can scroll through this section")}.)</h5>
            </header>

            <article>
                <div><h3 className="text-center text-white text-normal mt-4">{t("Short story of my life")}</h3></div>
                <div><h3 className="text-center text-white mt-2">{t("Hi. My name is Marcin Parda.")}</h3></div>
                <div className="mt-2"><h3 className="text-center text-white">{t("When I realized that running")}</h3></div>
                <div className="mt-2"><h3 className="text-center text-white">{t("I started IT studies")}</h3></div>
            </article>
            <article>
                <div><h3 className="text-center text-white text-normal mt-5">{t("My stack")}</h3></div>
                <div><h3 className="text-center text-white mt-2">{t("Hi. My name is Marcin Parda.")}</h3></div>
                <div className="mt-2"><h3 className="text-center text-white">{t("When I realized that running")}</h3></div>
                <div className="mt-2"><h3 className="text-center text-white">{t("I started IT studies")}</h3></div>
            </article>
        </section>
    );
}

export default AboutMeSection;
