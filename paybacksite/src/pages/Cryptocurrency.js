import React, {useContext, useEffect} from "react";

import Header from "../widgets/Header"
import MainForm from '../widgets/MainForm'
import HowItWorks from "../widgets/HowItWorks";

import Explanation from "../widgets/Explanation";
import ContactUsBanner from "../widgets/ContactUsBanner";
import Footer from "../widgets/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/FAQlist.css"
import "../styles/Main.css"


import {ParagraphGeneration, RightSideGeneration} from "../widgets/ScrollGeneration";
import useWindowDimensions from "../properities/windowProps";
import {useTranslation} from "react-i18next";
import _ from "lodash";
import {AuthContext} from "../properities/AuthContext";


const Cryptocurrency = () => {
    const { height, width } = useWindowDimensions();
    const {t, i18n} = useTranslation();
    const {auth, dispatch} = useContext(AuthContext)
    useEffect( () => {
        if(localStorage.Lang!=null || localStorage.Lang !== i18n.language) i18n.changeLanguage(localStorage.Lang)
    },[i18n]);
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
            <Header state={2}/>
            <MainForm firstHeader={"c.title"} secondHeader={"rc.title"} state={2}/>
            <HowItWorks/>
            <Explanation header={"c.exp-header"} firstParagraph={"c.exp-title"}/>
            <div className="main__table-of-content">
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    {width < 767 ? <RightSideGeneration links={i18n.t("c.tocLinks", { returnObjects: true })}/> : <></>}
                    <div className="main__tof-left-side">
                        <div className="main__tof-ls-content">
                            {_.map(i18n.t("c.tocParagraphs", { returnObjects: true }), (p) => {
                                return <ParagraphGeneration paragraph={p}/>
                            })}
                        </div>
                    </div>
                    {width >= 767 ? <RightSideGeneration links={i18n.t("c.tocLinks", { returnObjects: true })}/> : <></>}
                </div>
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default Cryptocurrency