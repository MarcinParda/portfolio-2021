import React from 'react'
import { useTranslation } from "react-i18next";

const Technology = ({years, projects, technologyName, technologyImg}) => {

    const { t } = useTranslation();

    return (
        <div className="technology mt-2 text-center">
            <img className="img__technology" src={technologyImg} alt={`${technologyName} technology`} />
            <div><h3 className="text-center text-white text-bold mt-1">{t(technologyName)}</h3></div>
            <div><h5 className="text-center text-white">{t("Years of experience")}: <span className="text-bold text-white">{t(years >= 5 ? "5+" : years)}</span></h5></div>
            <div><h5 className="text-center text-white">{t("Projects with this technology")}: <span className="text-bold text-white">{t(projects >= 10 ? "10+" : projects)}</span></h5></div>
        </div>
    );
}

export default Technology;
