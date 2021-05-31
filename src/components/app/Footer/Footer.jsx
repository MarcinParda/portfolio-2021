import React from 'react';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer mt-20">
            <div className="mt-6">
                <span className="text-white">{t("Made with passion")}</span>
                <div>
                    <span className="text-white">© 2021, Marcin Parda</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
