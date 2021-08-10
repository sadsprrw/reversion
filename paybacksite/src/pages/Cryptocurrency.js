import React from "react";
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

import {settings} from "../properities/sliderSetings";
import {rcHeader, cHeader, ceHeader, ceParagraph} from "../content/text";
import { ctocLinks, ctocParagraphs} from "../content/table";
import {ParagraphGeneration, RightSideGeneration} from "../widgets/ScrollGeneration";
import {Element} from "react-scroll";
import useWindowDimensions from "../properities/windowProps";


const Cryptocurrency = () => {
    const { height, width } = useWindowDimensions();
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
            <Header state={2}/>
            <MainForm firstHeader={"c.title"} secondHeader={"rc.title"} state={2}/>
            <HowItWorks/>
            <Explanation header={ceHeader} firstParagraph={ceParagraph}/>
            <div className="main__table-of-content">
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    {width < 767 ? <RightSideGeneration links={ctocLinks}/> : <></>}
                    <div className="main__tof-left-side">
                        <div className="main__tof-ls-content">
                            {ctocParagraphs.map((p) => {
                                return <ParagraphGeneration paragraph={p}/>
                            })}
                            <Element name={"p6"} style={{width: "100%"}}>
                                <div className="main__content-container">
                                    <h2 className="main__text-content-header">
                                        Crypto Scam FAQ
                                    </h2>
                                </div>
                                <div className="main__content-container">
                                    <Accordion defaultActiveKey="0">
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"}
                                                              variant="link" eventKey="0">

                                                <div className="faq__accordion-title">
                                                    Can you get scammed on Bitcoin?
                                                    <span className="arrow faq__accordion-arrow"/>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="0">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    Scammers and fraudsters exist everywhere, and this is especially
                                                    true when it comes to Bitcoin. As a brand new asset class, be very
                                                    careful when it comes to opportunities in this investment space.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="1">

                                                <div className={"faq__accordion-title"}>
                                                    How can you spot a Bitcoin scammer?
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="1">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    Bitcoin scammers are just like any other scammer.
                                                    They will use high-pressure tactics, make you feel like
                                                    you are missing out on a once in a lifetime opportunity,
                                                    and show you false promises of riches and results. They will
                                                    make it all seem too good to be true.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="2">
                                                <div className={"faq__accordion-title"}>
                                                    Can you lose money on Bitcoin?
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="2">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    Absolutely! As with any investment in any speculative market,
                                                    the loss of value and your money is always at an inherent risk.
                                                    But that is different from losing money because someone scammed
                                                    you. Loss of value and market gyrations are one thing –
                                                    but fraud is another.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="3">

                                                <div className={"faq__accordion-title"}>
                                                    How can we help you get your money back?
                                                    <span className="arrow faq__accordion-arrow"/>
                                                </div>
                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="3">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    <a href="">Payback specializes in the recovery of money</a>
                                                    {"\t"}from people who have fallen victim to fraud and scam artists.
                                                    Payback uses an exhaustive process to investigate and go after
                                                    those who have wronged you deeply.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Element>
                        </div>
                    </div>
                    {width >= 767 ? <RightSideGeneration links={ctocLinks}/> : <></>}
                </div>
            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default Cryptocurrency