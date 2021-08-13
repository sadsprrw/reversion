import React from 'react'
import '../styles/HowItWorks.css';
import {Trans, useTranslation} from "react-i18next";

const HowItWorks = () => {
    const {t, i18n} = useTranslation();
    return(
        <div className="how-it-works">
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&display=swap" rel="stylesheet"/>
            <div className="how-it-works__container">
                <div className="how-it-works__content">
                    <div className="how-it-works__header">
                        <h2 className="how-it-works__major-text"><Trans i18nKey="how-it-works.header"/></h2>
                    </div>
                    <div className="how-it-works__cases">
                        <div className="how-it-works__cases-wrapper">
                            <div className="how-it-works__cases-card ryc">
                                <div className="how-it-works__cases-card-main-text"><Trans i18nKey="how-it-works.title1"/></div>
                                <div className="how-it-works__cases-card-body">
                                    <Trans i18nKey="how-it-works.text1"/>
                                </div>
                            </div>
                            <div className="how-it-works__cases-card gte">
                                <div className="how-it-works__cases-card-main-text"><Trans i18nKey="how-it-works.title2"/></div>
                                <div className="how-it-works__cases-card-body">
                                    <Trans i18nKey="how-it-works.text2"/>
                                </div>
                            </div>
                            <div className="how-it-works__cases-card cts">
                                <div className="how-it-works__cases-card-main-text"><Trans i18nKey="how-it-works.title3"/></div>
                                <div className="how-it-works__cases-card-body">
                                    <Trans i18nKey="how-it-works.text3"/>
                                </div>
                            </div>
                            <div className="how-it-works__cases-card gymb">
                                <div className="how-it-works__cases-card-main-text"><Trans i18nKey="how-it-works.title4"/></div>
                                <div className="how-it-works__cases-card-body">
                                    <Trans i18nKey="how-it-works.text4"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks