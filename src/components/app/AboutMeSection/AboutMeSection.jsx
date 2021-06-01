import React, { useRef } from 'react'
import { useTranslation } from "react-i18next";
import Technology from "./Technology/Technology";
import i18n from "i18next";

import htmlStack from "../../../img/htmlStack.png";
import reactStack from "../../../img/reactStack.png";
import typescriptStack from "../../../img/typescriptStack.png";
import javascriptStack from "../../../img/javascriptStack.png";
import gitStack from "../../../img/gitStack.png";
import sassStack from "../../../img/sassStack.png";
import cssStack from "../../../img/cssStack.png";

const AboutMeSection = () => {

    const { t } = useTranslation();

    return (
        <section className="section section__about-me section--primary section--under-running-man pt-8 pb-8">
            <header className="text-center">
                <h1 className="text-white">{t("Allow me to introduce myself")}.</h1>
                <h5 className="mt-1 text-white text-center">({t("You can scroll through this section")}.)</h5>
            </header>

            <article>
                <div>
                    <h3 className="text-center text-white text-normal mt-4">
                        {t("Short story of my life")}.
                    </h3>
                </div>
                <div>
                    <h4 className="text-center text-white mt-2">
                        {t("Hi. My name is Marcin Parda.")}
                    </h4>
                </div>
                <div className="mt-2">
                    <h4 className="text-center text-white">
                        {t("When I realized that running")}
                    </h4>
                </div>
                <div className="mt-2">
                    <h4 className="text-center text-white">
                        {t("I started IT studies")}
                    </h4>
                </div>
                <div className="mt-2 text-center">
                    <a
                        className="text-center"
                        href={i18n.language === "pl" ?
                            "https://www.canva.com/design/DAEfTVTcS3k/cFDS3vBGwhxY8noAcks25w/edit" :
                            "https://www.canva.com/design/DAEfgqlZ8Ls/5XoTXKw_IQ1iWfpJpi6jlQ/edit"
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h4 className="text-yellow text-underline">
                            {t("My CV")}
                        </h4>
                    </a>
                </div>
            </article>
            <article>
                <div><h3 className="text-center text-white text-normal mt-5">{t("Technologies I enjoy to use")}:</h3></div>
                <div className="technologies">
                    <Technology years={2} projects={10} technologyName={"React"} technologyImg={reactStack} />
                    <Technology years={1.5} projects={5} technologyName={"Typescript"} technologyImg={typescriptStack} />
                    <Technology years={4} projects={10} technologyName={"Javascript"} technologyImg={javascriptStack} />
                    <Technology years={3} projects={10} technologyName={"Sass"} technologyImg={sassStack} />
                    <Technology years={5} projects={10} technologyName={"CSS"} technologyImg={cssStack} />
                    <Technology years={5} projects={10} technologyName={"HTML"} technologyImg={htmlStack} />
                    <Technology years={4} projects={10} technologyName={"Git"} technologyImg={gitStack} />
                </div>

            </article>
        </section>
    );
}

export default AboutMeSection;
