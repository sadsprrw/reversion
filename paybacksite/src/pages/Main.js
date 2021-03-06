import React, {useContext, useEffect} from "react";

import Header from "../widgets/Header"
import MainForm from '../widgets/MainForm'
import HowItWorks from "../widgets/HowItWorks";
import ContactUsBanner from "../widgets/ContactUsBanner";
import Explanation from "../widgets/Explanation";
import Footer from "../widgets/Footer";
import _ from 'lodash';
import "../styles/Main.css"

import {ParagraphGeneration, RightSideGeneration} from "../widgets/ScrollGeneration";

import { Link, useHistory } from 'react-router-dom';
import useWindowDimensions from "../properities/windowProps";
import {Trans, useTranslation} from "react-i18next";
import {AuthContext} from "../properities/AuthContext";

const Main = () => {
    const { height, width } = useWindowDimensions();
    const {t, i18n} = useTranslation();
    const {auth, dispatch} = useContext(AuthContext)
    // auth.language
    // dispatch({
    //     type: 'setLang',
    //     payload: "ok"
    // })
    useEffect( () => {
        if(localStorage.Lang!=null || localStorage.Lang !== i18n.language) i18n.changeLanguage(localStorage.Lang)
    },[i18n]);
    return(
        <>
            <Header state={0}/>
            <MainForm firstHeader={"main.title1"} secondHeader={"main.title2"} state={0}/>
            <HowItWorks/>
            <div className="main__money-info">
                <div className="main__container">
                    <div className="main__money-info-content">
                        <div className="main__money-info-descr">
                            <h3 className="main__money-info-header">
                                <Trans i18nKey="money-info.header"/>
                            </h3>
                            <div className="main__money-info-amount" style={width > 1216 ? {display: "none"} : {}}>
                                $ 1,072,267
                            </div>
                            <div className="main__info-text">
                                <Trans i18nKey="money-info.title"/>
                            </div>
                        </div>
                        <div className="main__money-info-number" style={width < 1216 ? {display: "none"} : {}}>
                            <div className="main__money-info-amount">
                                $ 1,072,267
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__about-us">
                <div className="main__about-us-container">
                    <div className="column" style={width <= 767 ? {display:"none"} : {}}>
                        <div className="main__about-us-img-container">
                            <img
                                src="/images/hands.png"/>
                        </div>
                    </div>
                    <div className="column">
                        <div className="main__about-us-info">
                            <div className="main__about-us-descr">
                                <h2 className="main__content-header">
                                    <Trans i18nKey="about-us.header"/>
                                </h2>
                            </div>
                            <div className="main__about-us-img-container" style={width > 767 ? {display:"none"} : {}}>
                                <img
                                    src="/images/hands.png"/>
                            </div>
                            <div className="main__about-us-descr">
                                <p className="main__info-text"><Trans i18nKey="about-us.title"/></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main__money-back">
                <div className="main__container">
                    <div className="main__mb-content">
                        <div className="main__mb-header">
                            <h3 className="main__mb-header-text"><Trans i18nKey="money-back.header"/></h3>
                        </div>
                        <div className="main__mb-description">
                            <div className="main__mb-description-text"><Trans i18nKey="money-back.title"/>
                            </div>
                        </div>
                        <div className="main__mb-btn">
                            <Link to="/contact_us" className="yellow-btn"><Trans i18nKey="money-back.btn"/></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Explanation header={"exp.header"} firstParagraph={"exp.title1"} secondParagraph={"exp.title2"}/>
            <div className="main__table-of-content">
                {width > 767 ?
                    <div className="main__container">
                        <div className="main__tof-left-side">
                            <div className="main__tof-ls-content">
                                {_.map(i18n.t("mtocParagraphs", { returnObjects: true }), (p) => {
                                    return <ParagraphGeneration paragraph={p}/>
                                })}
                            </div>
                        </div>
                        <RightSideGeneration links={i18n.t("mtocLinks", { returnObjects: true })}/>
                    </div>
                    :
                    <div className="main__container" style={{flexDirection: "column", alignItems: "center"}}>
                        <RightSideGeneration links={i18n.t("mtocLinks", { returnObjects: true })}/>
                        <div className="main__tof-left-side">
                            <div className="main__tof-ls-content">
                                {_.map(i18n.t("mtocParagraphs", { returnObjects: true }), (p) => {
                                    return <ParagraphGeneration paragraph={p}/>
                                })}
                            </div>
                        </div>
                    </div>
                }
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}
export default Main;