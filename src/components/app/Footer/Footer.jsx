import React from 'react';
import {useTranslation} from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer mt-20">
            <div className="mt-4">
                <div>
                    <span className="text-white">{t("Email")}: marcin98parda@gmail.com</span>
                </div>
                <div>
                    <span className="text-white">{t("Number")}: +48 576 259 548</span>
                </div>
                <div className="mt-1">
                    <span className="text-white">{t("Made with passion")}</span>
                </div>
                <div>
                    <span className="text-white">© 2021, Marcin Parda</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
