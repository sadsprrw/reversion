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
import "../styles/Main.css"
import "../styles/FAQlist.css"

import {rcHeader, boHeader, boeHeader, boeParagraph} from "../content/text";
import {botocLinks, botocParagraphs} from "../content/table";
import {ParagraphGeneration, RightSideGeneration} from "../widgets/ScrollGeneration";
import {Element} from "react-scroll";
import useWindowDimensions from "../properities/windowProps";


const BinaryOptions = () => {
    const { height, width } = useWindowDimensions();
    return (
        <>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet"/>
            <Header state={1} />
            <MainForm firstHeader={"bo.title"} secondHeader={"rc.title"} state={1}/>
            <HowItWorks/>
            <Explanation header={boeHeader} firstParagraph={boeParagraph}/>
            <div className="main__table-of-content">
                <div className="main__container" style={width < 767 ? {flexDirection: "column", alignItems: "center"} : {}}>
                    {width < 767 ? <RightSideGeneration links={botocLinks}/> : <></>}
                    <div className="main__tof-left-side">
                        <div className="main__tof-ls-content">
                            {botocParagraphs.map((p) => {
                                return <ParagraphGeneration paragraph={p}/>
                            })}
                            <Element name={"p5"} style={{width: "100%"}}>
                                <div className="main__content-container">
                                    <h2 className="main__text-content-header">
                                        Binary Options Scam FAQ
                                    </h2>
                                </div>
                                <div className="main__content-container">
                                    <Accordion defaultActiveKey="0">
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"}
                                                              variant="link" eventKey="0">

                                                <div className="faq__accordion-title">
                                                    Are Binary Options Legal in the US?
                                                    <span className="arrow faq__accordion-arrow"/>
                                                </div>

                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="0">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    Binary options are legal in the US and have overlapping regulatory
                                                    agencies, chiefly the CFTC (Commodities Futures Trade Commission)
                                                    and the SEC (Securities and Exchange Commission).
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="1">

                                                <div className={"faq__accordion-title"}>
                                                    How do binary options robots work?
                                                    <span className="arrow faq__accordion-arrow"/>
                                                </div>

                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="1">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    There are several mediums that binary options robots use
                                                    – the primary is an executable piece of software, the other
                                                    requires you to share account information for the robot
                                                    to trade on your behalf.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="2">

                                                <div className={"faq__accordion-title"}>
                                                    What is binary options trade copying?
                                                    <span className="arrow faq__accordion-arrow" />
                                                </div>

                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="2">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    Binary options trade copying is a service offered in the same vein
                                                    as robots and signals. Trade copying essentially connects your
                                                    brokerage account to a ‘master’ account, and it will automatically
                                                    trade your account for you.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                        <Card style={{ border: 'none', padding: '0'}} className="faq__accordion-card" >
                                            <Accordion.Toggle as={Card.Header} className={"faq__accordion-card-toggle"} variant="link" eventKey="3">

                                                <div className={"faq__accordion-title"}>
                                                    I was scammed by a binary options scam. How do I get my money back?
                                                    <span className="arrow faq__accordion-arrow" style={{top: "20px"}}/>
                                                </div>

                                            </Accordion.Toggle>
                                            <Accordion.Collapse style={{marginTop: "0"}} eventKey="3">
                                                <Card.Body className={"faq__accordion-text"}>
                                                    If you were scammed out of your money due to a dishonest binary
                                                    options broker or a service that lied about its performance, you still have{"\t"}
                                                    <a href="">options to recover some or all of your money</a>.
                                                    Payback is a company that specializes in the recovery of your money.
                                                </Card.Body>
                                            </Accordion.Collapse>
                                        </Card>
                                    </Accordion>
                                </div>
                            </Element>
                        </div>
                    </div>
                    {width >= 767 ? <RightSideGeneration links={botocLinks}/> : <></>}
                </div>

            </div>
            <ContactUsBanner/>
            <Footer/>
        </>
    )
}

export default BinaryOptions