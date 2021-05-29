import React from 'react';
import { useTranslation } from "react-i18next";

const NavBar = () => {
    const { t } = useTranslation();
    return (
        <nav className="nav">
            <span className="span__button">
                <i className="fa fa__big fa-github" />
            </span>
            <div>
            <button className="button button__small button--primary">
                {t("Projects")}
            </button>
             <button className="button button__small button--primary ml-1">
                {t("Contact")}
            </button>
            </div>
        </nav>
    );
}

export default NavBar;
