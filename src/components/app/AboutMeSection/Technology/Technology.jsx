import React from 'react'
import { useTranslation } from "react-i18next";

const Technology = ({years, technologyName, technologyImg}) => {

    const { t } = useTranslation();

    return (
        <div className="technology mt-6 text-center">
            <img className="img__technology" src={technologyImg} alt={`${technologyName} technology`} />
            <div><h4 className="text-center text-white text-bold mt-1">{t(technologyName)}</h4></div>
            <div><h5 className="text-center text-white mt-1">{t("Years of experience")}: <span className="text-bold text-white">{years >= 5 ? "5+" : years}</span></h5></div>
        </div>
    );
}

export default Technology;
