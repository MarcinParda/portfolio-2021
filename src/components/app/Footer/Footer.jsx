import React from 'react';
import face from '../../../img/face.png';
import {useTranslation} from "react-i18next";
import plFlag from "../../../img/plFlag.png";
import ukFlag from "../../../img/enFlag.png";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="footer mt-5">
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
