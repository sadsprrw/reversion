import React, {useContext, useEffect} from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'

import Header from "../widgets/Header"
import MainForm from '../widgets/MainForm'
import HowItWorks from "../widgets/HowItWorks";

import Explanation from "../widgets/Explanation";
import ContactUsBanner from "../widgets/ContactUsBanner";
import Footer from "../widgets/Footer";

import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/FAQlist.css"
import "../styles/Main.css"

import {rcHeader, stHeader, steHeader, steParagraph} from "../content/text";
import { sttocLinks, sttocParagraphs} from "../content/table";
import {ParagraphGeneration, RightSideGeneration} from "../widgets/ScrollGeneration";
import {Element} from "react-scroll";
import useWindowDimensions from "../properities/windowProps";
import _ from "lodash";
import {useTranslation} from "react-i18next";
import {AuthContext} from "../properities/AuthContext";

const StockTrading = () => {
    const { height, width } = useWindowDimensions();
    const {t, i18n} = useTranslation();
    const {auth, dispatch} = useContext(AuthContext)
    useEffect(() => {
        i18n.changeLanguage(auth.language)
    },[i18n]);
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
            <Header state={4}/>
            <MainForm firstHeader={"st.title"} secondHeader={"rc.title"} state={4}/>
            <HowItWorks/>
            <Explanation header={"st.exp-header"} firstParagraph={"st.exp-title"}/>
            <div className="main__table-of-content">
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    {width < 767 ? <RightSideGeneration links={i18n.t("st.tocLinks", { returnObjects: true })}/> : <></>}
                    <div className="main__tof-left-side">
                        <div className="main__tof-ls-content">
                            {_.map(i18n.t("st.tocParagraphs", { returnObjects: true }), (p) => {
                                return <ParagraphGeneration paragraph={p}/>
                            })}
                        </div>
                    </div>
                    {width >= 767 ? <RightSideGeneration links={i18n.t("st.tocLinks", { returnObjects: true })}/> : <></>}
                </div>
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default StockTrading