import React, {useState} from "react";
import Slider from "react-slick";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/MainForm.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'react-phone-input-2/lib/material.css'
import Form from "./Form";

import {settings} from "../properities/sliderSetings";
import {Trans} from "react-i18next";
import i18next from "i18next";
import useWindowDimensions from "../properities/windowProps";

const MainForm = ({firstHeader, secondHeader, subHeader, state}) => {
    const { height, width } = useWindowDimensions();

    return (
        <>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;800;550&display=swap" rel="stylesheet"/>
        <meta name={"viewport"} content={"width=device-width"}/>
        <div className="main-form" style={
            width > 1216 && i18next.language === 'en' && state === 2  ? {maxHeight: "570px"} :
                width > 1216 && i18next.language === 'de' && (state === 1 || state === 3) ? {maxHeight: "630px"} :
                    width > 1216 && i18next.language === 'de' && (state === 4 || state === 5) ? {maxHeight: "530px"} :
                        width > 1216 && i18next.language === 'de' && state === 2 ? {maxHeight: "700px"} :
                            width > 1216 && i18next.language === 'de' && state === 0 ? {maxHeight: "670px"} :
                                width < 1216 && i18next.language === 'de' && state === 2 ? {maxHeight: "400px"} :
                                    width < 1216 && i18next.language === 'de' && state === 4 ? {maxHeight: "300px", minHeight: "300px"} : {}
        }>
            <div className="main-form__container">
                <div className="main-form__left-side">
                    <div className={"main-form__ls-content"}>
                        <div className="main-form-ls__main-text" style={width > 1216 && i18next.language === 'en' && state === 5  ? {maxWidth: "520px"} : {}}>
                            <span><Trans i18nKey={firstHeader}/></span>
                            <span style={{color: "#fae12c"}}><Trans i18nKey={secondHeader}/></span>
                        </div>
                        <div className="main-form-ls__add-text">
                            <p>{state === 5 || state === 0 ? <Trans i18nKey={"main.sub-title"} /> : <Trans i18nKey={"rc.sub-title"}/> }</p>
                        </div>
                    </div>
                </div>
                <div className="main-form__right-side">
                    <Form/>
                </div>
            </div>
        </div>
        </>
    )
}

export default MainForm