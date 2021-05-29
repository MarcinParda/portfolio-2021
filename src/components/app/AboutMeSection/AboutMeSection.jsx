import React from 'react'
import { useTranslation } from "react-i18next";
import Technology from "./Technology/Technology";
import htmlStack from "../../../img/htmlStack.png";

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
                <div><h4 className="text-center text-white mt-2">{t("Hi. My name is Marcin Parda.")}</h4></div>
                <div className="mt-2"><h4 className="text-center text-white">{t("When I realized that running")}</h4></div>
                <div className="mt-2"><h4 className="text-center text-white">{t("I started IT studies")}</h4></div>
            </article>
            <article>
                <div><h3 className="text-center text-white text-normal mt-5">{t("My stack")}</h3></div>
                <div className="technologies">
                    <Technology years={2} projects={10} technologyName={"React"} technologyImg={htmlStack} />
                    <Technology years={1.5} projects={5} technologyName={"Typescript"} technologyImg={htmlStack} />
                    <Technology years={4} projects={10} technologyName={"Javascript"} technologyImg={htmlStack} />
                    <Technology years={3} projects={10} technologyName={"Sass"} technologyImg={htmlStack} />
                    <Technology years={5} projects={10} technologyName={"CSS"} technologyImg={htmlStack} />
                    <Technology years={5} projects={10} technologyName={"HTML"} technologyImg={htmlStack} />
                    <Technology years={4} projects={10} technologyName={"Git"} technologyImg={htmlStack} />
                </div>

            </article>
        </section>
    );
}

export default AboutMeSection;
