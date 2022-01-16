import React from 'react';
import face from '../../../img/face.png';
import {useTranslation} from "react-i18next";
import plFlag from "../../../img/plFlag.png";
import ukFlag from "../../../img/enFlag.png";

const WelcomeSection = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng).then(() => {});
    };

    return (
        <section className="section mt-5">
            <header className="text-center"><h2>{t("hi")}.</h2></header>
            <div className="text-center mt-2">
                <img className="img__face" alt="my face :D" src={face} />
            </div>
            <article className="text-center">
                <h1 className="mt-2">React Developer</h1>
                <div className="mt-2">{t("I program")}.</div>
                <div className="mt-1 text-bold">{t("And this is my portfolio")}.</div>
                <div className="mt-3 flex row-flex center-flex">
                    <span
                        className={`span__button span__button--icon-with-span ml-1`}
                        onClick={() => changeLanguage('en')}
                    >
                        <img className="img__icon" alt="polish flag" src={ukFlag} />
                        <span className={`${i18n.language === "en" ? "span__button--selected" : ""} pl-1`}>English</span>
                    </span>
                    <span className="pl-1">|</span>
                    <span
                        className={`span__button span__button--icon-with-span pl-1`}
                        onClick={() => changeLanguage('pl')}
                    >
                        <img className="img__icon" alt="polish flag" src={plFlag} />
                        <span className={`${i18n.language === "pl" ? "span__button--selected" : ""} pl-1`}>Polski</span>
                    </span>
                </div>
            </article>
        </section>
    );
}

export default WelcomeSection;
