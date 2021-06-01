import React from 'react';
import { useTranslation } from "react-i18next";

const NavBar = ({executeScroll}) => {
    const { t } = useTranslation();

    return (
        <nav className="nav">
            <span className="span__button">
                <a
                    href={"https://github.com/MarcinParda"}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fa fa__big fa-github" />
                </a>
            </span>
            <div>
            <button onClick={executeScroll} className="button button__small button--primary">
                {t("Projects")}
            </button>
            </div>
        </nav>
    );
}

export default NavBar;
