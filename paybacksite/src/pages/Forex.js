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

import {ParagraphGeneration, RightSideGeneration} from "../widgets/ScrollGeneration";
import {Element} from "react-scroll";
import useWindowDimensions from "../properities/windowProps";
import {Trans, useTranslation} from "react-i18next";
import _ from "lodash";
import parse from "html-react-parser";
import {AuthContext} from "../properities/AuthContext";

const Forex = () => {
    const { height, width } = useWindowDimensions();
    const {t, i18n} = useTranslation();
    const {auth, dispatch} = useContext(AuthContext)
    useEffect(() => {
        i18n.changeLanguage(auth.language)
    },[i18n]);
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
            <Header state={3}/>
            <MainForm firstHeader={"f.title"} secondHeader={"rc.title"} state={3}/>
            <HowItWorks/>
            <Explanation header={"f.exp-header"} firstParagraph={"f.exp-title"}/>
            <div className="main__table-of-content">
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    {width < 767 ? <RightSideGeneration links={i18n.t("f.tocLinks", { returnObjects: true })}/> : <></>}
                    <div className="main__tof-left-side">
                        <div className="main__tof-ls-content">
                            {_.map(i18n.t("f.tocParagraphs", { returnObjects: true }), (p) => {
                                return <ParagraphGeneration paragraph={p}/>
                            })}
                            <Element name={"p5"} style={{width: "100%"}}>
                                <div className="main__content-container">
                                    <h2 className="main__text-content-header">
                                        <Trans i18nKey="f.articles.header"/>
                                    </h2>
                                </div>
                                <div className="main__content-container">
                                    <Accordion defaultActiveKey="0">
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"}
                                                              variant="link" eventKey="0">

                                                <div className="faq__accordion-title">
                                                    <Trans i18nKey="f.articles.title1"/>
                                                    <span className="arrow faq__accordion-arrow"/>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="0">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    {parse(i18n.t("f.articles.text1"))}
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="1">

                                                <div className={"faq__accordion-title"}>
                                                    <Trans i18nKey="f.articles.title2"/>
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="1">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    {parse(i18n.t("f.articles.text2"))}
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="2">

                                                <div className={"faq__accordion-title"}>
                                                    <Trans i18nKey="f.articles.title3"/>
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="2">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    {parse(i18n.t("f.articles.text3"))}
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Element>
                        </div>
                    </div>
                    {width >= 767 ? <RightSideGeneration links={i18n.t("f.tocLinks", { returnObjects: true })}/> : <></>}
                </div>
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default Forex