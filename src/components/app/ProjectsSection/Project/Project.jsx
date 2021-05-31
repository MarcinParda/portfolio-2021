import React from 'react'
import { useTranslation } from "react-i18next";

const Project = ({image, name, description, stack, siteLink, codeLink}) => {
    const { t } = useTranslation();

    return (
        <div className="project">
            <div className="project__div">
                <img className="img__project" alt="polish flag" src={image} />
            </div>
            <div className="project-info project__div">
                <div className="project-info__text text-center">
                    <h2>{t(name)}</h2>
                    <h5 className="project-info__stack">{stack}</h5>
                    <h4 className="mt-2">{t(description)}.</h4>
                </div>
                <div className="project-info__buttons">
                    <a
                        className="a__button a__button__with-icon a__button--primary a__button__small"
                        href={siteLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("View site")}<i className="fa fa__normal--external fa-external-link" />
                    </a>
                    <a
                        className="a__button a__button__with-icon a__button--primary a__button__small"
                        href={codeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {t("View code")}<i className="fa fa__normal fa-github" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Project;
